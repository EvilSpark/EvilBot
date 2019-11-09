module.exports = {
	name: 'pic',
	description: 'ATG Pics',
	args: true,
	usage: '<short-name>',
	cooldown: 1,
	run: (client, message, args) => {
		if (args[0] === 'cz') {
			var myArray = ['https://imgur.com/a/3GXED9F'];
		} else if (args[0] === 'yc') {
			var myArray = [
				'https://imgur.com/a/rjzubu0',
				'https://imgur.com/a/6n9Rz30',
				'https://imgur.com/a/UfQkFCE',
				'https://imgur.com/a/NzzsfEe',
				'https://imgur.com/a/K7V7Zn5'
			];
		} else if (args[0] === 'js') {
			var myArray = [
				'https://imgur.com/a/BSbV3KL',
				'https://imgur.com/a/LxtXvkq',
				'https://imgur.com/a/UfQkFCE',
				'https://imgur.com/a/3noY3DI',
				'https://imgur.com/a/Q3rSOxS'
			];
		} else if (args[0] === 'mx') {
			var myArray = [
				'https://imgur.com/a/cdrJumh',
				'https://imgur.com/a/JNwqQnY'
			];
		} else if (args[0] === 'cw') {
			var myArray = [
				'https://imgur.com/a/b9olrE0',
				'https://imgur.com/a/bkCGns8',
				'https://imgur.com/a/g6shxfA'
			];
		} else if (args[0] === 'cyc') {
			var myArray = [
				'https://imgur.com/a/k3YxhZ3',
				'https://imgur.com/a/yKon1aX'
			];
		} else if (args[0] === 'xq') {
			var myArray = [
				'https://imgur.com/a/T7YhLU4',
				'https://imgur.com/a/C88pAeQ',
				'https://imgur.com/a/NzzsfEe',
				'https://imgur.com/a/5ZygxVb'
			];
		} else if (args[0] === 'xl') {
			var myArray = [
				'https://imgur.com/a/rjzubu0',
				'https://imgur.com/a/6n9Rz30',
				'https://imgur.com/a/44ykrN7'
			];
		} else if (args[0] === 'cy') {
			var myArray = [
				'https://imgur.com/a/3noY3DI',
				'https://imgur.com/a/iiOzbCs',
				'https://imgur.com/a/D8h2CHu'
			];
		}
		if (myArray) {
			var randomItem = myArray[Math.floor(Math.random() * myArray.length)];
			return message.channel.send(randomItem);
		} else {
			return message.reply('No such arguments');
		}
	}
};
