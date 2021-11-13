const { Client, Intents } = require('discord.js');
const client = new Client({ intents: [Intents.FLAGS.GUILDS] });
const token = "OTA4NDE4NjU5MzI2NzU0ODE2.YY1czQ.sP9hlJu44T9OqJz53OG31lrUMsE"

client.once('ready', () => {
   console.log("Félicitations, votre bot Discord a été correctement initialisé !");
});

// COMMANDE !test
client.on("message", message => {
    if(message.content === "!test") {
        message.channel.send("**1**")
        message.channel.send("||2||")
        message.channel.send("3")
    }
});
// COMMANDE !test
// COMMANDE !cmd
client.on("message", message => {
    if(message.content === "!cmd") {
        message.channel.send("__Les commandes disponibles sont :__")
        message.channel.send("**!niveau** : Affiche le niveau de certification de la formation.")
        message.channel.send("**!temps** : Affiche la durée de la formation.")
        message.channel.send("**!ping** : Joue au Ping-Pong ?")
    }
})
// COMMANDE !ping
client.on("message", message => {
    if (message.content === "!ping") {
      message.channel.send("Pong.")
    }
  });
// COMMANDE !ping
// COMMANDE !niveau
client.on("message", message => {
    if (message.content ==="!niveau") {
        message.channel.send("La formation est passé en Niveau 6 (Bachelor Bac +3).")
    }
});
// COMMANDE !niveau
// COMMANDE !temps
client.on("message", message => {
    if(message.content === "!temps") {
        message.channel.send("La formation est prévu pour finir en Mai/Juin !")
    }
});
// COMMANDE !temps


client.login(process.env.TOKEN);