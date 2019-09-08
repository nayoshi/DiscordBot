/* JARVIS generated with create-discord-bot CLI */
const Discord = require('discord.js');
const { prefix, token } = require('./configs.json');
const client = new Discord.Client();

const guild = client.guilds.get('592518485305982996');

client.on('ready', () => {
  console.log('Bot is ready!');
});

client.on('message', async message => {
  if (message.author.bot) return;
  if (message.channel.type === 'dm') return;

  // cmd = The command itself
  // Args = rest of the line
  const line = message.content.split(' ');
  const cmd = line[0];
  let args = line.slice(1);

  if (cmd === `${prefix}ping`) {
    await message.channel.send('Pong.');
  }

  // Show amount of people online
  if (cmd === `${prefix}stats`) {
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

    await msg.channel.send(embed);
  }

  // Kick/ban a user
  if (cmd === `${prefix}kick` || cmd === `${prefix}ban`) {
    if (message.member.hasPermission('MANAGE_MESSAGES')) {
      let yeet = message.guild.member(message.mentions.users.first()) || message.guild.members.get(args[0]);
      if (yeet) {
        if (cmd === `${prefix}kick`) await guild.kick(yeet).catch(console.error);
        else await guild.ban(yeet).catch(console.error);
      }
    }
  }

  // Mutes a user
  if (cmd === `${prefix}mute`) {
    if (message.member.hasPermission('MANAGE_MESSAGES')) {
      let yeet = message.guild.member(message.mentions.users.first()) || message.guild.members.get(args[0]);
      if (yeet && yeet.id !== message.author.id && toMute.highestRole.position < message.member.highestRole.position)
        await yeet.addRole('SADB MUTED');
    }
  }

  // Unmutes a user
  if (cmd === `${prefix}unmute`) {
    if (message.member.hasPermission('MANAGE_MESSAGES')) {
      let unYeet = message.guild.member(message.mentions.users.first()) || message.guild.members.get(args[0]);
      if (unYeet) await unYeet.removeRole('SADB MUTED');
    }
  }

  // Remove n messages from a channel
  if (cmd === `${prefix}purge`) {
    const num = parseInt(args[0], 10);

    if (num) {
      const fetchMsg = await msg.channel.fetchMessages({ limit: num });
      await message.channel.bulkDelete(fetchMsg).catch(e => message.reply(`Couldn't delete messages because of: ${e}`));
    }
  }
});

client.login(token);
