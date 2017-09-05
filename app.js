const Discord = require('discord.js'); //Discord Package
const bot = new Discord.Client(); // The Client
const prefix = ('..') //The prefix


bot.on('ready', (message) => {
  console.log("Bot Launched")
  bot.user.setPresence({ game: { name: `..help | ${bot.users.size} Users!`, type: 0 } })
});


//Makes the bot respond
bot.on('message', (message) => {

  if(message.author.bot) return;
if(message.channel.type == 'dm') {
  return message.channel.send(":smirk: **| Sorry, I am unable to respond in DMs!**")
}



    var sender = message.author; //The
    var msg = message.content.toUpperCase(); //Takes the message

    //Ping - Gives you the speed of your ping.
        if (msg === prefix + 'PING') {
         const embed = new Discord.RichEmbed()
         .setColor('0x33cc33')
         .setTitle("Pong!")
         .addField(`Your ping is: `,`${bot.ping}`)
         message.channel.send({embed});
         }

        //When doing "@Screwie prefix" it replies with the prefix
    if(message.content == '<@353997369769197569>' + ' prefix') {
        message.channel.send("The prefix is: " + `**${prefix}**`);
    }

         //Membercount - Tells you how many players are in that specific server.
         if (message.content.startsWith(prefix + 'membercount')) {
           var guild = message.guild;
           const embed = new Discord.RichEmbed()
           .setColor('0x33cc33')
           .setTitle("Player Count")
           .addField(`Total member count: `,`${guild.memberCount}`)
           message.channel.send({embed});
           }


           //Support - gives you an invite link to the support server of the bot.
             if (msg === prefix + 'SUPPORT') {
               const embed = new Discord.RichEmbed()
               .setColor('0x0099ff')
               .setTitle(":mailbox_with_mail:")
               .addField(`Support Server:`,`https://discord.gg/yNRwMjg`)
               message.channel.send({embed});
             }


         //About - Gives the player a description about what the bot is about.
             if (msg === prefix + 'ABOUT') {
              const embed = new Discord.RichEmbed()
              .setColor('0x0099ff')
              .setTitle(":notebook_with_decorative_cover:")
              .addField(`About the Devs`,`Screwie is a new bot developed by TheSlimyBroYT#3016 & xDev#0333 & BoomBangsGames#5378. They were inspired to create something big and worth while. Screwie is a new bot to society and is improving by the minute. Currently there are only a few commands, but overtime, more will be added! We are open to suggestions as it will help the growth of the bot. Join our support server via ..support!`)
              message.channel.send({embed});
              }

        //Invite - gives you an invite link to invite the bot to your server.
          if (msg === prefix + 'INVITE') {
            const embed = new Discord.RichEmbed()
            .setColor('0xff9900')
            .setTitle(":mailbox_with_mail:")
            .addField(`Invite link:`,`https://discordapp.com/oauth2/authorize?client_id=353997369769197569&scope=bot&permissions=2146958591`)
            message.channel.send({embed});
          }

        //Userinfo - Gives you the specified user's information.
         if (message.content.startsWith(prefix + 'userinfo')) {
          if(message.mentions.users.size === 0) {
            return message.channel.sendMessage("**You need to mention a user! :bangbang:**").catch(console.error);
        }
          if(message.mentions.users.size > 1) {
              return message.channel.sendMessage("**You can only mention one user at a time! :anger:**").catch(console.error)
              }
              const embed = new Discord.RichEmbed();
              embed.setTitle(`**__User Info__**`)
              .setColor('0xcc00cc')
              .addField(`**This is the main user information for**`,`${message.mentions.users.first()}!`)
              .addField(`Name and Discrim`,`${message.mentions.users.first().username}#${message.mentions.users.first().discriminator}`)
              .addField(`Account created at`,`${message.mentions.users.first().createdAt}`)
              .addField(`Account ID`,`${message.mentions.users.first().id}`)
              message.channel.send({embed});
              }


          //Upvote - Gives the player a link to upvote the bot.
            if (msg === prefix + 'UPVOTE') {
              const embed = new Discord.RichEmbed()
              .setColor('0x00cc99')
              .setTitle(":chart_with_upwards_trend:")
              .addField(`Support Screwie by upvoting us!:`,`https://discordbots.org/bot/353997369769197569`)
              message.channel.send({embed});
            }




         //Help - DMs the player a help menu
         if (msg === prefix + 'HELP') {
        message.channel.send("Check your DMs for the help menu!")
          const embed = new Discord.RichEmbed()
          .setColor('0x0033cc')
          .setTitle("Help Menu\n")
          .addField(`Commands:`,`**..help -** Displays this help message.\n**..ping -** Sends you the MS it took to ping the bot!\n**..invite -** Gives you a link to invite the bot to your server!\n**..refresh -** Refreshes the playing status on the bot.\n**..about -** Gives a description of the bot!\n**..membercount -** Gives you the total amount of players on the server.\n**..support -** Gives you an invite link to the support server of the bot.\n**..upvote -** Gives you a link to support us by upvoting us!\n**..userinfo <@User> -** Gives you the main player information for that specified player.`)
          message.author.send({embed});
          }

          //Refresh
          if (message.content.startsWith(prefix + 'refresh')) {
              message.channel.send('The playing status has been refreshed!')
              bot.user.setPresence({ game: { name: `..help | ${bot.users.size} Users!`, type: 0 } })
          }
          });





















bot.login('MzUzOTk3MzY5NzY5MTk3NTY5.DI4YQg.FL4iP3vfCKT3j0q_Egz80z4AA7U');
