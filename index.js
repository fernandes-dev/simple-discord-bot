const { Client, GatewayIntentBits } = require('discord.js');
require('dotenv').config();

const client = new Client({ intents: [GatewayIntentBits.Guilds, GatewayIntentBits.GuildMessages] });

const usersIds = {
	'user_id': 'user_name',
};

const replies = {
	ping: 'pong',
	server: 'server info',
	user: 'user info',
};

client.once('ready', () => {
	console.log('Ready!');
});

client.once('ready', () => {
	console.log('Ready!');
});

client.on('interactionCreate', async interaction => {
	if (!interaction.isChatInputCommand()) return;

	const { commandName } = interaction;

	await interaction.reply(replies[commandName] || '');
});

client.on('messageCreate', async (message) => {
	if (usersIds[message.author.id]) {
		await message.channel.send(`Oi ${usersIds[message.author.id]}`);
	}
});


client.login(process.env.DISCORD_TOKEN).then(r => console.log('login successfully', r));
