const { Client, Events, GatewayIntentBits, Collection } = require('discord.js');

const dotenv = require('dotenv');
dotenv.config()
const { TOKEN, CLIENTE_ID,GUILD_ID}=process.env

//importação dos comandos
const fs = require("node:fs")
const path = require("node:path")

const commandsPath = path.join(__dirname,"commands")
const commandsFiles = fs.readdirSync(commandsPath).filter(file =>file.endsWith(".js"))

const client = new Client({ intents: [GatewayIntentBits.Guilds] });
client.commands = new Collection()

for(const file of commandsFiles){
    const filePath = path.join(commandsPath, file)
    const command = require(filePath)
    if("data" in command && "execute" in command){
        client.commands.set(command.data.name, command)
    }else {
        console.log(`esse comando em ${filePath} está com "data" ou "execute" ausente`);
    }
}


client.once(Events.ClientReady, c => {
	console.log(`Pronto! Login realizado como ${c.user.tag}`);
});


client.login(TOKEN);

client.on(Events.InteractionCreate,async interaction =>{
    if( !interaction.isChatInputCommand()) return
    const command = interaction.client.commands.get(interaction.commandName)
    if(!command){
        console.log("comando não encotrado")
        return
    }
    try{
        await command.execute(interaction)
    }
    catch(error){
        console.error(error)
        await interaction.reply("Houve um erro ao executar o comando")
    }
})