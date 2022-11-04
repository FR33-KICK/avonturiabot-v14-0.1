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
            {name: "Welkom in de discord server van Avonturia", value: '• Op dit moment zijn wij in onderhoud :pick:\r\n• Houdt #🎢-mededelingen  in de gaten voor updates! :roller_coaster:\r\n\r\nMeer van Avonturia? #🐦-socialmedia '}
        )
        .setFooter({ text: 'AvonturiaParkMC | Informatie', iconURL: 'https://i.imgur.com/E1irn4t.png'});

	await interaction.reply({embeds: [botEmbed], ephemeral: true});
		
	},
};
