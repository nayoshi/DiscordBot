const Discord = require('discord.js')
const { token } = require('./token.json')
const client = new Discord.Client()
const commandHandler = require('./commands/command-handler')

client.on('ready', () => {
  console.log('Bot is ready!');
})

client.on('message', async message => commandHandler(message))

client.login(token)
