
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
 .get('http://api.oboobs.ru/boobs/0/1/random')
 .end((err, res) => {
  message.channel.send(`http://media.oboobs.ru/${res.body[0].preview}`);
 });

        } else {
     const { get } = require('superagent')
 .get('http://api.oboobs.ru/boobs/0/1/random')
 .end((err, res) => {
  message.channel.send(`http://media.oboobs.ru/${res.body[0].preview}`);
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
name: "boobs",
category: "NSFW",
description: "it sends boobs picture, what were you expected?",
usage: "boobs"
};