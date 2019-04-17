const Discord = require("discord.js");
const ms = require("ms");

module.exports.run = async (client, message, args, level) => {

let Timer = args[0];

if(!args[0]){
  return message.channel.send("Please Enter A Period Of Time, With Either `s,m or h` At The End!");
}

if(args[0] <= 0){
  return message.channel.send("Please Enter A Period Of Time, With Either `s,m or h` At The End!");
}

message.channel.send(":white_check_mark: Timer Has Been Set For: " + `**${ms(ms(Timer), {long: true})}**`)

setTimeout(function(){
  message.channel.send(`Timer Has Ended, It Lasted: ${ms(ms(Timer), {long: true})}` + message.author.toString ())

}, ms(Timer));
}
exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: [],
  permLevel: "User"
};

exports.help = {
  name: "timer",
  category: "Miscelaneous",
  description: "Sets a timer",
  usage: "timer"
};