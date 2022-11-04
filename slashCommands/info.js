const { SlashCommandBuilder, EmbedBuilder, Embed } = require('discord.js');

module.exports = {
	category: "information",
	data: new SlashCommandBuilder()
		.setName('info')
		.setDescription('Geeft info.'),
	async execute(client,interaction) {

		var botEmbed = new EmbedBuilder()
		.setTitle("AvonturiaParkMC | Informatie")
		.setColor("#992D22")
        .addFields(
			{name: '_AvonturiaParkMC_ is een online custom pretpark in het spel Minecraft. Het park bestaat uit vijf themagebieden met unieke attracties. Zien we jou binnenkort ook een ritje maken in een van de attracties? Of ben jij bij een van de grote evenementen?  :confetti_ball: ', value: `\n\u200b`}
        )
        .setFooter({ text: 'AvonturiaParkMC | Informatie', iconURL: 'https://i.imgur.com/E1irn4t.png'});

	await interaction.reply({embeds: [botEmbed], ephemeral: true});
		
	},
};
