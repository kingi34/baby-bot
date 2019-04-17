  const Fortnite = require('fortnite');
  const stats = new Fortnite("7e6f8fae-d645-41cd-940f-47447c537230");
  const Discord = require('discord.js');

  module.exports.run = (client, message, args, tools) => {


      const botconfig = require("../botconfig.json");
      let prefix = botconfig.prefix;


      if(!message.content.startsWith(prefix))return;


      const platforms = ['pc', 'xbl', 'psn'];
      const username = args.slice(1).join(' ');
      let platform = args[0];

      if (!platforms.includes(platform)) 
      if (!username) 

      platform = stats.getPlatform(platform);
      stats.user(username, platform).then(data => {
          const fortnite = new Discord.RichEmbed()
              .setColor(0x0D64BD)
              .setTitle(`Stats for ${data.username}`)
              .setDescription(`**Top Placement**\n\n**Top 3s:** *${data.stats.lifetime[1]['Top 3s']}*\n**Top 5s:** *${data.stats.lifetime[2]['Top 5s']}*\n**Top 6s:** *${data.stats.lifetime[3]['Top 6s']}*\n**Top 12s:** *${data.stats.lifetime[4]['Top 12s']}*\n**Top 25s:** *${data.stats.lifetime[5]['Top 25s']}*`)
              .addField('Total Score', data.stats.lifetime[6]['Score'], true)
              .setThumbnail('https://vignette.wikia.nocookie.net/fortnite/images/d/d8/Icon_Founders_Badge.png')
              .addField('Matches Played', data.stats.lifetime[7]['Matches Played'], true)
              .addField('Wins', data.stats.lifetime[8]['Wins'], true)
              .addField('Win Percentage', data.stats.lifetime[9]['Win%'], true)
              .addField('Kills', data.stats.lifetime[10]['Kills'], true)
              .addField('K/D Ratio', data.stats.lifetime[11]['K/d'], true)

              console.log(data.stats.lifetime)

          message.channel.send({embed: fortnite})
      }).catch(e => {
          console.log(e);
          var noneEmbed = new Discord.RichEmbed()
          .setTitle("Please provide a vaild user.")
          .setThumbnail("https://i.imgur.com/vx8juC1.png")
          .setColor("#000000")
          .setDescription("User not found in the Database!\nUsage `fortnite <platform> <username>`")
          message.channel.send(noneEmbed);



              })
  }
  module.exports.help = {
      name: "fm"
  }