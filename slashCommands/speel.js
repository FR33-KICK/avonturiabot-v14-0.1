const { SlashCommandBuilder, EmbedBuilder, Embed, VoiceChannel, } = require('discord.js');
const { generateDependencyReport, AudioPlayerStatus, joinVoiceChannel, createAudioPlayer, createAudioResource } = require('@discordjs/voice');

module.exports = {
	data: new SlashCommandBuilder()
		.setName('speel')
		.setDescription('Speel muziek.')
		.addStringOption(option =>
			option.setName('link')
			.setDescription("Geef de link van de muziek op. (gebruik een direct link zoals: jukehost.co.uk of google drive)")
			.setRequired(true))
	    .addChannelOption(option =>
			option.setName('channel')
			.setDescription("De channel waar de muziek moet afspelen.")
			.setRequired(true)),
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

		interaction.reply("Begonnen met spelen")

		const subscription = connection.subscribe(player);

		if (subscription) {

			setTimeout(() => subscription.unsubscribe);
		}
},
};