const Discord = require('discord.js');

module.exports = {
	name: 'time',
	description: 'Display China time.',
	cooldown: 30,
	execute(message, args) {
		var odate = new Date();
		var date = new Date();
		date.setTime(odate.getTime() + 5 * 30 * 60 * 1000);
		message.channel.send(date.toLocaleTimeString());
	}
};
