const Discord = require('discord.js');
const fs = require("fs");
const {prefix, config} = require("../config.json")
module.exports.run = async (client, message, args, tools) => {
  let embed = new Discord.RichEmbed()
  .setTitle("🎮 for fun commands");
  
  message.channel.send({embed}).then(async (e) => {
    await e.react("⚒");
    await e.react("🎮");
    
    let page = 0;
    
    client.on("messageReactionAdd", (r, user) => {
      if(user.id === client.user.id) return;
      if(!user.id === message.author.id) return r.emoji.reaction.remove(user);
      
      if(r.emoji.name === "🎮") {
        page += 1;

        if(page == 1) {
          const embeded = new Discord.RichEmbed()
          .setTitle("fun commands")
          .setColor("RANDOM")
          .setDescription(`${prefix}dog
${prefix}emojibed
${prefix}emojihappy
${prefix}emojised
${prefix}emojipop
${prefix}rip
${prefix}dmmy [message]
${prefix}joke
${prefix}meme
${prefix}cat
${prefix}hack [member]
${prefix}kill [member]`)
          e.edit(embeded);
          r.emoji.reaction.remove(user);
        } else if(page == 2) {
          const embeded0 = new Discord.RichEmbed()
          .setTitle("")
          .setDescrption(`
${prefix}dog
${prefix}emojibed
${prefix}emojihappy
${prefix}emojised
${prefix}emojipop
${prefix}rip
${prefix}dmmy [message]
${prefix}joke
${prefix}meme
${prefix}cat
${prefix}hack [member]
${prefix}kill [member]`)

          e.edit(embeded0);
          r.emoji.reaction.remove(user);
        } else if(page == 3) {
          page -= 1;
          r.emoji.reaction.remove(user);
        }
      } else if(r.emoji.name === "") {
        page -= 1;
        if(page >= 0){
         page = 0;
          r.emoji.reaction.remove(user);
        }else if(page == 1) {
          const embeded = new Discord.RichEmbed()
          .setTitle("i did it");

          e.edit(embeded);
          r.emoji.reaction.remove(user);
        } else if(page == 2) {
          const embeded0 = new Discord.RichEmbed()
          .setTitle("i do it");

          e.edit(embeded0);
          r.emoji.reaction.remove(user);
        } else if(page == 0) {
          const embeded0 = new Discord.RichEmbed()
          .setTitle("test");

          e.edit(embeded0);
          r.emoji.reaction.remove(user);
        }
      }
    });
  });
}

module.exports.help = {
  name: "toto"
}
