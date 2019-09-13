const Discord = require("discord.js");

module.exports = async function(command){
    let guild = command.message.guild;
    let online = guild.members.filter(m => m.presence.status === 'online');
    let admins = online.filter(m => m.roles.has('619209554261049345'));
    let dnd = guild.members.filter(m => m.presence.status === 'do not disturb');
    let idle = guild.members.filter(m => m.presence.status === 'idle');

    let embed = new Discord.RichEmbed()
      .setDescription('Information')
      .setColor('#15f153')
      .setThumbnail(guild.iconURL)
      .addField('Server Name', guild.name)
      .addField('Created On', guild.createdAt)
      .addField('Total Members', guild.memberCount)
      .addField('Online', online.size)
      .addField('Do Not Disturb', dnd.size)
      .addField('Idle', idle.size)
      .addField('Admins available', admins.size);

    await command.message.channel.send(embed);
}