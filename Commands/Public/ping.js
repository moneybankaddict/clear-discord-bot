const { SlashCommandBuilder, CommandInteraction, EmbedBuilder, PermissionFlagsBits } = require('discord.js');

module.exports = {
    data: new SlashCommandBuilder()
    .setName("ping")
    .setDescription("Ping le bot...")
    .setDefaultMemberPermissions(PermissionFlagsBits.Administrator),
    
    async execute(interaction, client) {
        const tryPong = await interaction.reply({
            content: "Ping en cours...",
            fetchReply: true
        });

        const embed = new EmbedBuilder()
            .setTitle("Pong!  🏓")
            .setThumbnail(client.user.displayAvatarURL())
            .addFields(
                {
                    name: "**Latence API**",
                    value: `\`\`\`${client.ws.ping}ms\`\`\``,
                    inline: true
                },
                {
                    name: "**Latence BOT**",
                    value: `\`\`\`${tryPong.createdTimestamp - interaction.createdTimestamp}ms\`\`\``,
                    inline: true
            })
            .setTimestamp()
            .setFooter({
                text: interaction.user.username,
                iconURL: interaction.user.displayAvatarURL(),
            });

        interaction.editReply({ content: ' ', embeds: [embed] });
    }
}