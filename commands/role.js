const Discord = require("discord.js");
const dateformat = require("dateformat");

module.exports.run = async (bot, message, args) => {

    const error = "You  need warite role name or mention role";
  //let role = (message.mentions.roles.first() || message.guild.roles.get(args[1]));
var role = message.mentions.roles.first() || message.guild.roles.get(args[0]) || message.guild.roles.find("name", args[0]);
  if (!role) {
message.channel.send(error)
    }

    const millis = new Date().getTime() - role.createdAt
    const noww = new Date();
    dateformat(noww, 'dddd, mmmm dS, yyyy, h:MM:ss TT');
    const createdAt = millis / 1000 / 60 / 60 / 24;

let members = message.guild.roles.get(role.id).members

const rolecreated = (role.createdAt.getDate() + 1) + '/' + (role.createdAt.getMonth() + 1) + '/' + role.createdAt.getFullYear() + ' | ' + role.createdAt.getHours() + ':' + role.createdAt.getMinutes() + ':' + role.createdAt.getSeconds();
    const roleembed = new Discord.RichEmbed()
    .setTitle("Roleinfo")
    .setColor("RANDOM")
    .addField("Role name",role.name,true)
    .addField("Role ID",role.id,true)
    .addField("Role mention",role,true)
    .addField("Role color",role.hexColor,true)
    .addField("Role created",`${rolecreated}`,true)   
    .setThumbnail(`https://dummyimage.com/250/${role.hexColor.slice(1)}/&text=%20`)
    .setFooter(`Have ${members.size} Users in this role`)
    message.channel.send(roleembed)

  }

module.exports.help = {
  name:"role-info"
}