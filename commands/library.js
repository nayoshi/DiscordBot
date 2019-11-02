// Written by Abrahan Nevarez for KnightHacks@UCF
// Sets up a dictionary object for the hours
const libraryHours = require('../constants/libraryHours')

// Library check the user's calendar and appropriately display the available start times and end times for that day
module.exports = async function (command) {
  // Sets up an array for the days of the week
  const days = [
    'Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'
  ]
  // Sets a new variable for current date
  const currentDate = new Date()
  // Try catch in case of bad dates
  const day = days[currentDate.getDay()]
  command.message.channel.send('```Today the library is open from: ' +
      libraryHours[day].Start + ' - ' +
      libraryHours[day].Closed + '```'
  )
}
// Allows the bot all permissions
module.exports.permission = ''

module.exports.use = ''

// Sets the description of the command
module.exports.description = 'Grab the current day\'s library hours'
