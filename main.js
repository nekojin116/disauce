// Made by : @8kbKiwi //
// Entry point file  //

require('dotenv').config();

const fs = require('fs');
const http = require('http');

const Discord = require('discord.js');
const client = new Discord.Client({ "intents": "GUILDS" });

const embeds = {
    pleaseWait: new Discord.MessageEmbed()
        .setColor('#0099ff')
        .setTitle('Please wait...')
        .setDescription('This may take a while...'),
}

/** @type {Discord.Interaction[]} */
var queue = [];


client.on("ready", () => {
    logger(`Logged in as ${client.user.tag}`, 'info');
    // Fetch remote commands and compare them to local commands

});

client.on('interactionCreate', async (interaction) => {
    if (interaction.type != 'APPLICATION_COMMAND') return;
    const { guild, channel, author, member, message } = interaction;
    interaction.reply(embeds.pleaseWait);
});


client.login(process.env.TOKEN);



/**
 * 
 * @param {string} message 
 * @param {"info"|"warn"|"error"} type 
 */
function logger(message, type) {
    const date = new Date();
    const time = `${date.getHours()}:${date.getMinutes()}:${date.getSeconds()}`;
    const log = `[${time}] [${type.toUpperCase()}] ${message}`;
    console.log(log);
    fs.appendFileSync('./main.log', log + '\n');
}