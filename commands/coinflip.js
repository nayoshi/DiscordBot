const {
  coin
} = require('../constants/coinflip')

module.exports = async function (command) {
  const result = Math.floor(Math.random() * 2)

  await command.message.channel.send('<@' + command.message.member.id + '>, you got ' + coin[result].name)
}

module.exports.permission = ''
module.exports.use = ''
module.exports.description = 'Flips a coin for the user.'
