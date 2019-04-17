  const Discord = require("discord.js");
module.exports.run = async (bot, message, args) => {


    const botconfig = require("../botconfig.json");
    let prefix = botconfig.prefix;


    if(!message.content.startsWith(prefix))return;


let user;
if (message.mentions.users.first()) {
    user = message.mentions.users.first() || message.guild.users.get(args[0]) || message.guild.users.find("name", args[0]);

} else {
    user = message.author;
}

      let embed = new Discord.RichEmbed()
      .setImage(user.avatarURL)
      //.setImage(message.mentions.users.first().avatarURL)
      .setColor("RANDOM")
      //.setDescription(`[Link](${message.mentions.users.first().avatarURL})`)
      .setDescription(`[Link](${user.avatarURL})`)
    return message.channel.send(embed);



}

module.exports.help = {
    name: "avatar"
  }