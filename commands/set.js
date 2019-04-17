const Discord = require("discord.js");
const bot = new Discord.Client();
const botconfig = require("../botconfig");
let purple = botconfig.purple;
let xp = require("../xp.json");
let fs = require("fs");
const url = require("./urls.json")
bot.urls = url
let idk= JSON.parse(fs.readFileSync("./rip.json", "utf8"));
let prefix = botconfig.prefix
let cdseconds = 5; 
const { Canvas } = require("canvas-constructor"); 
const { resolve, join } = require("path"); 
const { Attachment } = require("discord.js"); 
const { get } = require("snekfetch"); 
const warn = require("../warnings.json")
bot.warns = warn
const superagent = require('superagent');

module.exports.run = async (bot, message, args) => {


  if(args[0] === `welcome-background`){
  if(!url[message.guild.id]) url[message.guild.id] = {};
    if(!url[message.guild.id].message) url[message.guild.id].message = "";
  url[message.guild.id].message = message.content.slice (24);
    fs.writeFile("./commands/urls.json", JSON.stringify(url), (err) => {
      if(err) console.err(err);
    })
  }
  
  if(args[0] === `rip-background`){
   if(!idk[message.guild.id]) idk[message.guild.id] = {};
    if(!idk[message.guild.id].roro) idk[message.guild.id].roro = "";
  idk[message.guild.id].roro = message.content.slice (20);
    fs.writeFile("./rip.json", JSON.stringify(idk), (err) => {
      if(err) console.err(err);
      console.log("refresh")
    })  
  }
  
  if(args[0] === `warnings`){
    let user = message.mentions.users.first() || message.guild.users.get(args[0]) || message.guild.users.find("name", args[0]); 
  if(!message.member.hasPermission("KICK_MEMBERS")) return message.reply("You don't have an permission");
    /*
    
     if(!warn[user.id + message.guild.id]) return message.reply(`${user} dosen't heve an warnings......`)
    if(!warn[user.id + message.guild.id].warnings) return message.reply(`${user} dosen't heve an warnings......`)
    if(!warn[user.id + message.guild.id].warnings === 0) return message.reply(`${user} dosen't heve an warnings......`)*/
    warn[user.id].warnings = args[2];
  }
  
  }

module.exports.help = {
  name: "set"
}