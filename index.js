const { Client, GatewayIntentBits, Partials, Collection } = require('discord.js');

const { Guilds, GuildMembers, GuildMessages } = GatewayIntentBits;
const { User, Message, GuildMember, ThreadMember, Channel } = Partials;

const {loadEvents} = require('./Handlers/events.js');
const {loadCommands} = require('./Handlers/command.js');

const client = new Client({
    intents: [Guilds, GuildMembers, GuildMessages],
    partials: [User, Message, GuildMember, ThreadMember, Channel],
});

client.commands = new Collection();
const config = require('./config.json');

client.login(config.token).then(() => {
    loadEvents(client);
    loadCommands(client);
})