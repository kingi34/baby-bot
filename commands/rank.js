const Discord = require("discord.js");
const botconfig = require("../botconfig");
let purple = botconfig.purple;
let xp = require("../xp.json");

module.exports.run = async (bot, message, args) => {
  
  
  
    const botconfig = require("../botconfig.json");
    let prefix = botconfig.prefix;


    if(!message.content.startsWith(prefix))return;


  if(!xp[message.author.id]){
   xp[message.author.id] = {
     xp: 0,
     level: 1
  };
}
  let curxp = xp[message.author.id].xp;
  let curlvl = xp[message.author.id].level;
  let nxtLvlXp = curlvl * 300;
  let difference = nxtLvlXp - curxp;

  let lvlEmbed = new Discord.RichEmbed()
  .setAuthor(message.author.username)
  .setColor(purple)
  .addField("Level", curlvl, true)
  .addField("XP", curxp, true)
  .setFooter(`${difference} XP til level up`, message.author.displayAvatarURL);

  message.channel.send(lvlEmbed);

}

module.exports.help = {
  name: "rank"
}