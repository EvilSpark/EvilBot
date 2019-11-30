const Discord = require("discord.js");
const fetch = require("node-fetch");
const { checkStatus } = require("../../utility.js");
const cheerio = require("cheerio");

module.exports = {
  name: "nshba",
  description: "Get latest chap title of Nine Star Hegemon Body Art.",
  cooldown: 30,
  args: false,
  run: async (client, message, args) => {
    fetch("http://h5.17k.com/book/1398783.html")
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
          const title = $(".hongbao")
            .find("a")
            .last()
            .find("span")
            .text();
          const exampleEmbed = new Discord.RichEmbed()
            .setColor("#002733")
            .setTitle("NSHBA Chapter Number")
            .setDescription(title.match(/\d+/) - 13);
          return message.channel.send({ embed: exampleEmbed });
        } else {
          return message.reply("Not Found");
        }
      })
      .catch(err => console.error(err));
  }
};
