const Discord = require("discord.js");
module.exports = {
  random(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  },
  shorten(text, maxLen = 2000) {
    return text.length > maxLen ? `${text.substr(0, maxLen - 3)}...` : text;
  },
  checkStatus(res) {
    if (res.ok) {
      return res;
    }
    return false;
  },
  reply(message, text, field = {}) {
    let exampleEmbed = new Discord.RichEmbed()
      .setColor("#002733")
      .setAuthor(message.author.username, message.author.avatarURL)
      .setDescription(text);

    if (Object.entries(field).length) {
      Object.keys(field).forEach(key => {
        exampleEmbed = exampleEmbed.addField(key, field[key], true);
      });
    }
    return message.channel
      .send({ embed: exampleEmbed })
      .then(msg => msg.delete(10000))
      .catch(err => console.error(err));
  },
  log(err) {
    return console.error(err);
  },
  sendImg(message, img) {
    const exampleEmbed = new Discord.RichEmbed()
      .setColor("#002733")
      .setImage(img);
    return message.channel.send({ embed: exampleEmbed });
  }
};
