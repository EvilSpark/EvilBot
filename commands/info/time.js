module.exports = {
	name: 'time',
	description: "Display Mars' Time",
	cooldown: 30,
	run: (client, message, args) => {
		var odate = new Date();
		var date = new Date();
		date.setTime(odate.getTime() + 5 * 30 * 60 * 1000);
		message.channel.send(date.toLocaleTimeString());
	}
};
