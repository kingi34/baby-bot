const Discord = require("discord.js");

exports.run = (client, message, args) => {
  const messagecount = parseInt(args.join(' '));
  if (!message.guild.member(client.user).hasPermission('MANAGE_MESSAGES')) return message.reply('You Dont have the permission to use that command.').catch(console.error);
  if(message.author.id != "473438863961096202") return;
    let string = ''
    message.channel.send(`Messages Deleted ${args[0]}`).then(msg => msg.delete(5000));
  message.channel.fetchMessages({
    limit: messagecount
  }).then(messages => message.channel.bulkDelete(messages));
  
};

exports.conf = {
  enabled: false,
  guildOnly: false,
  aliases: [],
  permLevel: 2
};

exports.help = {
  name: 'clear',
  description: 'clear X amount of messages from a given channel.',
  usage: 'clear <number>'
};