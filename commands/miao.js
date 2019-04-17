const Discord  = module.require('discord.js');
const config = require("../config.json");
const db = require("quick.db")

module.exports.run = async (bot, message, args) => {
  let prefix = config.prefix

    let user = message.mentions.members.first() || message.guild.members.find("name", args[0]) || message.guild.members.get(args[0])
        message.channel.overwritePermissions(user, {
            SEND_MESSAGES: false,
            READ_MESSAGES: false
        });
        message.channel.send(`**you remove the user: ${user.toString()} from the ticket channel:** <#${message.channel.id}>`).catch(console.error);
}

  exports.conf = {
 aliases: []
}

exports.help = {
    name: "remove-user",
    category: "ticket",
    description: "remove user from the ticket channel",
    usage: ""
}