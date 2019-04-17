
const discord = require("discord.js");
const superagent = require("superagent")

module.exports.run = async (bot,message,args) =>{
  
    const botconfig = require("../botconfig.json");


 //   if(!message.content.startsWith(`botconfig.prefix`) || (`botconfig.prefix2`))return; 
    
    
      
    
        


let {body} = await superagent
.get('https://random.dog/woof.json');
let dogembed = new discord.RichEmbed()
.setColor("#ff9900")
.setTitle("there is an dog image :dog2:")
.setImage(body.url)


message.channel.send(dogembed);
}

module.exports.help = {
    name: "dog"
}