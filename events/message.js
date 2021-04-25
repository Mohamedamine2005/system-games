const config = require("../config.json")

module.exports = async (client, message) => {

const { Database } = require("quickmongo");
const db = new Database(config.MongoDB)
const { MessageEmbed, Collection } = require("discord.js");

if (message.author.bot) return;
if (message.channel.type === "dm") return;
let prefix = config.prefix
  if (message.content.startsWith(prefix)) {
    const args = message.content
      .slice(prefix.length)
      .trim()
      .split(/ +/);
    const command = args.shift().toLowerCase();
  if (!message.guild.member(client.user).hasPermission("SEND_MESSAGES")) return;
   if (message.client.commands.has(command))
    cmdFile = message.client.commands.get(command);

  if (!cmdFile.enabled)
    return await message.channel.send("This command is disabled");

  if (cmdFile.ownerOnly && !config.owners.includes(message.author.id)
  )
    return await message.channel.send("This command for ownerOnly.");


//           timestamps.set(message.author.id, now);
//   setTimeout(() => timestamps.delete(message.author.id), cooldownAmount);
	

   // if (!message.guild.member(client.user).hasPermission("VIEW_CHANNELS")) return;
  
   if (!client.commands.has(command)) return;
    try {
      client.commands.get(command)
      .run(client, message, args, db, prefix);


    } catch (error) {
      console.error(error);
    }
  }
};