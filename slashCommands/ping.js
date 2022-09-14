const { SlashCommandBuilder, EmbedBuilder, Embed } = require('discord.js');

module.exports = {
	data: new SlashCommandBuilder()
		.setName('ping')
		.setDescription('Check of de bot online is.'),
	async execute(client,interaction) {

        var botEmbed = new EmbedBuilder()
		.setTitle("Pong! 🏓")
		.setColor("#992D22")

	await interaction.reply({embeds: [botEmbed], ephemeral: true});

},
};