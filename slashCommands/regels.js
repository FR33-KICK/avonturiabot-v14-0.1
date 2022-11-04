const { SlashCommandBuilder, EmbedBuilder, Embed } = require('discord.js');

module.exports = {
	category: "information",
	data: new SlashCommandBuilder()
		.setName('regels')
		.setDescription('Bekijk de server regels.'),
	async execute(client,interaction) {

		var botEmbed = new EmbedBuilder()
		.setTitle(':scroll: AvonturiaParkMC | Discord regels')
        .setColor('#992D22')
        .addFields(
            {name: '\u200B', value: ':small_orange_diamond: - Niet blazen in voicechats // irritant gedrag // DDoS bedreigingen uiten.\r\n:small_blue_diamond: - Niet spammen in chats & Schelden met ziektes.\r\n:small_orange_diamond: - Geen seksuele opmerkingen maken.\r\n:small_blue_diamond: - Orders van een staff / Discord moderator altijd opvolgen.\r\n:small_orange_diamond: - Niet bemoeien met staffzaken / andermans.\r\n:small_blue_diamond: - Niet onnodig / spam mentionen & reclame maken\r\n:small_orange_diamond: - Geen speler(s) beledigen / pesten in welke vorm dan ook. \r\n:small_blue_diamond:  - Geen speler(s) uitschelden in welke vorm dan ook.\r\n:small_orange_diamond: - Geen racisme/discriminatie & Speler(s) bedreigen.\r\n:small_blue_diamond: - Niet staff uitschelden / beledigen / uitlokken. (Ook via PM’s)'}
        )
        .setFooter({ text: 'AvonturiaParkMC | Regels', iconURL: 'https://i.imgur.com/E1irn4t.png'});

	await interaction.reply({embeds: [botEmbed], ephemeral: true});
		
	},
};
