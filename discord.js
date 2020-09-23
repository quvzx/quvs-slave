const Discord = require('discord.js');
const client = new Discord.Client();

client.on('ready', () => {
  console.log(`Logged in as ${client.user.tag}!`);
});

client.on('message', msg => {
  if (msg.content === 'hello') {
    msg.reply('hello');
  }
});

client.on('message', msg => {
  if (msg.content === 'ayo') {
    msg.reply('ayoo');
  }
});

client.login('NzU3OTU4ODUwMTQ5MjIwNDIz.X2n-MA.iUW3A9KrhSgrOLKoSkG0FOt2pbg');