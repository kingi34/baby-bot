const Discord = require("discord.js");
module.exports.run = async (bot, message, args) => {

const botconfig = require("../botconfig.json");
  const {prefix, prefix2} = require("../botconfig.json")
  
  if(!message.content.startsWith(botconfig.prefix)) return;



  
  const meme = require('memejs');
 
  meme(function(data) {
  let embed = new Discord.RichEmbed()
  .setTitle('Here is your meme! 😄')
  .setColor('RANDOM')
  .setImage(data.url[0])
  message.channel.send(embed)
});
      
    }

module.exports.help = {
    name: "meme"
  }