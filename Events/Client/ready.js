const { Client, ActivityType } = require("discord.js");

module.exports = {
    name: "ready",
    once: true,
    execute(client) {
        client.user.setStatus('idle');
        //client.user.setActivity({name: "hi-c", type: ActivityType.Listening});

        console.log(`Logged: ${client.user.tag}`);
    },
};