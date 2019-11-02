module.exports = async function (command) {
  await command.message.channel.send('Pong!')
}
module.exports.permission = ''
module.exports.use = ''
module.exports.description = 'Boop'
