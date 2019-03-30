const commando = require("discord.js-commando");
const Pool = require('pg').Pool
const pool = new Pool ({
  user: 'jeherringer',
  host: 'localhost',
  database: 'cf_abilities',
  password: 'xxtgwsmztsb',
  port: 5432,
})




class abilityToolTip extends commando.Command 
{
    constructor(client)
    {
        super(client, {
            name: "abilityinfo",
            group: "abilitytooltip",
            memberName: "abilityinfo",
            description: "displays tooltip information of selected abilites. i.e: !abilityinfo Angel of Death",
        });
    }

    async run (message, args) {
        
        function query(request, response) {
            pool.query('SELECT name, type, category, description, targeting, cooldown, range, discipline FROM disc_abilities WHERE name = (?)', [args], (error, results) => {
            console.log(results.rows[0]);
            thisAbilityInfo = 
               [
               JSON.stringify(results.rows[0].name),
               JSON.stringify(results.rows[0].type),
               JSON.stringify(results.rows[0].category),
               JSON.stringify(results.rows[0].description),
               JSON.stringify(results.rows[0].targeting),
               JSON.stringify(results.rows[0].cooldown),
               JSON.stringify(results.rows[0].range),
               JSON.stringify(results.rows[0].discipline)
               ]
        });
    }

        function displayInfo() {
            message.reply("\n" + 'Name: ' + results.rows[0].name + "\n" + 'Type: ' + results.rows[0].type + "\n" + 'Category: ' + results.rows[0].category + "\n" + 'Description: ' + 
            results.rows[0].description + "\n" + "Targeting: " + results.rows[0].targeting + "\n" + 'Cooldown: ' + results.rows[0].cooldown + "\n" + 'Range: ' + results.rows[0].range
            + "\n" + 'Discipline: ' + results.rows[0].discipline);
            }
        

        setTimeout(displayInfo, 1000);

        module.exports.query = query
        
    };
        
    
};

module.exports = abilityToolTip;









