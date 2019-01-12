const http = require('http');
const express = require('express');
const app = express();
app.get("/", (request, response) => {console.log(Date.now() + "Ping recived!");
response.sendStatus(200);});
app.listen(process.env.PORT);
setInterval(() => {http.get(`http://${process.env.PROJECT_DOMAIN}.glitch.me/`);},
280000);
//NOT TOUCH

const Discord = require('discord.js');
const client = new Discord.Client();


client.on("ready", async () => {
    console.log(`${client.user.tag}!`);
});

client.on("message", async (msg) => {
  //CUSTOM CODE HERE
});


//PASTE YOUR TOKEN IN ".env" 
client.login(process.env.TOKEN);