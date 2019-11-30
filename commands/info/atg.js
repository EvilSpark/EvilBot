const Discord = require("discord.js");
const fetch = require("node-fetch");
const { checkStatus } = require("../../utility.js");
const cheerio = require("cheerio");

module.exports = {
  name: "atg",
  description: "Get latest chap title",
  cooldown: 10,
  args: false,
  run: async (client, message, args) => {
    fetch("http://book.zongheng.com/book/408586.html")
      .then(checkStatus)
      .then(res => {
        if (res) {
          return res.text();
        } else {
          return false;
        }
      })
      .then(text => {
        if (text) {
          const $ = cheerio.load(text);
          const title = $(".tit")
            .find("a")
            .text();
          const exampleEmbed = new Discord.RichEmbed()
            .setColor("#002733")
            .setTitle("ATG Chapter Number")
            .setDescription(title);
          return message.channel.send({ embed: exampleEmbed });
        } else {
          return message.reply("Not Found");
        }
      })
      .catch(err => console.error(err));
  }
};
