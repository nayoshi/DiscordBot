const {
  muteRole
} = require('../constants/config')

module.exports = async function (command) {
  const {
    message,
    args
  } = command
  const member = message.guild.member(message.mentions.users.first()) || message.guild.members.get(args[0])
  if (member && member.id !== message.author.id && member.highestRole.position < message.member.highestRole.position) {
    await member.addRole(message.guild.roles.get(muteRole))
  }
}
module.exports.permission = 'MANAGE_MESSAGES'
module.exports.use = 'mute @<Username>'
module.exports.description = 'Mutes the specified user'
