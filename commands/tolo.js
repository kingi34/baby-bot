const Discord = require("discord.js");
const fs = require("fs");
const submit = JSON.parse(fs.readFileSync("./commands/submit.json", "utf8"));
// i dont get it there is no error so try create new idk nope wait
module.exports.run = async (bot, message, args) => {
let emo = bot.emojis.find('name', 'online1')
let emo2 = bot.emojis.find('name', 'idle1')
let emo3 = bot.emojis.find('name', 'dnd1')
message.channel.send(`${emo} online users: ${message.guild.members.filter(m=>m.presence.status == 'online').size}
${emo2} idle users: ${message.guild.members.filter(m=>m.presence.status == 'idle').size}
${emo2} idle users: ${message.guild.members.filter(m=>m.presence.status == 'dnd').size}
`).then(async (e) => {
e.react(emo)
})
}
module.exports.help = {
 name:"tolo"
}