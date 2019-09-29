const commandMap = require('./commandMap')
const { prefix } = require('../config')
const Discord = require('discord.js')
module.exports = async function (message) {
  if (message.author.bot) return
  if (message.channel.type === 'dm') return

  const line = message.content.split(' ')
  const command = {
    name: line[0].substring(1).toLowerCase(),
    prefix: line[0].substring(0, 1),
    args: line.slice(1),
    message: message,
    commands: commandMap
  }

  if (command.prefix !== prefix) return
  if (commandMap[command.name] == null) return

  if (commandMap[command.name].permission !== '') {
    if (!message.member.hasPermission(commandMap[command.name].permission)) {
      const embed = new Discord.RichEmbed()
        .setTitle('**' + command.name + '**')
        .setColor('#15f153')
        .setDescription('You do not have the permission to run this command.')
      message.channel.send(embed)
      return
    }
  }

  commandMap[command.name](command)
}
