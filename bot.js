/* JARVIS generated with create-discord-bot CLI */
const Discord = require('discord.js');
const { prefix, token } = require('./config.json');
const client = new Discord.Client();

client.on('ready', () => {
    console.log('Bot is ready!');
});

client.on('message', message => {
    if(message.content === `${prefix}ping`) {
        message.channel.send('Pong.');
    }
});

client.login(token);