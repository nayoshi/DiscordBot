module.exports = async function (command) {
  const {
    message,
    args
  } = command
  const member = message.guild.member(message.mentions.users.first()) || message.guild.members.get(args[0])

  await member.ban(member).catch(console.error)
  // add message whenever someone gets banned to a logging channel
}
module.exports.permission = 'BAN_MEMBERS'
module.exports.use = 'ban @<Username>'
module.exports.description = 'Bans the specified user'
