// Config.js will verify and check if the files in JSON files exist, if not please create.
const fs = require('fs')

const configs = {
  constants: {
    'garage.json': {
      nextCache: 0

    },
    'config.json': {
      prefix: '!',
      meaning_of_life: 42,
      muteRole: '',
      roleMessageId: '',
      garageTime: 120000
    },
    'token.json': {
      token: 'INSERT TOKEN'
    }
  },
  roles: {
    'roleReactionMap.json': {
    }
  }
}

Object.entries(configs).forEach(async element => {
  var directory = element[0]
  fs.mkdir(directory, err => {
    if (err) { console.log(directory, ' already exists!') } else { console.log(directory, ' has been created') }
  })
  var configFiles = element[1]

  Object.entries(configFiles).forEach(async element => {
    const configFile = element[0]
    const content = element[1]
    fs.writeFile(directory + '/' + configFile,
      JSON.stringify(content, null, 4),
      { flag: 'wx' },
      (err) => {
        if (err) {
          if (err.errno === -17) {
            console.log(directory + '/' + configFile, 'already exists')
          } else {
            console.log(err)
          }
        } else {
          console.log(directory + '/' + configFile, 'created')
        }
      }
    )
  })
})
