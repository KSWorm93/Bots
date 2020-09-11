require('dotenv').config();
const Discord = require('discord.js');
const bot = new Discord.Client();
bot.commands = new Discord.Collection();
const botCommands = require('./commands');

Object.keys(botCommands).map(key => {
	bot.commands.set(botCommands[key].name, botCommands[key]);
});

const TOKEN = process.env.TOKEN;

bot.login(TOKEN);

bot.on('ready', () => {
	console.info(`Logged in as ${bot.user.tag}!`);
	console.log(bot.commands)
});

bot.on('message', msg => {
	if(msg.author.bot) { return; }
	const args = msg.content.split(/ +/);
	const commandName = args.shift().toLowerCase();
	const command = bot.commands.get(commandName) || cmdAlias(bot.commands, commandName)
	
	if (!command) { return; }

	try {
		command.execute(msg, args);
	} catch (error) {
		console.error(error);
		msg.reply('there was an error trying to execute that command! :(');
	}
});

function cmdAlias(commands, cmdName) {
	return commands.find(function (cmd) {
		if(!cmd.aliases) { return; }
		for (let index = 0; index < cmd.aliases.length; index++) {
			const element = cmd.aliases[index].toLowerCase();
			if(element == cmdName){
				return cmd;
			}
		} 
		return false;
	})
}