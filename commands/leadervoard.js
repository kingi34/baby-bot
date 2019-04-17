const Discord = require('discord.js')
const arraySort = require('array-sort')
const table = require('table')
module.exports.run = async (client, message, args, tools) => {
  
    let invites = await message.guild.fetchInvites()

    invites = invites.array();

    arraySort(invites, 'uses', { reverse: true });
    
    let possibleInvites = [['User', 'Uses']]; 
    invites.forEach(function(invite) {
        possibleInvites.push([invite.inviter, invite.uses]); 
    })

    const embed = new Discord.RichEmbed()
        .setColor(0xCB5A5E)
        .addField('Leaderboard', `\`\`\`${table.table(possibleInvites)}\`\`\``);   
    message.channel.send(`\`\`\`${table.table(possibleInvites)}\`\`\``)
    message.channel.send(message.channel, embed, {
      
        icon: 'https://cdn2.iconfinder.com/data/icons/circle-icons-1/64/trophy-128.png'
    })
    
}

module.exports.help = {
"name": "testing"
}