module.exports = async function (command) {
  const {
    message,
    args
  } = command
  const member = message.guild.member(message.mentions.users.first()) || message.guild.members.get(args[0])

  await member.kick(member).catch(console.error)
  // add message whenever someone gets kicked to a logging channel
}
module.exports.permission = 'KICK_MEMBERS'
module.exports.use = 'kick @<Username>'
module.exports.description = 'Kicks the specified user'
