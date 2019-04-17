const Discord = require("discord.js");
const bot = new Discord.Client();
const botconfig = require("../botconfig");
let purple = botconfig.purple;
let xp = require("../xp.json");
let fs = require("fs");
let ress = JSON.parse(fs.readFileSync("./reasons.json", "utf8"));
let warn = JSON.parse(fs.readFileSync("./warnings.json", "utf8"));
let prefix = botconfig.prefix
let cdseconds = 5; 
const { Canvas } = require("canvas-constructor"); 
const { resolve, join } = require("path"); 
const { Attachment } = require("discord.js"); 
const { get } = require("snekfetch"); 
const superagent = require('superagent');
const reasons = require("../reasons.json")
bot.ras = reasons

module.exports.run = async (bot, message, args) => {
  if(!args[0]){
    if(!warn[message.author.id + message.guild.id]) warn[message.author.id + message.guild.id] = {};
    if(!warn[message.author.id + message.guild.id].warnings) warn[message.author.id + message.guild.id].warnings = 0;
    if(!ress[message.author.id + message.guild.id]) ress[message.author.id + message.guild.id] = {
      reason: "None"
    }
   
    //forgot lol  xDDDDD
    let embed = new Discord.RichEmbed()
    .setTitle("Warnings")
    .addField("Total Warnings", warn[message.author.id + message.guild.id].warnings)
    .addField("Reason", ress[message.author.id + message.guild.id].reason)
   return message.channel.send(embed)
  }
  //um no
  //whhat no y
  let user = message.mentions.users.first() || message.guild.users.get(args[0]) || message.guild.users.find("name", args[0]); 
  
  if(!warn[user.id + message.guild.id]) warn[user.id + message.guild.id] = {};
  if(!warn[user.id + message.guild.id].warnings) warn[user.id + message.guild.id].warnings = "0";   
  message.channel.send(warn[user.id + message.guild.id].warnings);
}

module.exports.help = {
  name: "warnings"
}