const Discord = require("discord.js");
const botconfig = require("../botconfig.json");
const red = botconfig.red;
const green = botconfig.green;
const orange = botconfig.orange;


module.exports.run = async (bot, message, args) => {
  
  
    const botconfig = require("../botconfig.json");
    let prefix = botconfig.prefix;


    if(!message.content.startsWith(prefix))return;

  
  
  
  
    message.delete();
    if(args[0] == "help"){
      message.reply("Usage: ~fakemsg <user> <message>");
      return;
    }
    let rUser = message.guild.member(message.mentions.users.first() || message.guild.members.get(args[0]));
    if(!rUser) return message.channel.send("u dont tag noone");
    let rreason = args.join(" ").slice(22);
    if(!rreason) return message.channel.send("u dont tell me what send");

  
  
 if(rUser.id === `352552956455026694`){
         return message.reply("עד לאבוש")
         }
  
      
  
    message.channel.createWebhook(message.mentions.users.first().username, message.mentions.users.first().avatarURL).then(a =>{
        a.send(rreason),
        a.delete(5000);
  
    })

}



module.exports.help = {
  name: "fakemsg"
}