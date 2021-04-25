module.exports = async (client, message) => {
console.log("App Connected! " , client.user.tag)
  console.log(`On ${client.guilds.cache.size} Servers`);  console.log(`On ${client.users.cache.size} user 
  channels Bot : ${client.channels.cache.size}
`);

const config = require("../config.json")
const prefix = config.prefix
client.user.setActivity(` Servers ${client.guilds.cache.size} | ${prefix}help`);
}