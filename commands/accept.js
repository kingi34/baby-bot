const Discord = require("discord.js")
const fs = require("fs")
const submit = require("./submit.json")
module.exports.run = async (bot, message, args) =>{
  let user;
  let user2;
if (message.mentions.users.first()) {
    user = message.mentions.users.first() || message.guild.users.get(args[0]) || message.guild.users.find("name", args[0]);

} else {
    user2 = args[0];
}
if(message.mentions.users.first()){
  let role = message.guild.roles.find("name", "Bot-Mods")
  if (!message.author.id === message.guild.ownerID){
  }else if (!message.member.hasPermission("ADMINISTRATOR")){
  }else return message.channel.send("u dont have an permission to do this")
  if(submit[args[0]].yheh === "nope") return message.author.send("This bot is cant be acceped cuze he diclined by " + `<@${submit[args[0]].decl}>`);
  if(submit[args[0]].yheh === "yes") return message.author.send("This bot is already in the server");
submit[args[0]].yheh = "yes"
      fs.writeFile("./commands/submit.json", JSON.stringify(submit), (err) => {
      if(err) console.err(err);
    });
}else if(!message.mentions.users.first()){
  let role = message.guild.roles.find("name", "Bot-Mods")
  if (!message.author.id === message.guild.ownerID){
  }else if (!message.member.hasPermission("ADMINISTRATOR")){
  }else return message.channel.send("u dont have an permission to do this")
  if(submit[args[0]].yheh === "nope") return message.author.send("This bot is cant be acceped cuze he diclined by " + `<@${user2.decl}>`);
  if(submit[args[0]].yheh === "yes") return message.author.send("This bot is already in the server");
submit[args[0]].yheh = "yes"
      fs.writeFile("./commands/submit.json", JSON.stringify(submit), (err) => {
      if(err) console.err(err);
    });
}
  let embed = new Discord.RichEmbed()
  .setTitle(`You have accepted the bot`)
  .setDescription(`<@${submit[user].id}>`)
  .addField("Invite the bot", `[here](https://discordapp.com/oauth2/authorize?client_id=${args[0]}&permissions=scope=bot)`, true)
  message.author.send(embed)
}

module.exports.help = {
  name: "accept"
}