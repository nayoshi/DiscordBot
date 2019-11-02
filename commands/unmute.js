const {
  mutedRole
} = require('../constants/config')
module.exports = async function (command) {
  const {
    message,
    args
  } = command
  const unYeet = message.guild.member(message.mentions.users.first()) || message.guild.members.get(args[0])
  if (unYeet) await unYeet.removeRole(message.guild.roles.get(mutedRole))
}
module.exports.permission = 'MANAGE_MESSAGES'
module.exports.use = 'mute @<Username>'
module.exports.description = 'Unmutes the specified user'
