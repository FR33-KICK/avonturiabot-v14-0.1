const { SlashCommandBuilder, EmbedBuilder, Embed, PermissionFlagsBits } = require('discord.js');

module.exports = {
	data: new SlashCommandBuilder()
		.setName('update')
		.setDescription('Maak een update.')
		.setDefaultMemberPermissions(PermissionFlagsBits.BanMembers)
		.addStringOption(option =>
			option.setName('titel')
			.setDescription("Geef een titel op.")
			.setRequired(true))
			.addStringOption(option =>
				option.setName('tekst')
				.setDescription("Geef een tekst op.")
				.setRequired(true)),
	async execute(client,interaction) {

		let titel = await interaction.options.getString("titel");
		let tekst = await interaction.options.getString("tekst");

		var embed1 = new EmbedBuilder()
		.setTitle(`${titel}`)
        .setColor('#992D22')
        .addFields(
            {name: `${titel}`, value: `${tekst}`}
        )
        .setFooter({ text: 'AvonturiaParkMC | Update', iconURL: 'https://i.imgur.com/PExn2Gg.png'});

		interaction.reply({ embeds: [embed1], fetchReply: true })
		

},
};