const { SlashCommandBuilder, EmbedBuilder, Embed } = require('discord.js');

module.exports = {
	data: new SlashCommandBuilder()
		.setName('website')
		.setDescription('Krijg de link van de AvonturiaParkMC website.'),
	async execute(client,interaction) {

		var botEmbed = new EmbedBuilder()
		.setTitle(':scroll: AvonturiaParkMC | Website')
        .setColor('#992D22')
        .addFields(
            {name: 'AvonturiaParkMC website:', value: 'Avonturiaparkmc.nl'}
        )
        .setFooter({ text: 'AvonturiaParkMC | Website', iconURL: 'https://i.imgur.com/qxoexbQ.jpg'});

	await interaction.reply({embeds: [botEmbed], ephemeral: true});

},
};