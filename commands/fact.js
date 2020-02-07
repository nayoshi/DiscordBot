// Written by Tyler Sanders for KnightHacks@UCF
const fetch = require('node-fetch')

// Function grabs a random fact from the html of a website
module.exports = async function (command) {
  // this site has ~1400 random facts
  var id = Math.floor((Math.random() * 1399) + 1)
  fetch('http://www.randomfactgenerator.net/?id=' + id).then(function (url) {
    url.text().then(function (text) {
      // character 2077 in the html is where the fact starts
      var index = 2077
      // loop until there is more html
      while (text.charAt(index) !== '<') {
        index++
      }
      var fact = text.substring(2077, index)
      command.message.channel.send(fact)
    })
  })
}

module.exports.permission = ''
module.exports.use = ''
module.exports.description = 'Random fact command'
