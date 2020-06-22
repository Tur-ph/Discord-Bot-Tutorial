// Hello there! I am turph and I will be trying to show you, how to SCRIPT a discord bot! First of all please watch a tutorial on youtube on how to make a discord bot in the Discord Developer Portal!

// Please make sure you have a package.json file, I am showing how to SCRIPT not how to set-up and make sure everything is fine...

// Stage 1: Requiring the Discord package and creating a "client"

const discord = require('discord.js'); // Here you simply just require the discord.js package you installed! 
const client = new discord.Client(); // This is making a client variable then adding a new discord client to it

client.login(BOT TOKEN); // Inside the brackets replace "bot token" with your bot token! This can be found on the bot page in the developer portal; make sure the token is in either speech marks or quotation marks

// Now with them 3 places of code, your bot should be ONLINE! Congratulations, you have successfully put your first discord bot online!

// This is really good however, it doesn't do anything, it doesn't do anything! Let's add a simple message command! This will detect if the message starts with "!ping" then it will reply with pong!

// We can start it off by making an event listener, this is very easy

client.on('message', message => {
  // First, when the client is on, your listen for messages, with the parameter message. This simply means the when you say something in a text channel, the message parameter will be the message you sent!
  
  // Now, let's detect if the message starts with "!ping":
  
  if(message.content.startsWith('!ping') {  // We can start by creating a simple "if" statement, this is saying: if the message starts with "!ping" then run what is inside the { } brackets!
    message.reply('Pong!');  // This line will make it so the bot sends a message tagging the user then say "Pong!" after the user is tagged!
  }
});

// Once you have mastered this you are ready to move onto Tutorial2.js || This will go into more detail about commands and setting
