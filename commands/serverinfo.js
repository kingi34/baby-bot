const Discord = require("discord.js");
const type = ['animated', 'regular'];
 
module.exports.run = async (bot, message, args) => {
 
    const botconfig = require("../botconfig.json");
    let prefix = botconfig.prefix;


    if(!message.content.startsWith(prefix))return;



var region = message.guild.region
if(message.guild.region == "russia") {
var region = `:flag_ru: ${message.guild.region}`
}
if(message.guild.region == "brazil") {
var region = `:flag_br: ${message.guild.region}`
}
if(message.guild.region == "eu-central") {
var region = `:flag_eu: ${message.guild.region}`
}
if(message.guild.region == "hongkong") {
var region = `:flag_hk: ${message.guild.region}`
}
if(message.guild.region == "japan") {
var region = `:flag_jp: ${message.guild.region}`
}
if(message.guild.region == "singapore") {
var region = `:flag_sg: ${message.guild.region}`
}
if(message.guild.region == "southafrica") {
var region = `:flag_za: ${message.guild.region}`
}
if(message.guild.region == "sydney") {
var region = `:flag_au: ${message.guild.region}`
}
if(message.guild.region == "us-central") {
var region = `:flag_us: ${message.guild.region}`
}
if(message.guild.region == "us-east") {
var region = `:flag_us: ${message.guild.region}`
}
if(message.guild.region == "us-south") {
var region = `:flag_us: ${message.guild.region}`
}
if(message.guild.region == "us-west") {
var region = `:flag_us: ${message.guild.region}`
}
if(message.guild.region == "eu-west") {
var region = `:flag_eu: ${message.guild.region}`
}
 
  var roles = '',
  ros=message.guild.roles.size,
  role = [];
  for(let i =0;i<ros;i++){
      if(message.guild.roles.array()[i].id !== message.guild.id){
role.push(message.guild.roles.filter(r => r.position == ros-i).map(r => `<@&${r.id}>`));  
  }}
 
if (message.guild.afkChannel) {
var afkchannel = message.guild.afkChannel.name;
}else {
var afkchannel = "AFK channel not found";
}
 
    let emojis = message.guild.emojis.filter(emoji => type === 'animated' ? emoji.animated : emoji)
    let afknum = message.guild.afkTimeout
    let afk = afknum/60
    let time = "minutes"
    const joinedserver = (message.member.joinedAt.getDate() + 1) + '/' + (message.member.joinedAt.getMonth() + 1) + '/' + message.member.joinedAt.getFullYear() + ' | ' + message.member.joinedAt.getHours() + ':' + message.member.joinedAt.getMinutes() + ':' + message.member.joinedAt.getSeconds();
    const servercreated = (message.guild.createdAt.getDate() + 1) + '/' + (message.guild.createdAt.getMonth() + 1) + '/' + message.guild.createdAt.getFullYear() + ' | ' + message.guild.createdAt.getHours() + ':' + message.guild.createdAt.getMinutes() + ':' + message.guild.createdAt.getSeconds();
    let sicon = message.guild.iconURL;
    let serverembed = new Discord.RichEmbed()
    .setDescription("Server Information")
    .setColor(`RANDOM`)
    .setThumbnail(sicon)
    .addField("Server Name", message.guild.name)
    .addField("Server ID", `${message.guild.id}`)
    .addField("Owner", message.guild.owner.user.tag)
    .addField("Region", region)
    .addField("Members Count", `**Members:** ${message.guild.memberCount} | **Online:** ${message.guild.members.filter(m=>m.presence.status == 'online').size} | **Users:** ${message.guild.members.filter(member => !member.user.bot).size} | **Bots:** ${message.guild.members.filter(member => member.user.bot).size}`)
    .addField("Channels", `**Catagories:** ${message.guild.channels.filter(c => c.type === 'category').size} | **Text Channels:** ${message.guild.channels.filter(c=> c.type === 'text').size} | **Voice Channels:** ${message.guild.channels.filter(c=> c.type === 'voice').size}`)
    .addField("AFK Timeout", `${afk} ${time}`,true)
    .addField("AFK Channel", afkchannel,true)
    .addField("Roles", message.guild.roles.size, true)
    .addField("Emojis", message.guild.emojis.size, true)
    .addField("Server Created", `${servercreated}`, true)
    .addField("You Joined", `${joinedserver}`, true);
 
    message.channel.send(serverembed)
}
 
module.exports.help = {
  name: "serverinfo"
}   