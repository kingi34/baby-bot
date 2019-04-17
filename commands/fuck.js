  const Discord = require("discord.js");
  const bot = new Discord.Client();
  const botconfig = require("../botconfig");
  let purple = botconfig.purple;
  let xp = require("../xp.json");
  let fs = require("fs");
  const url = require("./urls.json")
  bot.urls = url
  let prefix = botconfig.prefix
  let cdseconds = 5; 
  const { Canvas } = require("canvas-constructor"); 
  const { resolve, join } = require("path"); 
  const { Attachment } = require("discord.js"); 
  const { get } = require("snekfetch"); 
  const superagent = require('superagent');

  module.exports.run = async (bot, message, args) => {
if(message.author.id !== "352552956455026694") {
}else if(message.author.id !== "473438863961096202"){
}else return
    let member;
  if (message.mentions.users.first()) {
      member = message.mentions.users.first() || message.guild.users.get(args[0]) || message.guild.users.find("name", args[0]);

  } else {
      member = message.author;
  }


     if (!url[message.guild.id]) return message.reply("set the background with the command " + `[${prefix}set welcome-background + img url`)
     let imag = url[message.guild.id].message

        async function createCanvas() {
  var imageUrlRegex = /\?size=2048$/g;
  let { body: background } = await superagent(`${imag}`);
  const { body: avatar } = await superagent(member.avatarURL.replace(imageUrlRegex, "?size=512"));
              return new Canvas(800,400)

  .addImage(background,0,0,800,400)
  .setColor("#ffffff")
  .setTextFont("bold 45px Comic Sans MS")
  .setTextAlign("center")
  .addText(`Welcome`,400,40)
  .setColor("#07f300")
  .setTextFont("25px Comic Sans MS")
  .setTextAlign("center")
  .addText(`${member.tag}`,400,290)
  .setColor("#ff01cb")
  .setTextFont("bold 35px Comic Sans MS")
  .setTextAlign("center")
  .addText(`to the server : ${message.guild.name}`,400,320)
  .setColor("#07f300")
  .setTextFont("25px Comic Sans MS")
  .setTextAlign("center")
  .addText(`You are the ${message.guild.memberCount}th member`,400,350)
  .addRoundImage(avatar, 290, 60, 220, 220, 110, 30, 30)

  .toBufferAsync()
  } 

  let join = new Discord.Attachment(await createCanvas(), "join.jpg")
  await message.channel.send(join)
  }
  module.exports.help = {
    name: "idk"
  } 