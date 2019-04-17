const Discord = require("discord.js")
const fs = require("fs")
const submit = JSON.parse(fs.readFileSync('./commands/submit.json', 'utf8'));

module.exports.run = async (bot, message, args) => {
  submit[args[0]].yheh = "nope"
  submit[args[0]].decl = message.author.id;
  
  fs.writeFile("./commands/submit.json", JSON.stringify(submit), (err) => {
    if(err) console.err(err);
  });
  
  let embed = new Discord.RichEmbed()
  .setTitle(`You have declined the bot`)
  .setDescription(`<@${submit[args[0]].id}>`)
  message.author.send(embed);
}

module.exports.help = {
  name: "decline"
}