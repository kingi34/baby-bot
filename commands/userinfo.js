const Discord = require('discord.js');
const fs = require("fs")
exports.run = async (client, message, args) => {


  
     const botconfig = require("../botconfig.json");
    let prefix = botconfig.prefix;


    if(!message.content.startsWith(prefix))return;

    let user;
    if (message.mentions.users.first()) {
        user = message.mentions.users.first() || message.guild.users.get(args[0]) || message.guild.users.find("name", args[0]);
 
    } else {
        user = message.author;
    }
    if (user.presence.status === 'online') {
        user.presence.status = '<:online:494501693073915914>';
    } else if (user.presence.status === 'dnd') {
        user.presence.status = '<:dnd:494501693757849610>';
    } else if (user.presence.status === 'idle') {
        user.presence.status = '<:idle:494501693023584266>';
    } else if (user.presence.status === 'offline') {
        user.presence.status = '<:offline:494501692713336834>';
    }
 
if (args == '') {
var z = message.author
} else {
var z = message.mentions.users.first();
}
 
let d = z.createdAt;          
let n = d.toLocaleString();  
let x;                      
let y;                        
 
if (z.bot) {
var type = 'Bot';
}else {
var type = 'Member';
}
    const member = message.guild.member(user);
 
    const joineddiscord = (user.createdAt.getDate() + 1) + '/' + (user.createdAt.getMonth() + 1) + '/' + user.createdAt.getFullYear() + ' | ' + user.createdAt.getHours() + ':' + user.createdAt.getMinutes() + ':' + user.createdAt.getSeconds();
    const joinedserver = (member.joinedAt.getDate() + 1) + '/' + (member.joinedAt.getMonth() + 1) + '/' + member.joinedAt.getFullYear() + ' | ' + member.joinedAt.getHours() + ':' + member.joinedAt.getMinutes() + ':' + member.joinedAt.getSeconds();
    const embed = new Discord.RichEmbed()
        .setColor(`RANDOM`)
        .setThumbnail(user.avatarURL)
        .setTitle(`User Information`)
    .addField("Username", `${user.tag}`)
    .addField("User ID", `${user.id}`)
    .addField("User Nickname", `${member.nickname !== null ? `${member.nickname}` : 'None'}`)
    .addField("User Created", `${joineddiscord}`, true)
    .addField("User Joined", `${joinedserver}`, true)
    .addField("Account Type", `**`+type+`**`, true)
    .addField("Status", `${user.presence.status}`, true)
    .addField("Game", `${user.presence.game ? user.presence.game.name : 'Not currently Playing'}`, true)
    .addField("Roles", `${member.roles.filter(r => r.id !== message.guild.id).map(roles => `<@&${roles.id}>`).join(" ") || "User has no roles"}`, true)
     message.channel.send(embed)
    }
 
module.exports.help = {
  name: "userinfo"
}




