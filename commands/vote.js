const Discord = require("discord.js");
const bot = new Discord.Client()
const DBL = require("dblapi.js");
const dbl = new DBL(process.env.DBL_TOKEN, bot);
const img = "https://cdn.discordapp.com/avatars/513119357409296387/0314be9590d92e2b3ee37d031543bf91.png?size=2048"

exports.run = async (bot, message, args) => {
dbl.getBot(bot.user.id).then(bot => {
const embed = new Discord.RichEmbed()
.setTitle("Vote for the bot")
.setColor("RANDOM")
.setDescription("[**[Salina Vote]**](https://discordbots.org/bot/513119357409296387/vote)")
.addField("Vote Count", bot.points,true)
        .setThumbnail(img)
        .setTimestamp(new Date())
        .setFooter(`${message.author.tag} vote me pls!`, message.author.displayAvatarURL)
message.channel.send(embed)
})
}

exports.conf = {
 aliases: []
}
                             
module.exports.help = {
    name: "votes"
  }