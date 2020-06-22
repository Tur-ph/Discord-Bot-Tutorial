const discord = require('discord.js');
const client = new discord.Client();

client.login(BOT TOKEN);

client.on('message', message => {
  if(message.content.startsWith('!ping') {
    message.reply('Pong!');
});

// If you do not understand what any of this means please go back to tutorial 1 and read it over without skipping any details!
