module.exports = { 
name: "حول",
  enabled: true,

  run: async (client, message, prefix) => {
  const Discord = require("discord.js")
  return message.channel.send(new Discord.MessageEmbed()
.setTitle(`** حول البوت  ** `)
.setDescription(` **
بوت العاب عربي با اوامر جميله 
البوت امن 
البوت ب الغه العربيه 

-

مبرمجين البوت 

-

name : HaiDer .#0056

**

[Link Invite Bot](https://discordapp.com/api/oauth2/authorize?client_id=719912472903155814&permissions=19107698478&scope=bot)
`)
.setColor("#2f3136")
.setFooter(`Developer: HaiDer`)
)
}}