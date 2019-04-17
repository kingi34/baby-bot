const Discord = require("discord.js");
const fs = require("fs");
const submit = JSON.parse(fs.readFileSync("./commands/submit.json", "utf8"));
// i dont get it there is no error so try create new idk nope wait
module.exports.run = async (bot, message, args) => {
const DBL = require("dblapi.js");
const dbl = new DBL("eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjUxMzExOTM1NzQwOTI5NjM4NyIsImJvdCI6dHJ1ZSwiaWF0IjoxNTQzMTU1ODA3fQ.VA6OgOUPfQfj9kq3iH9GtideD_IagiDBkrM3DwhTH_Y", { webhookPort: 5000, webhookAuth: 'password' });
dbl.webhook.on('vote', vote => {
  console.log(`User with ID ${vote.user} just voted!`);
});
}
// i hate my life lol xD
module.exports.help = {
  name: 'chack'
}