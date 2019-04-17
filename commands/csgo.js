const Discord = require('discord.js');
var request = require('request');
var cheerio = require('cheerio');

const img = "https://cdn.discordapp.com/avatars/513119357409296387/0314be9590d92e2b3ee37d031543bf91.png?size=2048"

function getStatData(location, $) {

    var selector = $('.stats-stat .value').eq(location).text();

    var stat_array = $.parseHTML(selector);

    var stat = 0;

    if (stat_array == null || stat_array.lengh == 0) {
        return -1;

    } else {
        stat = stat_array[0].data;
    }

    return stat;
}

module.exports.run = async (bot, message, args) => {

    var UR_L = "http://csgo.tracker.network/profile/" + args[0];

    if (!args[0]) {
        return message.channel.send(":x: Please Enter A Valid STEAMID64 Or Custom Url");
    }

    request(UR_L, function(err, resp, body) {

        $ = cheerio.load(body);

        var KD = getStatData(0, $);
        if (KD == -1) {
            message.channel.send(":x: Invalid, Make Sure Your Profile Is Not Private And You Have Entered A Valid STEAMID64 Or Custom URL!");
            return;
        }

        var WIN = getStatData(1, $);
        var nam = getStatData(3, $);
        var HS = getStatData(4, $);
        var MONEY = getStatData(5, $);
        var SCORE = getStatData(6, $);
        var KILLS = getStatData(7, $);
        var DEATHS = getStatData(8, $);
        var MVP = getStatData(9, $);
        var BS = getStatData(13, $);
        var BD = getStatData(14, $);
        var HR = getStatData(15, $);

        var STAT = new Discord.RichEmbed()
        .setAuthor('Enjoy!', img)
            .setTitle(`CS:GO Stats-`)
            .setURL(UR_L)
            .setColor("0x#FF0000")
        .setThumbnail('https://cdn.discordapp.com/attachments/507218285905969162/514150980699553806/Csgo_competitive_ico.png')
            .addField("**__Total KD-__**", KD, true)
            .addField("**__Win-__**", `${WIN}%`, true)
            .addField("**__Total Hostages Saved-__**", HR, true)
            .addField("**__Total Money-__**", MONEY, true)
            .addField("**__Total Score-__**", SCORE, true)
            .addField("**__Total Kills-__**", KILLS, true)
            .addField("**__Total Deaths-__**", DEATHS, true)
            .addField("**__MVP-__**", MVP, true)
            .addField("**__Total Bombs Set-__**", BS, true)
            .addField("**__Total Bombs Defused-__**", BD, true)
            .addField("**__Total Headshots-__**", HS, true);

        message.delete()
        message.channel.send(STAT);

    })
}

module.exports.help = {
    name: "csgo"
}