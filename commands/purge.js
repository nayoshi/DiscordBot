module.exports = async function (command) {
  const num = parseInt(command.args[0], 10)
  const {
    message
  } = command
  if (num) {
    const fetchMsg = await command.message.channel.fetchMessages({
      limit: num
    })
    await command.message.channel.bulkDelete(fetchMsg).catch(e => message.reply(`Couldn't delete messages because of: ${e}`))
  }
}
module.exports.permission = 'MANAGE_MESSAGES'
module.exports.use = 'purge <number>'
module.exports.description = 'Deletes a specified number of messages from the chat'
