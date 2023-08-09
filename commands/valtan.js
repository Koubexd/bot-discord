const { SlashCommandBuilder, EmbedBuilder } = require("discord.js")


const exampleEmbed = new EmbedBuilder()
	.setColor("Orange")
	.setTitle("grupo Valtan")
	.addFields(
        { name: '\u200B', value: '\u200B' },
		{ name: ' Nome:xxx', value: 'classe:xxx', inline: true },
		{ name: ' Nome:xxx', value: 'classe:xxx', inline: true },
		{ name: '\u200B', value: '\u200B' },
		{ name: ' Nome:${nome}', value: 'classe:xxx', inline: true },
		{ name: ' Nome:xxx', value: 'classe:xxx', inline: true },
        { name: '\u200B', value: '\u200B' },
		{ name: ' Nome:xxx', value: 'classe:xxx', inline: true },
		{ name: ' Nome:xxx', value: 'classe:xxx', inline: true },
        { name: '\u200B', value: '\u200B' },
		{ name: ' Nome:xxx', value: 'classe:xxx', inline: true },
		{ name: ' Nome:xxx', value: 'classe:xxx', inline: true },
      

	)
	.setImage('https://api.boosthive.eu/media/image/1c/be/aed3ac702b10bf3dd14dc133a825.jpeg')
	

module.exports = {
    data: new SlashCommandBuilder()
        .setName("valtan")
        .setDescription("grupo Valtan"),

    async execute(interaction) {
        await interaction.reply({ embeds: [exampleEmbed] })
    }
}