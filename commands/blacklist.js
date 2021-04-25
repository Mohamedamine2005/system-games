/*module.exports = { 
name: "blacklist",execute: async (message, args, db, prefix) => {
const Discord = require("discord.js");
const { OWNER } = require('../config.json')

if(!OWNER.includes(message.author.id)) return message.channel.send(new Discord.MessageEmbed()
.setDescription("You cant bro").setColor("#00BFFF")) 
  let user_black = message.mentions.users.first()
  if(!user_black) return message.channel.send("Make mention next time")
    let on_or_off = await db.get(`blacklist_${user_black.id}`);
  message.channel.send(new Discord.MessageEmbed().setDescription(`${user_black}'s \`${on_or_off ? "UnBlacklisted" : "BlackListed"}\``).setColor("#cf1919"));
 await db.set(`blacklist_${user_black.id}`, on_or_off ? false : true);
}}*/