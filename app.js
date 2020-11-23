// require the discord.js module
const Discord = require('discord.js');
const {prefix, token} = require('./config.json');

// create a new Discord client
const client = new Discord.Client();

// when the client is ready, run this code
// this event will only trigger one time after logging in
client.once('ready', () => {
	console.log(`I am online , my name is 🍓 ${client.user.username}`);

	client.user.setPresence({
		status: "online",
		game: {
			name: "🍓 Anime 🍓",
			type: "WATCHING"
		}
	})
});

client.on('message', async message => {

	if (message.content === `${prefix}ping`) {
		message.channel.send('Pong.');
	} else if (message.content === `${prefix}beep`) {
		message.channel.send('Boop.');
	} else if (message.content === `${prefix}server`) {
		message.channel.send(`Server name: ${message.guild.name} \nTotal members: ${message.guild.memberCount}`);
	} else if (message.content === `${prefix}user-info`) {
		message.channel.send(`Your username: ${message.author.username} \nYour ID: ${message.author.id}`);
		//message.channel.send(`Time: ${message.guild.createdAt} \nRegion: ${message.guild.region}`);
	}

});

// login to Discord with your app's token
client.login(token);