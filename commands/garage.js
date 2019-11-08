// Credit to Space and hacker-alliance for the code

// Written by Abrahan Nevarez for KnightHacks@UCF
// Displays parking data with percentages full

// Installs request necessary for HTTP calls
const request = require('request')

// Installs cherio, needed for JSON data
const cheerio = require('cheerio')

const URL = 'https://secure.parking.ucf.edu/GarageCount/iframe.aspx'

// Number of Garage Spots Available
var garageAvail = {}

module.exports = async function (command) {
  // Gets the data of available garages from web page
  request(URL, (error, response, body) => {
    const $ = cheerio.load(body)
    if (error) {
      console.error(error)
      return
    }
    // TODO Get the number of garages from website
    // Loops 7 times because that's how many garages exists
    for (let i = 0; i < 7; i++) {
      // Gets every single row by their id
      const row = $('#gvCounts_DXDataRow' + i).text()
      // Regex match of `Garage *` and capture the wildcard
      const garage = row.match(/(Garage)\s*(\w*)/)[2]
      // Initialize the json object
      garageAvail[garage] = {}
      // Regex match of `num1/num2` and num 1 is the free space and num2 is the total number of spots
      const num = row.match(/(\d*)\/(\d*)/)
      garageAvail[garage].space = parseInt(num[1])
      garageAvail[garage].total = parseInt(num[2])
      // Corrects for the misnumbering of the parking spaces. As the number of parking garages does not match with the actual number.
      if (garageAvail[garage].space >= garageAvail[garage].total) {
        garageAvail[garage].space = garageAvail[garage].total
      } else if (garageAvail[garage].space <= 0) {
        garageAvail[garage].space = 0
      }
    }
    // Beginning of a message
    // TODO Embedded Message rather than simple message
    let message = '```'
    // For each key in the JS Object, construct the message while doing math on the fly.
    Object.keys(garageAvail).forEach((value, index) => {
      // The math is (max - available) / max * 100
      message += 'Garage ' + value + ': ' + garageAvail[value].space + ' out of ' + garageAvail[value].total +
        ' spaces available ' + (Math.round((((garageAvail[value].total - garageAvail[value].space) / garageAvail[value].total) * 100))) + '% full '
      message += '\n'
    })
    message += '```'
    // Sends the message so that user will be notified
    command.message.channel.send(message)
  })
}

module.exports.permission = ''

module.exports.use = ''

// Sets the description of the command
module.exports.description = 'Shows the currently available amount of spaces in UCF\'s garages'
