const Discord = require('discord.js')
const { token } = require('./token.json')
const client = new Discord.Client()
const commandHandler = require('./commands/commandHandler')
const roleReactionHandler = require('./roles/roleReactionHandler')

client.on('ready', () => {
  console.log('Lancelot is ready!')
})

client.on('raw', async event => roleReactionHandler(event, client))

client.on('message', async message => commandHandler(message))

client.login(token)
