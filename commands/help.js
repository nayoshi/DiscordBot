const Discord = require('discord.js')

module.exports = async function (command) {
  const {
    commands,
    message
  } = command
  const embed = new Discord.RichEmbed()
    .setTitle('All Commands')
    .setColor('#15f153')

  Object.keys(commands).forEach((val, index) => {
    if (commands[val].permission !== '') {
      if (!message.member.hasPermission(commands[val].permission)) {
        return
      }
    }
    embed.addField('**' + val + '**', commands[val].description)
  })

  message.channel.send('<@' + message.member.id + ">: I DM'd you the command list 😊")

  message.member.send(embed)
}
module.exports.permission = ''
module.exports.use = ''
module.exports.description = 'Sends a help message containing the commands list to the user'
