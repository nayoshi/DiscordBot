const Discord = require('discord.js')
const { token } = require('./constants/token')
const client = new Discord.Client()
const commandHandler = require('./commands/commandHandler')
const roleReactionHandler = require('./roles/roleReactionHandler')

client.on('ready', () => {
  console.log('Lancelot is ready!')
})

client.on('raw', async event => roleReactionHandler(event, client))

client.on('message', async message => commandHandler(message))

if (token !== 'INSERT TOKEN') {
  client.login(token)
} else {
  console.log('\nERROR: Insert a token in constants/token.json.\n\nIf it doesn\'t exist, please run `npm run setup`\n')
}
