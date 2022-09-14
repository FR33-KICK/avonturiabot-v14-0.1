const { SlashCommandBuilder, EmbedBuilder, Embed, PermissionFlagsBits } = require('discord.js');

module.exports = {
	data: new SlashCommandBuilder()
		.setName('mededeling')
		.setDescription('Maak een mededeling.')
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
        .setFooter({ text: 'AvonturiaParkMC | Mededeling', iconURL: 'https://i.imgur.com/PExn2Gg.png'});

		interaction.reply({ embeds: [embed1], fetchReply: true })

},
};