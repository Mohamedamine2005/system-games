module.exports = { 
name: "bot",
  ownerOnly: true,
  enabled: true,
  cooldown: 5,
  run: async (client, message, prefix) => {
  const Discord = require("discord.js")
  return message.channel.send(new Discord.MessageEmbed()
.setTitle(`** Info Bot  ** `)
.setDescription(` **
Server Bot : ${client.guilds.cache.size}
channels Bot : ${client.channels.cache.size}
Users Bot : none

**
`)
.setColor("#2f3136")
.setFooter(`Developer: HaiDer`)
)
}}