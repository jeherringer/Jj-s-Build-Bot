/* WANTED FEATURES:

    - SUGGEST ABILITIES/DISCS/CLASSES FOR VARIOUS BUILD TYPES
        -CC
        -DPS
        -HEAL
        -DEBUFF
        -AREA CONTROL
        -TANK
        -SUPPORT
    
    - BE ABLE TO NAME, SAVE, STORE, AND DISPLAY BUILDS
    - DISPLAY TOOLTIP INFO OF ALL ABILITIES
*/


const Commando = require("discord.js-commando");
const bot = new Commando.Client();
const TOKEN = "NTUyOTg4Mzk0NzMzNTY4MDAw.D2HicA.io_gVhWD54lEiLEwUFXElCBk0yQ";
const express = require('express')
const bodyParser = require('body-parser')
const app = express()
const port = 3000
const db = require('/_Applications/buildBot/queries')

global.client = Commando;

app.use(bodyParser.json())
app.use(
  bodyParser.urlencoded({
    extended: true,
  })
);

app.get('/', (request, response) => {
    response.json({ info: 'Node.js, Express, and Postgres API' })
  });

app.listen(port, () => {
    console.log(`App running on port ${port}.`)
});

app.get('/cf_abilities/:name', db.query);


bot.registry.registerGroup("abilitytooltip", "abilitytooltip");
bot.registry.registerGroup("abilitysuggestion", "abilitysuggestion");
bot.registry.registerDefaults();
bot.registry.registerCommandsIn(__dirname + "/commands");

bot.on("message", function(message){
    if (message.content == "Hello")
    {
        message.reply("Hello, how are you?");
    }
});

bot.login(TOKEN);