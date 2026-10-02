import { REST, Routes } from 'discord.js';
import commands from '#commands';
import env from '#env';

const token = env.DISCORD_TOKEN;
const clientId = env.CLIENT_ID;

const rest = new REST().setToken(token);

const commandsData = commands.map((command) => command.data.toJSON());

(async () => {
    try {
        const data = (await rest.put(
            Routes.applicationCommands(clientId),
            { body: commandsData },
        )) as Array<unknown>;

        console.log(`Successfully registered ${data.length} application commands.`);
    } catch (error) {
        console.error(error);
    }
})();