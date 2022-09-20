const { SlashCommandBuilder, EmbedBuilder, Embed, VoiceChannel, } = require('discord.js');
const { generateDependencyReport, AudioPlayerStatus, joinVoiceChannel, createAudioPlayer, createAudioResource } = require('@discordjs/voice');

module.exports = {
	data: new SlashCommandBuilder()
		.setName('stop')
		.setDescription('Stop de muziek.'),
	async execute(client, interaction) {


		const voiceChannelId = "876167153747894284";
		const voiceChannel = client.channels.cache.get(voiceChannelId);
        const guildId = "869885487442173982";

		const player = createAudioPlayer();

		const connection = joinVoiceChannel({
			channelId: voiceChannelId,
			guildId: guildId,
			adapterCreator: voiceChannel.guild.voiceAdapterCreator,
		});

		const subscription = connection.subscribe(player);

		if (subscription) {

			var embed1 = new EmbedBuilder()
			.setColor("#992D22")
			.addFields(
				{name: "AvonturiaParkMC | Muziek", value: `Muziek is gestopt met afspelen`}
			)
			.setFooter({ text: 'AvonturiaParkMC | Informatie', iconURL: 'https://i.imgur.com/qxoexbQ.jpg'});
	
			interaction.reply({ embeds: [embed1] })
			setTimeout(() => subscription.unsubscribe);
		}

		

},
};