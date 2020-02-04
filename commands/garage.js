// Importing all node modules
const request = require('request')
const Discord = require('discord.js')
const cheerio = require('cheerio')
const fs = require('fs')

// Importing JSON constants from local file
const garageJSON = require('../constants/garage')
const { garageTime } = require('../constants/config')

const URL = 'https://secure.parking.ucf.edu/GarageCount/iframe.aspx'

// Command executor
module.exports = async function (command) {
  // Requests for the garage data, and the function will wait for the return value
  const garageData = await requestGarageData()
  // Creating an embedded message for discord
  const embed = new Discord.RichEmbed()
    .setColor('#55555')
    .setTitle('**UCF Garage Status**')
  // For every single garage that is available, create an inline field in the embedded message
  // Format:
  // Garage letter:
  // 500/500 (100%)
  Object.keys(garageData).forEach((value, index) => {
    embed.addField('**Garage ' + value + '**', garageData[value].space + '/' + garageData[value].total + ' (' + garageData[value].percentage + '% full)', true)
  })
  // This fetches the cached time in the local file to inform user of how "new" the data is
  // Format:
  // Cached at MM/DD/YYYY HH:MM:SS AM/PM
  const cachedDate = new Date(garageJSON.nextCache - garageTime)
  embed.setFooter('Cached at ' + cachedDate.toLocaleDateString('en-US', { dateStyle: 'full', timeZone: 'America/New_York' }) + ' ' + cachedDate.toLocaleTimeString('en-US', { dateStyle: 'full', timeZone: 'America/New_York' }))

  command.message.channel.send(embed)
}

function requestGarageData () {
  // Promises are packages that you send to an async function where they can access the files whenever the function finishes
  return new Promise((resolve, reject) => {
    // Gets the current time in Unix epoch milliseconds
    const currentTime = (new Date()).getTime()
    // Accesses the garage file to be able to write in to it
    const garageFile = 'constants/garage.json'

    // If the next cache is due, otherwise give cached data
    if (garageJSON.nextCache < currentTime) {
      request(URL, (error, response, body) => {
        if (error) {
          console.error(error)
          return
        }
        // Create a JSObject
        var garageData = {}
        const $ = cheerio.load(body)
        // for each row in the website, create an entry in the JSObject
        // and store the space and total spaces, also calculate the occupancy percentage
        var i = 0
        while ($('#gvCounts_DXDataRow' + i).text()) {
          const row = $('#gvCounts_DXDataRow' + i).text()
          const garage = row.match(/(Garage)\s*(\w*)/)[2]
          garageData[garage] = {}
          const num = row.match(/(\d*)\/(\d*)/)
          garageData[garage].space = parseInt(num[1])
          garageData[garage].total = parseInt(num[2])
          if (garageData[garage].space >= garageData[garage].total) {
            garageData[garage].space = garageData[garage].total
          } else if (garageData[garage].space <= 0) {
            garageData[garage].space = 0
          }
          garageData[garage].percentage = Math.round((((garageData[garage].total - garageData[garage].space) / garageData[garage].total) * 100))
          i++
        }
        // Override what's in the cached json and write it in to the file
        garageJSON.garages = garageData
        garageJSON.nextCache = currentTime + garageTime
        fs.writeFile(garageFile, JSON.stringify(garageJSON, null, 2), (err) => {
          if (err) {
            reject(err)
          } else {
            resolve(garageData)
          }
        })
      })
    } else {
      resolve(garageJSON.garages)
    }
  })
}

module.exports.permission = ''

module.exports.use = ''

// Sets the description of the command
module.exports.description = 'Shows the currently available amount of spaces in UCF\'s garages'
