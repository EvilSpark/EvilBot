const Discord = require("discord.js");
const fetch = require("node-fetch");
const { checkStatus } = require("../../utility.js");
const cheerio = require("cheerio");

module.exports = {
  name: "mcbw",
  description: "Get latest chap title of My Cold and Beautiful Wife.",
  cooldown: 10,
  args: false,
  run: async (client, message, args) => {
    fetch("http://www.iyoule.com/book/4/")
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
          const title = $(".chptname").text();
          const exampleEmbed = new Discord.RichEmbed()
            .setColor("#002733")
            .setTitle("MCBW Chapter Number")
            .setDescription(title);
          return message.channel.send({ embed: exampleEmbed });
        } else {
          return message.reply("Not Found");
        }
      })
      .catch(err => console.error(err));
  }
};
