const { SlashCommandBuilder, EmbedBuilder, Embed, PermissionFlagsBits } = require('discord.js');

module.exports = {
	category: "information",
	data: new SlashCommandBuilder()
		.setName('ban')
		.setDescription('Ban een gebruiker.')
        .setDefaultMemberPermissions(PermissionFlagsBits.BanMembers)
        .addUserOption(option =>
            option.setName('user')
            .setDescription("Geef een gebruiker op.")
            .setRequired(true))
            .addStringOption(option =>
                option.setName('reden')
                .setDescription("Geef een reden op.")
                .setRequired(true)),
	async execute(client, interaction) {

        let member = await interaction.options.getMember("user");
        let reason = await interaction.options.getString("reden");

        var embed1 = new EmbedBuilder()
        .setTitle("AvonturiaParkMC | Ban")
		.setColor("#992D22")
        .addFields(
            {name: "**Verbannen**", value: `U bent verbannen van onze discord server \n\n **Reden:** ${reason} \n\n Bent u het niet eens met deze ban? Dan kunt u het onderstaande formulier invullen. \nhttps://forms.gle/5qjv1s25vmvUd4ua8`}
        )
        .setFooter({ text: 'AvonturiaParkMC | Informatie', iconURL: 'https://i.imgur.com/E1irn4t.png'});

        var embed3 = new EmbedBuilder()
        .setTitle("AvonturiaParkMC | Ban")
        .setColor("#992D22")
        .addFields(
            {name: "**Letop!**", value: `Deze persoon heeft zijn/haar prive berichten niet aanstaan.`}
        )
        .setFooter({ text: 'AvonturiaParkMC | Informatie', iconURL: 'https://i.imgur.com/E1irn4t.png'});

        await member.send({embeds: [embed1] }).catch(() =>{
            interaction.channel.send({embeds: [embed3]})
        });

        await member.ban({ days: 0, reason: reason });

        var embed2 = new EmbedBuilder()
        .setColor("#992D22")
        .setDescription(`**Member** ${member.user.tag} (${member.user.id})\n**Actie:** Ban\n**Reden**: ${reason}`)
        .setTimestamp();

        var embed4 = new EmbedBuilder()
        .setTitle("AvonturiaParkMC | Ban")
        .setColor("#992D22")
        .addFields(
            {name: "**Succes!**", value: `${member.user.tag} is verbannen. ID: ${member.user.id}`}
        )
        .setFooter({ text: 'AvonturiaParkMC | Informatie', iconURL: 'https://i.imgur.com/E1irn4t.png'});

        await interaction.reply({embeds: [embed4]});

        await interaction.guild.channels.cache.find(c => c.name.toLowerCase() == "log").send({embeds: [embed2] });
		
	},
};
