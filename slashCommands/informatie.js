const { SlashCommandBuilder, EmbedBuilder, Embed, PermissionFlagsBits  } = require('discord.js');

module.exports = {
	data: new SlashCommandBuilder()
		.setName('informatie')
		.setDescription('Krijg de link van de AvonturiaParkMC website.')
		.setDefaultMemberPermissions(PermissionFlagsBits.BanMembers),
	async execute(client,interaction) {

		var botEmbed = new EmbedBuilder()
		.setTitle(`Welkom in de officiële Discord server van AvonturiaParkMC!`)
        .setColor('#992D22')
        .addFields(
            {name: 'Wat is AvonturiaParkMC?', value: `_AvonturiaParkMC_ is een online custom pretpark in het spel Minecraft. Het park bestaat uit vijf themagebieden met unieke attracties. Zien we jou binnenkort ook een ritje maken in een van de attracties? Of ben jij bij een van de grote evenementen?  :confetti_ball: `},
			{name: 'Belangrijk!', value: `Houd je aan de regels zodat het leuk blijft voor iedereen. Bekijk de regels in #📜-regels of op de website. [Klik hier](https://avonturiaparkmc.nl/regels/)`},
			{name: 'Hoe join ik op AvonturiaParkMC?', value: `Voor al je vragen kunt u kijken in de Kennisbank. [Klik hier](https://avonturiaparkmc.nl/kennisbank/)`},
			{name: 'AvonturiaParkMC socials:', value: `Bekijk alle AvonturiaParkMC social media in #📷-media-posts of kijk op de website. [Klik hier](https://avonturiaparkmc.nl/socialmedia/)`},
			{name: 'Meldingen', value: `Wil jij altijd op de hoogte blijven van de laatse nieuwtjes over AvonturiaParkMC? Kijk dan in #✨-rollensellectie`},
			{name: 'Veel plezier!', value: `Nu ben je helemaal geinformeerd over AvonturiaParkMC en kan je gezellig chatten in #🌐-algemeen of in het park! Heb je verder nog vragen? Maak dan een ticket aan in #🎫-ticket-aanmaken of stuur een mail naar support@avonturiaparkmc.nl.`},
        )
        .setFooter({ text: 'AvonturiaParkMC | Informatie', iconURL: 'https://i.imgur.com/E1irn4t.png'});

	await interaction.reply({embeds: [botEmbed], fetchReply: true });

},
};