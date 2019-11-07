module.exports = async function (command) {
  const result = Math.floor(Math.random() * 6) + 1

  await command.message.channel.send('<@' + command.message.member.id + '>, you rolled ' + result)
}
module.exports.permission = ''
module.exports.use = ''
module.exports.description = 'Rolls a dice and outputs a number 1-6'
