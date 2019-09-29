const Discord = require('discord.js')

module.exports = async function (command) {
  const memberToFind = command.message.mentions.members.first() // Checks for a mentioned user

  if (!memberToFind) {
    return command.message.channel.send('You must mention a member!')
  }

  const embed = new Discord.RichEmbed()
    .setAuthor(memberToFind.user.tag, memberToFind.user.avatarURL)
    .addField('Account Created', memberToFind.user.createdAt, true)
    .addField('Joined this Server', command.message.guild.members.find('id', memberToFind.id).joinedAt, true)
    .addField('User ID', memberToFind.id, true)
    .setColor(0xffffff)
    .setFooter('Searched User')
    .setTimestamp()

  command.message.channel.send(embed)
}
