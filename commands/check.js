const Discord = require("discord.js");
const fs = require("fs");
const submit = JSON.parse(fs.readFileSync("./commands/submit.json", "utf8"));
// i dont get it there is no error so try create new idk nope wait
module.exports.run = async (bot, message, args) => {
  const embed = new Discord.RichEmbed()
  .setTitle('new bot added')
  .addField('bot prefix', submit[args[0]].prefix, true)
  .addField('bot owner', "<@"+submit[args[0]].owner+">", true)
   .addField('bot id', submit[args[0]].id, true)
  .addField("invite", `[here](https://discordapp.com/oauth2/authorize?client_id=${submit[args[0]].id}&permissions=scope=bot)`, true)
 
  message.channel.send({embed});
}
// i hate my life lol xD
module.exports.help = {
  name: 'chack'
}