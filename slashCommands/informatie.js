const { SlashCommandBuilder, EmbedBuilder, Embed } = require('discord.js');

module.exports = {
	data: new SlashCommandBuilder()
		.setName('informatie')
		.setDescription('Krijg de link van de AvonturiaParkMC website.')
		.setDefaultMemberPermissions(PermissionFlagsBits.BanMembers),
	async execute(client,interaction) {

		var botEmbed = new EmbedBuilder()
		.setTitle(':scroll: AvonturiaParkMC | Website')
        .setColor('#992D22')
        .addFields(
            {name: 'AvonturiaParkMC website:', value: `[Klik hier!](Avonturiaparkmc.nl)`}
        )
        .setFooter({ text: 'AvonturiaParkMC | Website', iconURL: 'https://i.imgur.com/qxoexbQ.jpg'});

	await interaction.reply({embeds: [botEmbed], ephemeral: true});

},
};