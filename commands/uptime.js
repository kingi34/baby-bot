const Discord = require("discord.js");
let bot = new Discord.Client
module.exports.run = async (bot, message, args) => {

let totalSeconds = (bot.uptime / 1000);
let hours = Math.floor(totalSeconds / 3600);
totalSeconds %= 3600;
let minutes = Math.floor(totalSeconds / 60);
let seconds = totalSeconds % 60;
let days = Math.floor(totalSeconds / 86400);
let embed = new Discord.RichEmbed()
.setColor("RANDOM")
.setTitle("Bot uptime")
.addField("Days", days, true)
.addField("Hours", hours, true)
.addField("Minutes", minutes, true)
.addField("seconds", seconds, true)
message.channel.send(embed)
}
module.exports.help = {
  name:"uptime"
}
