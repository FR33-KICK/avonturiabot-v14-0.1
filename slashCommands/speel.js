const { SlashCommandBuilder, EmbedBuilder, Embed, VoiceChannel, } = require('discord.js');
const { generateDependencyReport, AudioPlayerStatus, joinVoiceChannel, createAudioPlayer, createAudioResource } = require('@discordjs/voice');

module.exports = {
	data: new SlashCommandBuilder()
		.setName('speel')
		.setDescription('Speel muziek.')
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

		const voice_channel_id = interaction.guild.members.cache.get(interaction.member.user.id).voice.channelId

		var embed2 = new EmbedBuilder()
			.setColor("#992D22")
			.addFields(
				{ name: "AvonturiaParkMC | Muziek", value: `❌ Je moet in een **voicechannel** zitten om dit commando te gebruiken! ❌` }
			)
			.setFooter({ text: 'AvonturiaParkMC | Muziek', iconURL: 'https://i.imgur.com/E1irn4t.png' });

		const userVC = interaction.member.voice.channel;

		//Checks if the user is in a VC
		if (userVC == null) {
			interaction.reply({ embeds: [embed2] });
		} else {


			let link = await interaction.options.getString("link");
			let channel = await interaction.options.getChannel("channel");

			const voiceChannelId = voice_channel_id;
			const voiceChannel = client.channels.cache.get(voiceChannelId);
			const guildId = "869885487442173982";

			const player = createAudioPlayer();

			const resource = createAudioResource(link);
			player.play(resource);

			player.on(AudioPlayerStatus.Idle, () => {
				setTimeout(() => subscription.unsubscribe);
				connection.destroy();
			});

			const connection = joinVoiceChannel({
				channelId: voiceChannelId,
				guildId: guildId,
				adapterCreator: voiceChannel.guild.voiceAdapterCreator,
			});

			var embed1 = new EmbedBuilder()
				.setColor("#992D22")
				.addFields(
					{ name: "AvonturiaParkMC | Muziek", value: `🎵 **Begonnen** met het spelen van ${link} 🎵` }
				)
				.setFooter({ text: 'AvonturiaParkMC | Muziek', iconURL: 'https://i.imgur.com/E1irn4t.png' });

			interaction.reply({ embeds: [embed1] })

			const subscription = connection.subscribe(player);

			if (subscription) {

				setTimeout(() => subscription.unsubscribe(), 3600000);
			}
		}
	},
};