const { SlashCommandBuilder, EmbedBuilder, Embed, VoiceChannel, } = require('discord.js');
const { generateDependencyReport, AudioPlayerStatus, joinVoiceChannel, createAudioPlayer, createAudioResource } = require('@discordjs/voice');

module.exports = {
	data: new SlashCommandBuilder()
		.setName('speel')
		.setDescription('Speel muziek.')
		.addChannelOption((option) =>
		option
		.setName('channel')
		.setDescription("De channel waar de muziek moet afspelen.")
		.setRequired(true)
		)
		.addStringOption((option) =>
			option
			.setName('link')
			.setDescription("Geef de link van de muziek op. (gebruik een direct link zoals: jukehost.co.uk of google drive)")
			.setAutocomplete(true)
			.setRequired(true)
		),
	async autocomplete(interaction, client) {
		const focusedValue = interaction.options.getFocused();
		const choices = ["📻 Radio: SLAM! top40", "📻 Radio: Qmusic", "📻 Radio: RADIO538", "📻 Radio: BBC", "📻 Radio: SLAM! Hardstyle", "📻 Radio: !SLAM", "📻 Radio: NPO 3FM", "📻 Radio: Efteling Radio", "🎼 Muziek: Efteling muziek mix", "🎼 Muziek: AvonturiaParkMC Watershow", "🎼 Muziek: AvonturiaParkMC Mainstreet muziek", "🎼 Muziek: Disney Film muziek"];
		const filtered = choices.filter((choice) => 
		    choice.startsWith(focusedValue)
		);
		await interaction.respond(
			filtered.map((choice) => ({ name: choice, value: choice }))
		  );
		},

		async execute(client, interaction) { 

		let link = await interaction.options.getString("link");
		let channel = await interaction.options.getChannel("channel");

		const voiceChannelId = channel.id;
		const voiceChannel = client.channels.cache.get(voiceChannelId);
        const guildId = "869885487442173982";

		const player = createAudioPlayer();

		const resource = createAudioResource(link);
		player.play(resource);

		const connection = joinVoiceChannel({
			channelId: voiceChannelId,
			guildId: guildId,
			adapterCreator: voiceChannel.guild.voiceAdapterCreator,
		});

		var embed1 = new EmbedBuilder()
		.setColor("#992D22")
        .addFields(
            {name: "AvonturiaParkMC | Muziek", value: `🎵 **Begonnen** met het spelen van ${link} in ${channel} 🎵`}
        )
        .setFooter({ text: 'AvonturiaParkMC | Muziek', iconURL: 'https://i.imgur.com/qxoexbQ.jpg'});

		interaction.reply({ embeds: [embed1] })

		const subscription = connection.subscribe(player);

		if (subscription) {

			setTimeout(() => subscription.unsubscribe);
		}
},
};