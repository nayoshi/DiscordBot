
const request = require('request')

const Discord = require('discord.js')
const cheerio = require('cheerio')

const URL = 'https://secure.parking.ucf.edu/GarageCount/iframe.aspx'

const fs = require('fs')

const garageCache = require('../constants/garage')
const { garageTime } = require('../constants/config')
module.exports = async function (command) {
  const garageData = await requestGarageData(5)
  const embed = new Discord.RichEmbed()
    .setColor('#55555')
    .setTitle('UCF Garage Status')

  Object.keys(garageData).forEach((value, index) => {
    embed.addField('Garage ' + value, garageData[value].space + '/' + garageData[value].total + ' (' + garageData[value].percentage + '%)', true)
  })
  const cachedDate = new Date(garageCache.nextCache - garageTime)
  embed.setFooter('Cached at ' + cachedDate.toLocaleDateString('en-US', { dateStyle: 'full', timeZone: 'America/New_York' }) + ' ' + cachedDate.toLocaleTimeString('en-US', { dateStyle: 'full', timeZone: 'America/New_York' }))
  // Sends the message so that user will be notified
  command.message.channel.send(embed)
}

function requestGarageData () {
  var garageAvail = {}
  return new Promise((resolve, reject) => {
    const currentTime = (new Date()).getTime()
    const garageFile = 'constants/garage.json'
    if (garageCache.nextCache < currentTime) {
      request(URL, (error, response, body) => {
        const $ = cheerio.load(body)
        if (error) {
          console.error(error)
          return
        }
        for (let i = 0; i < 7; i++) {
          const row = $('#gvCounts_DXDataRow' + i).text()
          const garage = row.match(/(Garage)\s*(\w*)/)[2]
          garageAvail[garage] = {}
          const num = row.match(/(\d*)\/(\d*)/)
          garageAvail[garage].space = parseInt(num[1])
          garageAvail[garage].total = parseInt(num[2])
          if (garageAvail[garage].space >= garageAvail[garage].total) {
            garageAvail[garage].space = garageAvail[garage].total
          } else if (garageAvail[garage].space <= 0) {
            garageAvail[garage].space = 0
          }
          garageAvail[garage].percentage = Math.round((((garageAvail[garage].total - garageAvail[garage].space) / garageAvail[garage].total) * 100))
        }
        garageCache.garages = garageAvail
        garageCache.nextCache = currentTime + garageTime
        fs.writeFile(garageFile, JSON.stringify(garageCache, null, 2), (err) => {
          if (err) {
            reject(err)
          } else {
            resolve(garageAvail)
          }
        })
      })
    } else {
      resolve(garageCache.garages)
    }
  })
}

module.exports.permission = ''

module.exports.use = ''

// Sets the description of the command
module.exports.description = 'Shows the currently available amount of spaces in UCF\'s garages'
