const { SlashCommandBuilder, EmbedBuilder } = require("discord.js")

const exampleEmbed = new EmbedBuilder()
	.setColor("Orange")
	.setTitle("grupo Valtan")
	.addFields(
        { name: '\u200B', value: '\u200B' },
		{ name: ' Nome:xxx', value: 'classe:xxx', inline: true },
		{ name: ' Nome:xxx', value: 'classe:xxx', inline: true },
		{ name: '\u200B', value: '\u200B' },
		{ name: ' Nome:xxx', value: 'classe:xxx', inline: true },
		{ name: ' Nome:xxx', value: 'classe:xxx', inline: true },
        { name: '\u200B', value: '\u200B' },
		{ name: ' Nome:xxx', value: 'classe:xxx', inline: true },
		{ name: ' Nome:xxx', value: 'classe:xxx', inline: true },
        { name: '\u200B', value: '\u200B' },
		{ name: ' Nome:xxx', value: 'classe:xxx', inline: true },
		{ name: ' Nome:xxx', value: 'classe:xxx', inline: true },
      

	)

module.exports = {
    data: new SlashCommandBuilder()
        .setName("valtan")
        .setDescription("grupo Valtan"),

    async execute(interaction) {
        await interaction.reply({ embeds: [exampleEmbed] })
    }
}