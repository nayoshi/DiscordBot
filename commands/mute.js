const { muteRole } = require('../config')

module.exports = async function (command) {
  const { message, args } = command
  if (message.member.hasPermission('MANAGE_MESSAGES')) {
    const member = message.guild.member(message.mentions.users.first()) || message.guild.members.get(args[0])
    if (member && member.id !== message.author.id && member.highestRole.position < message.member.highestRole.position) { await member.addRole(message.guild.roles.get(muteRole)) }
  }
}
