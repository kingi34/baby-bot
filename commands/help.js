const Discord = require("discord.js");
const {prefix, config} = require("../config.json")
module.exports.run = async (bot, message, args) => {
    let bicon = bot.user.displayAvatarURL;
    let botembed = new Discord.RichEmbed()
    .setDescription("Bot commands")
    .setColor("#15f153")
    .setThumbnail(bicon)
    .addField("mod commands", `
${prefix}ban [member] [reson]
${prefix}kick [member] [reson]
${prefix}tempmute [member] [reson]
${prefix}unmute [member]
${prefix}warn [member] reson
${prefix}clear 
`)
    .addField("fun commands", `
${prefix}dog
${prefix}emojibed
${prefix}emojihappy
${prefix}emojised
${prefix}emojipop
${prefix}rip
${prefix}dmmy [message]
${prefix}joke
${prefix}meme
${prefix}cat
${prefix}hack [member]
${prefix}kill [member]
`)
  .addField("info commands", `
${prefix}botinfo
${prefix}developers
${prefix}roleinfo [role]
${prefix}userinfo [member]
${prefix}serverinfo
${prefix}members
${prefix}xp
${prefix}chatinfo [channel]

`)
.addField("stats game command",`
${prefix}csgo 
${prefix}fm
${prefix}apex



`);
    message.channel.send(botembed);
}

module.exports.help = {
  name:"help"
}