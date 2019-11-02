// Written by Abrahan Nevarez for KnightHacks@UCF
// Library check the user's calander and appropriately display the available start times and end times for that day
module.exports = async function (command) {
  // Sets up a array for the days of the week
  var days = [
    'Sunday', 'Monday', 'Tuesday', 'Wensday', 'Thursday', 'Friday', 'Saturday'
  ]

  // Sets up a array for the months of the year
  var months = [
    'January', 'Feburary', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'
  ]

  // Sets up a dictionary object for the hours
  var libraryHours = {
    Monday: {
      Availabletimes: [{
        Start: '7:30am',
        Closed: '1am'
      }]
    },

    Tuesday: {
      Availabletimes: [{
        Start: '7:30am',
        Closed: '1am'
      }]
    },

    Wednesday: {
      Availabletimes: [{
        Start: '7:30am',
        Closed: '1am'
      }]
    },

    Thursday: {
      Availabletimes: [{
        Start: '7:30am',
        Closed: '1am'
      }]
    },

    Friday: {
      Availabletimes: [{
        Start: '7:30am',
        Closed: '7pm'
      }]
    },

    Saturday: {
      Availabletimes: [{
        Start: '9am',
        Closed: '7pm'
      }]
    },

    Sunday: {
      Availabletimes: [{
        Start: '12pm',
        Closed: '1am'
      }]
    }
  }
  // Sets a new variable for current date
  var currentDate = new Date()

  // Try catch in case of bad dates
  try {
    // Checks for specific days using the user calander
    switch (days[currentDate.getDay()]) {
    case 'Monday':
      await command.message.channel.send('```Today the library is open from: ' +
          libraryHours.Monday.Availabletimes[0].Start + ' - ' +
          libraryHours.Monday.Availabletimes[0].Closed + '```')
      break

    case 'Tuesday':
      await command.message.channel.send('```Today the library is open from: ' +
          libraryHours.Tuesday.Availabletimes[0].Start + ' - ' +
          libraryHours.Tuesday.Availabletimes[0].Closed + '```')
      break

    case 'Wednesday':
      await command.message.channel.send('```Today the library is open from: ' +
          libraryHours.Wednesday.Availabletimes[0].Start + ' - ' +
          libraryHours.Wednesday.Availabletimes[0].Closed + '```')
      break

    case 'Thursday':
      await command.message.channel.send('```Today the library is open from: ' +
          libraryHours.Thursday.Availabletimes[0].Start + ' - ' +
          libraryHours.Thursday.Availabletimes[0].Closed + '```')
      break

    case 'Friday':
      await command.message.channel.send('```Today the library is open from: ' +
          libraryHours.Friday.Availabletimes[0].Start + ' - ' +
          libraryHours.Friday.Availabletimes[0].Closed + '```')
      break

    case 'Saturday':
      await command.message.channel.send('```Today the library is open from: ' +
          libraryHours.Saturday.Availabletimes[0].Start + ' - ' +
          libraryHours.Saturday.Availabletimes[0].Closed + '```')
      break

    case 'Sunday':
      await command.message.channel.send('```Today the library is open from: ' +
          libraryHours.Sunday.Availabletimes[0].Start + ' - ' +
          libraryHours.Sunday.Availabletimes[0].Closed + '```')
      break
    }
  }

  // Catch in case the day doesn't exist
  catch (error) {
    console.log('Error has been encountered: ' + error +
      '\nError is most likely attributed to incorrect date')
  }
}
// Allows the bot all permissions
module.exports.permission = ''

module.exports.use = ''

// Sets the description of the command
module.exports.description = 'Grab the current day\'s library hours'
