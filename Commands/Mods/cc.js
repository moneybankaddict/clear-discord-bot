const { SlashCommandBuilder, CommandInteraction, Client, EmbedBuilder, PermissionFlagsBits} = require("discord.js");

module.exports = {
  data: new SlashCommandBuilder()
  .setName('cc')
  .setDescription('clear les msg...')
  .addIntegerOption(option =>
		  option.setName('amount')
			.setDescription('Nombre de messages a supprimer.')
			.setRequired(true)
    )
    .setDefaultMemberPermissions(PermissionFlagsBits.Administrator),

  async execute(interaction, client) {
    const amount = interaction.options.getInteger('amount')

    if (amount > 100)
      return interaction.followUp({
          content: "Le nombre maximum de message à supprimer est 100."
      });

   const messages = await interaction.channel.messages.fetch({
     limit: amount +1,
   });

   //const filtered = messages.filter((msg) => Date.now() - msg.createdTimestamp < ms('14 days'));

   await interaction.channel.bulkDelete(messages);

   const succesEmbed = new EmbedBuilder()
   .setColor(0x32a852)
   .setTitle(":white_check_mark: cleaned!")
   .setDescription(`${messages.size - 1} messages ont été supprimés.`)

   await interaction.reply({
     embeds: [succesEmbed]
   });
   await setTimeout(() => { interaction.deleteReply() }, 3500);
  }

}