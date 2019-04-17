const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {
    if (message.author.id !== ("564157157684281375"))
    if (message.author.id !== ("564157157684281375")) return;
        let Table = require(`cli-table`);
        let table = new Table({
            head: [
                `ID`,
                `Name`,
                `Owner`,
                `Users`,
                `Bots`,
                `Total`
            ], colWidths: [30, 50, 50, 10, 10, 10]
        });
        bot.guilds.map(g =>
          table.push(
             [g.id, g.name, g.owner.user.tag, g.members.filter(u => !u.bot).size, g.members.filter(u => u.bot).size, g.members.size]
          ));
        require(`snekfetch`)
        .post(`https://hastebin.com/documents`)
        .set(`Content-Type`, `application/raw`)
        .send(table.toString())
        .then(r =>
           message.channel.send(`Im inside these servers! http://hastebin.com/` + r.body.key));

}

module.exports.help = {
  name: "servers"
}