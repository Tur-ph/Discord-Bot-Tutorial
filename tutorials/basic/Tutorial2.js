const discord = require('discord.js');
const client = new discord.Client();

client.login(BOT TOKEN);

client.on('message', message => {
  if(message.content.startsWith('!ping') {
    message.reply('Pong!');
});

// If you do not understand what any of this means please go back to tutorial 1 and read it over without skipping any details!

// In this tutorial we will be adding arguments into the commands! This is extremely useful for Moderation Commands!

// First we need to make a message event! To do so we can do this:

client.on('message', message => {
  // Now let's add a "args" variable
  const args =
  // We now need to get the contents of the message, we can do this by writing "message.content"
  const args = message.content
  
  // Now we slice the prefix off the command! To do so we can simply make a prefix variable!
  const prefix = '!';
  const args = message.content.slice(prefix.length)
  
  // Now, we need to split it all up by a space, doing so will allow us to calculate the amount of args
  const prefix = '!';
  const args = message.content.slice(prefix.length).split(' ');
  
  // Now, that is the main body of the arguments done! If you want you can skip this next part, but I recommend you do not. It's for shorten commands
  
  // Now we have the arguments variable defined, we can now start making the commands or "cmds" variable!
  // To start off, we need to move all the arguments over by 1, we can do this by writing:
  const cmds = args.shift()
  
  // Now we can quickly make sure the cmds variable is in lower case! This is an easy function to do:
  const cmds = args.shift().toLowerCase();
  
  // Now that is done, we can move onto th different types of "if" statements you can use:
  
    // First option: SWITCH
      // I do not use switch personally but it's up to you what you decide, you'd set it up like:
      switch(cmds) {
        case(ping):
          message.reply('Pong!')
          break;
      }
  
      // To start of with, the switch function stores a variable. The "case" statements check the variable
  
    // Second option: IF
      // I use this one because I find it the easiest and most coding languages use the "if" statement, it's set up like:
    if(cmds.toLowerCase() === 'ping') {
      message.reply('Pong!')
    };
  
    // The "if" statement is much simpler and easier than the switch statement so that's why I use it.
});
