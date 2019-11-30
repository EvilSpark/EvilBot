const Discord = require("discord.js");
const querystring = require("querystring");
const fetch = require("node-fetch");
const { checkStatus, shorten, reply, log } = require("../../utility.js");
const cheerio = require("cheerio");

module.exports = {
  name: "nu",
  description: "Get Novel Info",
  cooldown: 30,
  args: true,
  ch: ["479849680268820480"],
  async execute(message, args) {
    const query = querystring.stringify({ s: args.join(" ") });
    fetch(`https://www.novelupdates.com/?${query}`)
      .then(checkStatus)
      .then(res => {
        if (res) {
          return res.text();
        }
        return false;
      })
      .then(text => {
        if (text) {
          let $ = cheerio.load(text);
          const link = $(".search_main_box_nu")
            .first()
            .find("a")
            .attr("href");
          if (link) {
            fetch(link)
              .then(checkStatus)
              .then(res => {
                if (res) {
                  return res.text();
                }
                return false;
              })
              .then(html => {
                if (html) {
                  $ = cheerio.load(html);
                  const title = $(".seriestitlenu").text();
                  const img = $(".seriesimg")
                    .find("img")
                    .attr("src");
                  const desc = $("#editdescription").text();
                  const genre = [];
                  $("#seriesgenre")
                    .find("a")
                    .each((_, elem) => {
                      genre.push($(elem).text());
                    });
                  const author = [];
                  $("#showauthors")
                    .find("a")
                    .each((_, elem) => {
                      author.push($(elem).text());
                    });
                  const status = $("#editstatus").text();

                  const exampleEmbed = new Discord.RichEmbed()
                    .setColor("#002733")
                    .setTitle(title)
                    .setDescription(shorten(desc))
                    .setImage(img)
                    .addField("Author", author.join("\n"), true)
                    .addField("Genre", genre.join("・"), true)
                    .addField("Status", status, true);
                  return message.channel.send({ embed: exampleEmbed });
                } else {
                  return reply(message, "Not Found");
                }
              })
              .catch(err => {
                log(err);
                return reply(message, "Something Went Wrong");
              });
          } else {
            return reply(message, "Not Found");
          }
        } else {
          return reply(message, "Not Found");
        }
      })
      .catch(err => {
        log(err);
        return reply(message, "Something Went Wrong");
      });
  }
};
