const { interactionType } = require("discord.js");
const { execute } = require("./slashCommands/speel");

module.exports = {
    name: "interactionCreate",
    async execute(interaction, client) {
        if (interaction.type = interactionType.ApplicationCommandAutocomplete) {
            const { commands } = client;
            const { commandName } = interaction;
            const command = commands.get(commandName);
            if (!command) return;

            try {
                await command.autocomplete(interaction, client);
            } catch (err) {
                console.error(error);
            }
        }
    }
}