module.exports = { 
name: "devs",
  enabled: true,
  cooldown: 5,

  run: async (client, message, prefix) => {
  const Discord = require("discord.js")
  return message.channel.send(new Discord.MessageEmbed()
.setTitle(`** Developer Bot || مطورين البوت ** `)
.setDescription(` **
Name : HaiDer

Tag : <@743721022238359575>

**
`)
.setColor("#2f3136")
.setFooter(`Developer: HaiDer`)
)
}}