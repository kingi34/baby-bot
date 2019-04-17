
exports.run = async (client, message, args, level) => { // eslint-disable-line no-unused-vars
    if (message.channel.nsfw === true) {
      const { get } = require('superagent')
        .get('https://discordbots.org/api/bots/365958655926992896/check')
        .set('Authorization', 'oof') 
        .query({ userId: message.author.id })
        .end((err, res) => {
          console.log(res.body.voted);
          var check = res.body.voted;
          if (check == 1) {
            const { get } = require('superagent')
            .get('https://nekobot.xyz/api/image')
            .query({ type: '4k'})
            .end((err, res) => {
              message.channel.send({ file: res.body.message });
            });
          } else {
  const { get } = require('superagent')
            .get('https://nekobot.xyz/api/image')
            .query({ type: '4k'})
            .end((err, res) => {
              message.channel.send({ file: res.body.message });
            });
          }
      });
      } else {
        message.channel.send({embed: {
            description: "this isn't NSFW channel!"
        }})
      }
};

exports.conf = {
  enabled: true,
  guildOnly: true,
  aliases: [],
  permLevel: "User"
};

exports.help = {
  name: "4kporn",
  category: "NSFW",
  description: "it sends 4k porn picture, what were you expected?",
  usage: "4kporn"
};