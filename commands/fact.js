// Written Originally by Tyler Sander
const fetch = require('node-fetch')
const cheerio = require('cheerio')
// Function grabs a random fact from the html of a website
module.exports = async function (command) {
  // this site has ~1400 random facts
  var id = Math.floor(Math.random() * 1490) + 1

  const URL = 'http://www.randomfactgenerator.net/?id=' + id
  if (id === 1490) {
    command.message.channel.send("Facts don't care about your feelings!")
  } else {
    // Grabs the url returns Response
    const response = await fetch(URL)
    // Parses the body out of the response
    const body = await response.text()

    // Load up html to cheerio
    const $ = cheerio.load(body)
    // Finds the z class in the html
    const container = $('#z').text()
    // Split the line breaks in to arrays
    const containerSplit = container.split('\n')
    // Get the first index which is the fact
    const fact = containerSplit[0]
    // Send out message
    command.message.channel.send(fact)
  }
}

module.exports.permission = ''
module.exports.use = ''
module.exports.description = 'Random fact command'
