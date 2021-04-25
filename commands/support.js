module.exports = { 
name: "support",
  enabled: true,
aliases: "sup",

  run: async (client, message, prefix) => {
  const Discord = require("discord.js")
  return message.channel.send(new Discord.MessageEmbed()
.setDescription(` **

 Link Bot Support  : [Server Support](https://discord.gg/CzGtvVGPJS)

 


 ** 
`)
.setColor("#2f3136")
.setFooter(`Developer: HaiDer`)
)
}}