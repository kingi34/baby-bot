const Discord = require('discord.js')
exports.run = (client, message, args, tools) => {
  
    const botconfig = require("../botconfig.json");
    let prefix = botconfig.prefix;


    if(!message.content.startsWith(prefix))return;

const newemb = new Discord.RichEmbed()
.setColor("RANDOM")
.addField('```**The Ping Is:**```', new Date().getTime() - message.createdTimestamp + " ms ")
message.channel.send({embed: newemb})
}
module.exports.help = {
    name: "ping"
}
