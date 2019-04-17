// server.js
// where your node app sta
const Discord = require('discord.js');
const client = new Discord.Client();
const express = require('express');
const app = express();


// we've started you off with Express, 
// but feel free to use whatever libs or frameworks you'd like through `package.json`.

// http://expressjs.com/en/starter/static-files.html
app.use(express.static('public'));

// http://expressjs.com/en/starter/basic-routing.html
app.get('/', function(request, response) {
  response.sendFile(__dirname + '/views/index.html');
});

// listen for requests :)
const listener = app.listen(process.env.PORT, function() {
  console.log('Your app is listening on port ' + listener.address().port);
});

const bot = new Discord.Client()
const {prefix, config} = require("./config.json")
const fs = require("fs");


bot.commands = new Discord.Collection();

fs.readdir("./commands/", (err, files) => {
    console.log(`Loading a total of ${files.length} commands.`);
    
  if(err) console.log(err);
  let jsfile = files.filter(f => f.split(".").pop() === "js");
  if(jsfile.length <= 0){
    console.log("Couldn't find commands.");
    return;
  }

  jsfile.forEach((f, i) =>{
    let props = require(`./commands/${f}`);
    console.log(`${f} loaded!`);
    bot.commands.set(props.help.name, props);
  });
});

bot.on("message", (message) => {
  
  if(message.author.bot) return;
  if(message.channel.type === "dm") return 

 let messageArray = message.content.split(" ");
  let cmd = messageArray[0];
  let args = messageArray.slice(1);
6
if(cmd == `${prefix}ping`) {
message.channel.send(`Pong!`)
} 
if(cmd == `${prefix}botms`) {
message.channel.send(` your bot ms ${bot.ping}ms`)
} 

  if(!message.content.startsWith(prefix)) return;

let commandfile = bot.commands.get(cmd.slice(prefix.length));
  if(commandfile) commandfile.run(bot,message,args);
});
bot.login(process.env.TOKEN)




bot.on("messageUpdate", async(oldMessage, newMessage) => {
   let mulogs = oldMessage.guild.channels.find(channel => channel.name === "mod-logs");
   if(!mulogs) {
   mulogs = oldMessage.guild.channels.find(channel => channel.name === "bot-hell");
     if(!mulogs) return;
   }
   
  if(oldMessage.channel.id === "545654350689730590") return;
  if(oldMessage.channel.id === "546749025311784990") return;

  
  if(oldMessage.content === newMessage.content) return;
  if(oldMessage.channel.id === "537551761607753728") return; 
  let editembed = new Discord.RichEmbed()
  .setThumbnail(oldMessage.author.avatarURL)
  .setColor("#15f153")
  .setDescription("Message Edited")
  .addField("Message author", `${oldMessage.author}`)
  .addField("Before Editing:", oldMessage.content, true)
  .addField("After Editing:", newMessage.content, true)
  .addField("Channel:", oldMessage.channel, true)
  .setTimestamp()
  mulogs.sendEmbed(editembed);
  return;
});