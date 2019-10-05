console.clear()
const Discord = require('discord.js')
const chalk = require('chalk')
const fs = require('fs');
const mkdirp = require('mkdirp');
var nitro = new Discord.Client();
var sleep = require('system-sleep');
var readline = require('readline');
var tm = readline.createInterface(process.stdin, process.stdout);


// BOT TOKEN
nitro.login("");


// Advertising message [\nFor jumping a line]
messagetsend = ("")


// SPEED
timeout = 100
// 100 =  10  Per Second
// 1000 = 1   per Second
// 2000 = 0.5 per Second



nitro.on('ready', () => {
   console.log(`Global stats : \n\nThe bot have a total of ${nitro.guilds.size} servers. \nFor a total of ${nitro.users.size} users. \n\nMessage :\n\u001b[31m${messagetsend}\u001b[0m\n\n\n `)
   tm.question('\u001b[0mPress \u001b[32mENTER \u001b[0mto launch MassDM\n\n', (answer) => {
      dmed = "0"
      nitro.users.forEach((member) => {
         dmed++
         sleep(timeout);
         member.send(messagetsend).catch(O_o => {})
         console.log("\u001b[31m[" + dmed + "/" + nitro.users.size + "]\u001b[37m Messager send to \u001b[31m" + member.username + "#" + member.discriminator)
         if (dmed == nitro.users.size) {
            console.log("\u001b[32mTheorical DM Sucesfully Finished\nLet the software run 10 Minutes more to be sure everyone got DM.")
         }
      })
   })
})




process.on("unhandledRejection", error => {

      if (error) {
         console.log("Invalid or Suspended token by discord.")
      } else {
         console.error(error);
      }
   
});
