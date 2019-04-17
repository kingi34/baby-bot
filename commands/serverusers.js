const Discord = require('discord.js');

exports.run = async (bot,message,args) => {
    const online = bot.emojis.find(emoji => emoji.name === 'online1').id
    const dnd = bot.emojis.find(emoji => emoji.name === 'dnd1').id
    const idle = bot.emojis.find(emoji => emoji.name === 'idle1').id
    const offline = bot.emojis.find(emoji => emoji.name === 'offline1').id
    const useronline = message.guild.members.filter(m=>m.presence.status == 'online').map(e => e.toString()).join(",")
    const userdnd = message.guild.members.filter(m=>m.presence.status == 'dnd').map(e => e.toString()).join(",")
    const useridle = message.guild.members.filter(m=>m.presence.status == 'idle').map(e => e.toString()).join(",")
    const useroffline = message.guild.members.filter(m=>m.presence.status == 'offline').map(e => e.toString()).join(",")
    const userbot = message.guild.members.filter(m => m.user.bot).map(e => e.toString()).join(",")
    const userList = new Discord.RichEmbed()
    .setTitle('➠ users.') 
    .setAuthor(message.guild.name, message.guild.iconURL) 
    .setColor('RANDOM') 
    .setDescription("נא לבחור") 
    .setFooter(bot.user.username, bot.user.avatarURL)
    const userListonline = new Discord.RichEmbed()
    .setTitle(`➠ users online - ${message.guild.members.filter(m=>m.presence.status == 'online').size} Members`) 
    .setAuthor(message.guild.name, message.guild.iconURL) 
    .setColor('RANDOM') 
    .setDescription(useronline) 
    .setFooter(bot.user.username, bot.user.avatarURL)
        const userListdnd = new Discord.RichEmbed()
    .setTitle(`➠ users dnd - ${message.guild.members.filter(m=>m.presence.status == 'dnd').size} Members`) 
    .setAuthor(message.guild.name, message.guild.iconURL) 
    .setColor('RANDOM') 
    .setDescription(userdnd) 
    .setFooter(bot.user.username, bot.user.avatarURL)
    const userListidle = new Discord.RichEmbed()
    .setTitle(`➠ users idle - ${message.guild.members.filter(m=>m.presence.status == 'idle').size} Members`) 
    .setAuthor(message.guild.name, message.guild.iconURL) 
    .setColor('RANDOM') 
    .setDescription(useridle) 
    .setFooter(bot.user.username, bot.user.avatarURL)
        const userListoffline = new Discord.RichEmbed()
    .setTitle(`➠ users offline - ${message.guild.members.filter(m=>m.presence.status == 'offline').size} Members`) 
    .setAuthor(message.guild.name, message.guild.iconURL) 
    .setColor('RANDOM') 
    //.setDescription(useroffline) 
    .setFooter(bot.user.username, bot.user.avatarURL)
    const userListbot = new Discord.RichEmbed()
    .setTitle(`➠ users bot - ${message.guild.members.filter(m => m.user.bot).size} Members`) 
    .setAuthor(message.guild.name, message.guild.iconURL) 
    .setColor('RANDOM') 
    .setDescription(userbot) 
    .setFooter(bot.user.username, bot.user.avatarURL)
    let msg = await message.channel.send(userList)
  await msg.react(online);
  await msg.react(dnd);
  await msg.react(idle);
  //await msg.react(offline);
  await msg.react('🤖');
  await msg.createReactionCollector((reaction, user) => reaction.emoji.id===online && user.bot === false).on('collect',r=> {msg.edit(userListonline)})
  await msg.createReactionCollector((reaction, user) => reaction.emoji.id===dnd && user.bot === false).on('collect',r=> {msg.edit(userListdnd)})
  await msg.createReactionCollector((reaction, user) => reaction.emoji.id===idle && user.bot === false).on('collect',r=> {msg.edit(userListidle)})
  await msg.createReactionCollector((reaction, user) => reaction.emoji.id===offline && user.bot === false).on('collect',r=> {msg.edit(userListoffline)})
  await msg.createReactionCollector((reaction, user) => reaction.emoji.name==='🤖' && user.bot === false).on('collect',r=> {msg.edit(userListbot)})
}

module.exports.help = {
  name: "serverusers"
}