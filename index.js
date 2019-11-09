const {Client, Collection} = require('discord.js');
const Discord = require('discord.js');
const {prefix, TOKEN} = require('./config.json');
const chalk = require('chalk');

const client = new Client({
	disableEveryone: true
});

const cooldowns = new Collection();

client.commands = new Collection();
client.aliases = new Collection();

['command'].forEach(handler => {
	require(`./handlers/${handler}`)(client);
});

client.on('ready', () => {
	console.log(chalk.blue(`Hi, ${client.user.username} is now online!`));

	client.user.setPresence({
		status: 'online',
		game: {
			name: 'me getting developed',
			type: 'WATCHING'
		}
	});
});

client.on('message', async message => {
	if (!message.content.startsWith(prefix) || message.author.bot) return;
	const args = message.content.slice(prefix.length).split(/ +/);
	const commandName = args.shift().toLowerCase();
	const command =
		client.commands.get(commandName) ||
		client.commands.find(
			cmd => cmd.aliases && cmd.aliases.includes(commandName)
		);
	console.info(chalk.green(`Called command: ${commandName}`));
	console.info(chalk.magentaBright(`User- ${message.author.tag}`));
	console.info(chalk.white('-------------------'));

	if (commandName.length === 0) return;

	// let command = client.commands.get(commandName);
	if (!command) command = client.commands.get(client.aliases.get(commandName));

	if (command.args && !args.length) {
		let reply = `You didn't provide any arguments, ${message.author}!`;

		if (command.usage) {
			reply += `\nThe proper usage would be: \`${prefix}${command.name} ${command.usage}\``;
		}

		return message.channel.send(reply);
	}

	if (!cooldowns.has(command.name)) {
		cooldowns.set(command.name, new Discord.Collection());
	}
	const now = Date.now();
	const timestamps = cooldowns.get(command.name);
	const cooldownAmount = (command.cooldown || 60) * 1000;
	if (timestamps.has(message.author.id)) {
		const expirationTime = timestamps.get(message.author.id) + cooldownAmount;

		if (now < expirationTime) {
			const timeLeft = (expirationTime - now) / 1000;
			return message.reply(
				`please wait ${timeLeft.toFixed(
					1
				)} more second(s) before reusing the \`${command.name}\` command.`
			);
		}
	}
	timestamps.set(message.author.id, now);
	setTimeout(() => timestamps.delete(message.author.id), cooldownAmount);

	// try {
	// 	command.execute(message, args, client);
	// } catch (error) {
	// 	console.error(error);
	// 	message.reply('there was an error trying to execute that command!');
	// }
	//if (command) command.run(client, message, args);

	// try {
	// 	command.run(client, message, args);
	// } catch (error) {
	// 	console.log(error);
	// 	message.reply('there was an error trying to execute that command!');
	// }

	if (command) command.run(client, message, args);
	// } else {
	// 	console.log(error);
	// 	message.reply('there was an error trying to execute that command!');
	// }
});

client.login(TOKEN);
