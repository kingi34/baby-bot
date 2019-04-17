const Discord = require("discord.js");
let cdseconds = 5; 
const { Canvas } = require("canvas-constructor"); 
const { resolve, join } = require("path"); 
const { Attachment } = require("discord.js"); 
const { get } = require("snekfetch"); 
const superagent = require('superagent');

module.exports.run = async (bot, message, args) => {
  
  let img = message.author.avatarURL
  
   let cmd = message.content.slice(1);
      let split = cmd.split(" ");
      cmd = split[0];
      split.shift();
      let msg = split.join(" ");
  let embed = new Discord.RichEmbed()
  .setAuthor(message.author.username, img)
  .addField("say", msg)
  .setColor("RANDOM")
  message.channel.send({embed})
}

module.exports.help = {
  name: "say"
} 