const Discord = require("discord.js")
const fs = require("fs")
const submit = require("./submit.json")
module.exports.run = async (bot, message, args) =>{
if(!args[0]) return message.channel.send("pls write ~submit <bot id> + <prefix>")
  if(!args[1]) return message.channel.send('write the bot prefix') 
  if(!submit[args[0]]) submit[args[0]] = {}
  if(!submit[args[0]].id) {
    submit[args[0]].id = args[0]
  } else if(submit[args[0]].yesh === 'no'){
  return message.channel.send(`ur bot <@${submit[args[0]].id}> is waiting to aproval`)
  }else if(submit[args[0]].yesh === 'yes'){
  return message.channel.send(`ur bot <@${submit[args[0]].id}> is here....`)
  }
  if(!submit[args[0]].prefix) submit[args[0]].prefix = args[1]
  if(!submit[args[0]].owner) submit[args[0]].owner = message.author.id
  if(!submit[args[0]].yesh) submit[args[0]].yesh = 'no'
    fs.writeFile("./commands/submit.json", JSON.stringify(submit), (err) => {
      if(err) console.err(err);
    });
  console.log("i did")
  let channel = message.guild.channels.find("name", "דג")
  let embed = new Discord.RichEmbed()
  .addField("invite", `[here](https://discordapp.com/oauth2/authorize?client_id=${args[0]}&permissions=scope=bot)`, true)
  .setTitle('new bot added', true)
  .addField('bot id', submit[args[0]].id, true)
  .addField('bot prefix', submit[args[0]].prefix, true)
  .addField('bot owner', message.author, true)
  channel.send(embed)
}
module.exports.help = {
name:'submit'
}