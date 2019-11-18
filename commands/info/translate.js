const querystring = require('querystring');
const fetch = require('node-fetch');
const {yandex} = require('../../config.json');

module.exports = {
	name: 'translate',
	aliases: ['tl', 'ytl'],
	description: "Display Mars' Time",
	cooldown: 5,
	run: async (client, message, args) => {
		const query = querystring.stringify({key: yandex, text: args.join(' ')});
		try {
			const {text} = await fetch(
				`https://translate.yandex.net/api/v1.5/tr.json/translate?lang=en&${query}`
			).then(response => response.json());

			return message.reply(`\n\`\`\`${text}\`\`\``);
		} catch (error) {
			console.error(error);
			return message.reply('An API error detected.');
		}
	}
};
