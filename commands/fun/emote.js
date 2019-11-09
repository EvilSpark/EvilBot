const Discord = require('discord.js');
module.exports = {
	name: 'emote',
	aliases: ['em', 'emt'],
	description: 'Emotes',
	args: true,
	usage: '<emote-name>',
	cooldown: 1,
	run: (client, message, args) => {
		if (args[0] === 'ricardo') {
			var link = 'https://i.imgur.com/dLgr7Uj.gif';
		} else if (args[0] === 'pikagun') {
			var link = 'https://i.imgur.com/03FVNNm.png';
		} else if (args[0] === 'cylaugh') {
			var link = 'https://i.imgur.com/llM1z2J.gif';
		} else if (args[0] === 'pepelmao') {
			var link = 'https://i.imgur.com/YCQNMs9.gif';
		} else if (args[0] === 'ybb') {
			var link = 'https://i.imgur.com/bz5QG09.gif';
		} else if (args[0] === 'xqbestgirl') {
			var link = 'https://i.imgur.com/TrjNCIu.gif';
		} else if (args[0] === 'jasminethanos') {
			var link = 'https://i.imgur.com/2bXfyv5.gif';
		} else if (args[0] === 'ycthotdetected') {
			var link = 'https://i.imgur.com/NZCUGp3.gif';
		} else if (args[0] === 'ycstare') {
			var link = 'https://i.imgur.com/L85xNlE.gif';
		} else if (args[0] === 'kitani') {
			var link = 'https://i.imgur.com/axHfK9y.gif';
		} else if (args[0] === 'wc1') {
			var link = 'https://i.imgur.com/m3d5AQ0.gif';
		} else if (args[0] === 'wc2') {
			var link = 'https://i.imgur.com/W9fgFHE.gif';
		} else if (args[0] === 'hiatus') {
			var link =
				'https://cdn.discordapp.com/attachments/451169595940798464/641126987368366080/ATG_Discord_-_GIF_1_Small.gif';
		} else if (args[0] === 'jswhitetiger') {
			var link = 'https://i.imgur.com/YIMODjU.gif';
		} else if (args[0] === 'jasminecry') {
			var link = 'https://i.imgur.com/3UFW9E4.gif';
		} else if (args[0] === 'jasminerage') {
			var link = 'https://i.imgur.com/gjqeDdN.gif';
		} else if (args[0] === 'jasminekick') {
			var link = 'https://i.imgur.com/TL0OSvC.gif';
		} else if (args[0] === 'sulinger') {
			var link =
				'https://cdn.discordapp.com/attachments/451169595940798464/641846983274922005/ATG_Discord_-_GIF_9.gif';
		} else if (args[0] === 'ycsupersaiyan') {
			var link =
				'https://cdn.discordapp.com/attachments/451169595940798464/641845937571889153/ATG_Discord_-_GIF_11.gif';
		} else if (args[0] === 'arata') {
			var link = 'https://i.imgur.com/I7OuMuq.jpg';
		} else if (args[0] === 'ratata') {
			var link = 'https://i.imgur.com/jpKrkeL.gif';
		} else if (args[0] === 'ycrunandpeek') {
			var link = 'https://i.imgur.com/YPztjlL.gif';
		} else if (args[0] === 'lingxihug') {
			var link = 'https://i.imgur.com/yDcr1Ty.gif';
		} else if (args[0] === 'rko') {
			var link =
				'https://cdn.discordapp.com/attachments/451169595940798464/642239518983847946/79e78eee77be15bf.gif';
		} else if (args[0] === 'wuqing') {
			var link =
				'https://media.discordapp.net/attachments/451169595940798464/638558918305644555/ezgif.com-add-text.gif';
		}

		if (link) {
			const exampleEmbed = new Discord.RichEmbed()
				.setColor('#000000')
				.setImage(link)
				.setDescription('<' + link + '>');
			return message.channel.send({embed: exampleEmbed});
		}
		return message.reply(
			'\n```There is no such argument.\nAvailable arguments are ricardo, pikagun, cylaugh, ybb, pepelmao, xqbestgirl, jasminethanos, ycthotdetected, ycstare, wc1, wc2, kitani, hiatus, jswhitetiger, jasminecry, jasminerage, jasminekick, sulinger, ycsupersaiyan, arata, ratata, ycrunandpeek, lingxihug, rko, wuqing.\nPlease wait 60 more second(s) before reusing the atgp command.```'
		);
	}
};
