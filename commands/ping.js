module.exports = async function (command) {
  await command.message.channel.send('pong')
}
module.exports.permission = ''
module.exports.use = ''
module.exports.description = 'Boop'
