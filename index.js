var Discord = require("discord.js");
var AuthDetails = require("./auth.json");
var getCompStats =  require('./src/getCompStats');

function handleMessage(message) {
  var parts = message.content.split(/\s/);
  if (parts[0] === '!jaredbot') {
    getCompStats('TheAxelrod-1235').then((s)=>{
      let str = `Jared is currently ${s.tier} with ${s.comprank} SR. His win rate is ${s.win_rate}%.`;
      bot.reply(message, str);
    }).catch(function (error) {
      bot.reply(message, error.message);
    });
  }
};

var bot = new Discord.Client();

bot.on("ready", function() {
	console.log('Ready to begin! Serving in '+bot.channels.length+' channels');
  // http://discordjs.readthedocs.io/en/latest/docs_client.html#updatedetails-details-callback
  bot.updateDetails({
    username: "Jaredbot"
  }, function(err) {
    if (err) throw err;
  });
});

bot.on("message", handleMessage)

bot.on("disconnected", function() {
	console.log("Disconnected!");
	process.exit(1);
});

bot.loginWithToken(AuthDetails.token);

// https://discordapp.com/oauth2/authorize?client_id=193879111452721152&scope=bot&permissions=19456
