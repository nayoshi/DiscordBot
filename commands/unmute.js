const { mutedRole } = require('../config')
module.exports = async function (command) {
  const { message, args } = command
  if (message.member.hasPermission('MANAGE_MESSAGES')) {
    const unYeet = message.guild.member(message.mentions.users.first()) || message.guild.members.get(args[0])
    if (unYeet) await unYeet.removeRole(message.guild.roles.get(mutedRole))
  }
}
module.exports.description = ""