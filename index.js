const {Client, GatewayIntentBits, Routes, Collection, EmbedBuilder } = require("discord.js");
const Discord = require('discord.js')
const config = require("./config.json");
const fs = require("node:fs");
const path = require('node:path')
const { REST } = require("@discordjs/rest");

const client = new Client({
    intents: [
        GatewayIntentBits.GuildVoiceStates,
        GatewayIntentBits.Guilds,
        GatewayIntentBits.GuildMessages,
        GatewayIntentBits.MessageContent,
        GatewayIntentBits.GuildMembers,
]});
client.commands = new Collection();
const slashCommands = [];

const { ActivityType } = require("discord.js");

client.on("ready", () => {
  console.log(`Logged in as ${client.user.tag}!`);

  client.user.setActivity("AvonturiaParkMC", {
    type: ActivityType.Watching,
  });
    let guildId = config.guildID;
    let clientId = config.clientID;
    let token = process.env.token
;

    const rest = new REST({version: 10}).setToken(token);

    rest.put(Routes.applicationGuildCommands(clientId, guildId), { body: slashCommands })
	.then(data => console.log(`Successfully registered ${data.length} application commands.`))
	.catch(console.error);

})

//autocomplete
client.on('interactionCreate', async (interaction) => {
  // check if the interaction is a request for autocomplete
  if (interaction.isAutocomplete()) {
      // respond to the request
      interaction.respond([
          {
              // What is shown to the user
              name: 'BBC',
              // What is actually used as the option.
              value: 'https://stream.live.vc.bbcmedia.co.uk/bbc_radio_one'
          },
          {
            // What is shown to the user
            name: 'RADIO538',
            // What is actually used as the option.
            value: 'http://playerservices.streamtheworld.com/api/livestream-redirect/RADIO538.mp3'
        },
        {
          // What is shown to the user
          name: 'Qmusic',
          // What is actually used as the option.
          value: 'https://stream.qmusic.nl/qmusic/mp3'
      },
      {
        // What is shown to the user
        name: 'SLAM! top40',
        // What is actually used as the option.
        value: 'https://stream.slam.nl/web14_mp3'
    },
          {
        // What is shown to the user
        name: 'SLAM! Hardstyle',
        // What is actually used as the option.
        value: 'http://streaming.slam.nl/web11_mp3'
    }
      ]);
  }
});
//command handler
const commandsPath = path.join(__dirname, 'slashCommands');
const commandFiles = fs.readdirSync(commandsPath).filter(file => file.endsWith('.js'));

for (const file of commandFiles) {
	const filePath = path.join(commandsPath, file);
	const command = require(filePath);
	// Set a new item in the Collection
	// With the key as the command name and the value as the exported module
	client.commands.set(command.data.name, command);
    slashCommands.push(command.data.toJSON());

    console.log(`De file ${command.data.name}.js is geladen`);
}

client.on('interactionCreate', async interaction => {
	if (!interaction.isChatInputCommand()) return;

	const command = interaction.client.commands.get(interaction.commandName);

	if (!command) return;

	try {
		await command.execute(client,interaction);
	} catch (error) {
		console.error(error);
		await interaction.reply({ content: 'Er was een probleem bij het uitvoeren van het commando.', ephemeral: true });
	}
});

client.login(process.env.token
);