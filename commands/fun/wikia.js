const Discord = require('discord.js');
module.exports = {
	name: 'wikia',
	aliases: ['wiki'],
	description: 'Get Wikia links of the characters.',
	args: true,
	usage: '<wikia-name>',
	cooldown: 30,
	run: async (client, message, args) => {
		if (args[0] === 'yc') {
			var link =
				'https://ni-tian-xie-shen-against-the-gods.fandom.com/wiki/Yun_Che';
		} else if (args[0] === 'xq') {
			var link =
				'https://ni-tian-xie-shen-against-the-gods.fandom.com/wiki/Xia_Qingyue';
		} else if (args[0] === 'cy') {
			var link =
				'https://ni-tian-xie-shen-against-the-gods.fandom.com/wiki/Cang_Yue';
		} else if (args[0] === 'caiyi') {
			var link =
				'https://ni-tian-xie-shen-against-the-gods.fandom.com/wiki/Huan_Caiyi';
		} else if (args[0] === 'cz') {
			var link =
				'https://ni-tian-xie-shen-against-the-gods.fandom.com/wiki/Xing_Wu';
		} else if (args[0] === 'sl') {
			var link =
				'https://ni-tian-xie-shen-against-the-gods.fandom.com/wiki/Su_Ling%27er';
		} else if (args[0] === "xue'er") {
			var link =
				'https://ni-tian-xie-shen-against-the-gods.fandom.com/wiki/Feng_Xue%27er';
		} else if (args[0] === 'xl') {
			var link =
				'https://ni-tian-xie-shen-against-the-gods.fandom.com/wiki/Xiao_Lingxi';
		} else if (args[0] === 'smy') {
			var link =
				'https://ni-tian-xie-shen-against-the-gods.fandom.com/wiki/Shui_Meiyin';
		} else if (args[0] === 'cyc') {
			var link =
				'https://ni-tian-xie-shen-against-the-gods.fandom.com/wiki/Chu_Yuechan';
		} else if (args[0] === 'sx') {
			var link =
				'https://ni-tian-xie-shen-against-the-gods.fandom.com/wiki/Shen_Xi';
		} else if (args[0] === 'bb') {
			var link =
				'https://ni-tian-xie-shen-against-the-gods.fandom.com/wiki/Yun_Qianying';
		} else if (args[0] === 'jas') {
			var link =
				'https://ni-tian-xie-shen-against-the-gods.fandom.com/wiki/Jasmine';
		} else if (args[0] === 'mx') {
			var link =
				'https://ni-tian-xie-shen-against-the-gods.fandom.com/wiki/Mu_Xuanyin';
		} else if (args[0] === 'sy') {
			var link =
				'https://ni-tian-xie-shen-against-the-gods.fandom.com/wiki/Shui_Yingyue';
		} else if (args[0] === 'yw') {
			var link =
				'https://ni-tian-xie-shen-against-the-gods.fandom.com/wiki/Yun_Wuxin';
		} else if (args[0] === 'yx') {
			var link =
				'https://ni-tian-xie-shen-against-the-gods.fandom.com/wiki/Yun_Xi';
		} else if (args[0] === 'mb') {
			var link =
				'https://ni-tian-xie-shen-against-the-gods.fandom.com/wiki/Mu_Bingyun';
		} else if (args[0] === 'mf') {
			var link =
				'https://ni-tian-xie-shen-against-the-gods.fandom.com/wiki/Mu_Feixue';
		}

		if (link) {
			return message.channel.send(link);
		}
		return message.reply(
			"\n```\n Only ATG names are allowed. \nThere is no such argument.\nAvailable arguments are yc, xq, mx, sy, yw, yx, sx, smy, jas, bb, sl, xl, xue'er, cyc, cy, caiyi, cz, mb, mf.\n Do not spam or I will increase the cooldown of 30 seconds.```"
		);
	}
};
