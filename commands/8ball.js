const Discord = require("discord.js");


module.exports.run = async (bot, message, args) =>{
  let replies = ["No", "Ask again", "I want to sleep", "IDC", "maybe", "idk", "Yes!","oc"];


  let result = Math.floor((Math.random() * replies.length));
  let question = args.slice(0).join(" ");

  let bEmbed = new Discord.RichEmbed()
  .setAuthor(message.author.tag)
  .setColor("RANDOM")
  .addField("Question:", question)
  .addField("Answer:", replies[result]);
  message.channel.send(bEmbed)
}
module.exports.help = {
  name: "8ball"
}