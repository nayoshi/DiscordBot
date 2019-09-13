const commandMap = require('./command-map')
const { prefix } = require('../config')
module.exports = async function (message) {
  if (message.author.bot) return
  if (message.channel.type === 'dm') return

  const line = message.content.split(' ')
  const command = {
    name: line[0].substring(1).toLowerCase(),
    prefix: line[0].substring(0, 1),
    args: line.slice(1),
    message: message
  }

  if (command.prefix !== prefix) return
  if (commandMap[command.name] == null) return

  commandMap[command.name](command)
}
