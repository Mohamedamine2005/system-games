module.exports = {
    name: "invite",  
      enabled: true,
aliases: "inv",
     run: async (client, message, prefix) => {   
  const Discord = require("discord.js") 
    return message.channel.send(new Discord.MessageEmbed() 
  .setDescription(` **  

   Link Bot Invite  : [Link Bot](https://discord.com/api/oauth2/authorize?client_id=719912472903155814&permissions=8&scope=bot)

    
       ** 
        `) 
.setColor("#2f3136") 
.setFooter(`Developer: HaiDer`)

)
 }}