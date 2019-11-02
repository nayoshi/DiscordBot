const roleReactionMap = require('./roleReactionMap')
const { roleMessageId } = require('../constants/config')

module.exports = async function (event, client) {
  if ((event.t === 'MESSAGE_REACTION_REMOVE') || (event.t === 'MESSAGE_REACTION_ADD')) {
    const { d: data } = event
    const user = client.users.get(data.user_id)
    const channel = client.channels.get(data.channel_id)

    channel.fetchMessage(data.message_id).then(message => {
      if (!user) return
      if (user.bot) return
      if (!message.channel.guild) return
      if (message.id !== roleMessageId) return
      if (roleReactionMap[data.emoji.name] == null) return

      const role = message.guild.roles.find(r => r.name === roleReactionMap[data.emoji.name])
      if (event.t === 'MESSAGE_REACTION_ADD') {
        message.guild.member(user).addRole(role).catch(console.error)
      } else if (event.t === 'MESSAGE_REACTION_REMOVE') {
        message.guild.member(user).removeRole(role).catch(console.error)
      }
    }).catch(err => {
      console.log(err)
    })
  }
}
