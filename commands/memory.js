const Discord = require("discord.js");
module.exports.run = async (bot, message, args) => {

  let embed = new Discord.RichEmbed()
  .setTitle("memory")
  .setDescription(`${process.memoryUsage().heapUsed / 1024 / 1024}`)
  message.channel.send({embed})
  
}

module.exports.help = {
    name: "memory"
  }