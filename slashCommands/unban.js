const { SlashCommandBuilder, EmbedBuilder, Embed, PermissionFlagsBits } = require('discord.js');

module.exports = {
	category: "information",
	data: new SlashCommandBuilder()
		.setName('unban')
		.setDescription('Unban een gebruiker.')
        .setDefaultMemberPermissions(PermissionFlagsBits.BanMembers)
        .addStringOption(option =>
                option.setName('id')
                .setDescription("Geef een id op.")
                .setRequired(true)),
	async execute(client, interaction) {

        let id = await interaction.options.getString("id");

        let member;

        var embed1 = new EmbedBuilder()
        .setTitle("AvonturiaParkMC | Ban")
		.setColor("#992D22")
        .addFields(
            {name: "**Unban**", value: `U bent geunbanned van onze discord server \n\n U kunt weer deelnemen via de onderstaande link. \nhttps://discord.io/avonturiaparkmc`}
        )
        .setFooter({ text: 'AvonturiaParkMC | Informatie', iconURL: 'https://i.imgur.com/E1irn4t.png'});

        var embed3 = new EmbedBuilder()
        .setTitle("AvonturiaParkMC | Ban")
        .setColor("#992D22")
        .addFields(
            {name: "**Mislukt.**", value: `Deze gebruiker is niet gebanned.`}
        )
        .setFooter({ text: 'AvonturiaParkMC | Informatie', iconURL: 'https://i.imgur.com/E1irn4t.png'});

        client.users.fetch((id), false).then((user) => {
            user.send({embeds: [embed1] });
           });

        let bans = await interaction.guild.bans.fetch();

        if(bans.has(id)) member = bans.get(id);
        else return interaction.reply({embeds: [embed3]})

        await interaction.guild.members.unban(id);

        var embed2 = new EmbedBuilder()
        .setColor("#992D22")
        .setDescription(`**Member** ${member.user.tag} (${member.user.id})\n**Actie:** Unban`)
        .setTimestamp();

        var embed4 = new EmbedBuilder()
        .setTitle("AvonturiaParkMC | Ban")
        .setColor("#992D22")
        .addFields(
            {name: "**Succes!**", value: `${member.user.tag}  is unbanned.`}
        )
        .setFooter({ text: 'AvonturiaParkMC | Informatie', iconURL: 'https://i.imgur.com/E1irn4t.png'});

        interaction.reply({embeds: [embed4]});

        await interaction.guild.channels.cache.find(c => c.name.toLowerCase() == "log").send({embeds: [embed2] });
		
	},
};
