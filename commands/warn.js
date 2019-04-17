const Discord = require("discord.js");
const bot = new Discord.Client();
const botconfig = require("../botconfig");
let purple = botconfig.purple;
let xp = require("../xp.json");
let fs = require("fs");
let warn = JSON.parse(fs.readFileSync("./warnings.json", "utf8"));
let ress = JSON.parse(fs.readFileSync("./reasons.json", "utf8"));
let prefix = botconfig.prefix
let cdseconds = 5; 
const { Canvas } = require("canvas-constructor"); 
const { resolve, join } = require("path"); 
const { Attachment } = require("discord.js"); 
const { get } = require("snekfetch"); 
const superagent = require('superagent');

module.exports.run = async (bot, message, args) => {
 
  if(!message.member.hasPermission("KICK_MEMBERS")) return message.reply("You don't have enough permissions!");
  let user = message.mentions.users.first() || message.guild.users.get(args[0]) || message.guild.users.find("name", args[0]);
  let reason = args.join(" ").split(22)
  
  if(!reason) return message.reply("Hey, need a reason here! `${prefix}warn <user> <reason>`")
  
  if(!warn[user.id + message.guild.id]) warn[user.id + message.guild.id] = {}
    if(!warn[user.id + message.guild.id].warnings) warn[user.id + message.guild.id].warnings = "0"
    warn[user.id + message.guild.id].warnings += 1;
  
  fs.writeFile("warnings.json", JSON.stringify(warn), (err) => {
    if(err) console.log(err);
  });

  if(warn[user.id + message.guild.id].warnings === 1){
    ress[user.id + message.guild.id].reasons = reason  
    
  } else if(warn[user.id + message.guild.id].warnings >= 2) ress[user.id + message.guild.id].reasons =  ress[user.id + message.guild.id].reasons + `
`+ reason
    
  
  
  fs.writeFile("./reasons.json", JSON.stringify(ress), (err) => {
    if(err) console.error(err);
  });
  
  
  
  
  const embed = new Discord.RichEmbed()
  .setColor('RANDOM')
  .setDescription('You have been warned!')
  .addField('Warner + Reason', reason)
  .addField(`Total Warnings in ${message.guild.name}`, warn[user.id + message.guild.id].warnings);
    user.send({embed});
}

module.exports.help = {
  name: "warn"
} 