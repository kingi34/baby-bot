const Discord = require("discord.js");
const ms = require("ms");

module.exports.run = async (bot, message, args) => {
let msg = message
  //!tempmute @user 1s/m/h/d

  let tomute = message.guild.member(message.mentions.users.first() || message.guild.members.get(args[0]));
  if(!tomute) return message.reply("Couldn't find user.");
  if(tomute.hasPermission("MANAGE_MESSAGES")) return message.reply("Can't mute them!");
  let muterole = message.guild.roles.find(`name`, "Muted");
  //start of create role
  if(!muterole){
    try{
      muterole = await message.guild.createRole({
        name: "Muted",
        color: "#000000",
        permissions:[]
      })
      message.guild.channels.forEach(async (channel, id) => {
        await channel.overwritePermissions(muterole, {
          SEND_MESSAGES: false,
          ADD_REACTIONS: false
        });
      });
    }catch(e){
      console.log(e.stack);
    }
  }
  //end of create role
  let mutetime = args[1];
  if(!mutetime) return message.reply("You didn't specify a time!");
let channel = msg.guild.channels.find("name", "logs")
if(!channel) {
  return msg.channel.send("create a channel with the name logs")
}else if(channel){
  let embed = new Discord.RichEmbed()
  .setTitle("new tempmute")
  .addField("member",`${tomute}`)
  .addField("member id", `${tomute.id}`)
  .addField("muter", `${msg.author}`)
  .addField("mute time", `${ms(ms(mutetime))}`)
  .addField("reason", `${args.slice(0 + 1 + 2)}`)
  channel.send({embed})
}
  await(tomute.addRole(muterole.id));
  message.reply(`<@${tomute.id}> has been muted for ${ms(ms(mutetime))}`);

  setTimeout(function(){
    tomute.removeRole(muterole.id);
    message.channel.send(`<@${tomute.id}> has been unmuted!`);
  }, ms(mutetime));


//end of module
}

module.exports.help = {
  name: "tempmute"
}