const Discord = require('discord.js')

module.exports = async function (command) {
  const guild = command.message.guild
  const online = guild.members.filter(m => m.presence.status === 'online')
  const admins = online.filter(m => m.roles.has('619209554261049345'))
  const dnd = guild.members.filter(m => m.presence.status === 'do not disturb')
  const idle = guild.members.filter(m => m.presence.status === 'idle')

  const embed = new Discord.RichEmbed()
    .setDescription('Information')
    .setColor('#15f153')
    .setThumbnail(guild.iconURL)
    .addField('Server Name', guild.name)
    .addField('Created On', guild.createdAt)
    .addField('Total Members', guild.memberCount)
    .addField('Online', online.size)
    .addField('Do Not Disturb', dnd.size)
    .addField('Idle', idle.size)
    .addField('Admins available', admins.size)

  await command.message.channel.send(embed)
}
module.exports.permission = ''
module.exports.use = ''
module.exports.description = 'Displays server statistics'
