const express = require('express');
const app = express();

app.listen(() => console.log('start '));

app.use('/ping', (req, res) => {
	res.send(new Date());
});


const config = require('./config.json');

const { tokens } = require("./config.js");
const Discord = require("discord.js");
tokens.forEach(token => {


const client = new Discord.Client({
	partials: ['MESSAGE', 'CHANNEL', 'REACTION']
});	
  client.login(token);
const Topgg = require('@top-gg/sdk')
const api = new Topgg.Api('eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjcxOTkxMjQ3MjkwMzE1NTgxNCIsImJvdCI6dHJ1ZSwiaWF0IjoxNjE3MjE5MDQ0fQ.cUwlzdbqJNP9WYCBb0Xl11CuDvBui77-3Mt76WGGD2w')

client.on("message", async(message) => {
    if(message.content == "vote"){
        let voted = await api.hasVoted(message.author.id);
        if(!voted){
            return message.channel.send(new Discord.MessageEmbed()
            .setTitle(`Top.gg`)
            .setURL('https://top.gg/bot/719912472903155814/vote')
            .setDescription(`u didn't vote me!`)
            .setColor('#2f3136')
            )
        } else {
            return message.channel.send(new Discord.MessageEmbed()
            .setTitle(`Top.gg`)
            .setURL('https://top.gg/bot/719912472903155814/vote')
            .setDescription(`u vote me!`)
            .setColor('#2f3136')
            )
        }
    }
})

setInterval(() => {
  api.postStats({
    serverCount: client.guilds.cache.size,
    
  })
}, 1800000) // post every 30 minutes
const { Database } = require('quickmongo');
const db = new Database(config.MongoDB);
db.on('ready', () => {
	console.log('Database connected!');
});
client.commands = new Discord.Collection();
const { join } = require('path');
const { readdirSync } = require('fs');
const fs = require('fs');

const { O_RDONLY, S_IFMT } = require('constants');
const { count } = require('console');
const commandFiles = readdirSync(join(__dirname, 'commands')).filter(file =>
	file.endsWith('.js')
);
for (const file of commandFiles) {
	const command = require(join(__dirname, 'commands', `${file}`));
	client.commands.set(command.name, command);
}
fs.readdir('./events/', (err, files) => {
	if (err) console.log(err);
	let jsfile1 = files.filter(f => f.split('.').pop() === 'js');
	if (jsfile1.length <= 0) {
		console.log('Could not find any events');
		return;
	}
	jsfile1.forEach(f => {
		const eventName = f.split('.')[0];
		console.log(`Loading Event: ${eventName}`);
		const event = require(`./events/${f}`);
		client.on(eventName, event.bind(null, client));
	});
});

client.on('message', async message => {
	if (message.author.bot) return undefined;
	let prefix = config.prefix;
	if (message.content.toLowerCase().split(' ')[0] === `${prefix}top-all`) {
		const data = await db.startsWith('points', {
			sort: '.data',
			limit: 1000000000
		});

		let lb = [];
		data.slice(0, 10).forEach(x => {
			let user = client.users.cache.get(x.ID.split('_')[1]) || {
				id: x.ID.split('_')[1],
				tag: 'NOT_FOUND#0000'
			};
			lb.push(`**${data.indexOf(x) + 1}-** * <@!${user.id}>| \`${x.data}\``);
		});
		message.channel.send(
			new Discord.MessageEmbed()
				.setThumbnail(client.user.avatarURL())
				.setDescription(lb.join('\n'))
				.setTitle('Top Points')
				.setFooter(
					`Requested By: ${message.author.tag}`,
					message.author.avatarURL({ dynamic: true })
				)
		);
		console.log(lb.join('\n'));
	}
});

});







/*

const client = new Discord.Client({
	partials: ['MESSAGE', 'CHANNEL', 'REACTION']
});
const { Database } = require('quickmongo');
const db = new Database(config.MongoDB);
db.on('ready', () => {
	console.log('Database connected!');
});
client.commands = new Discord.Collection();
const { join } = require('path');
const { readdirSync } = require('fs');
const fs = require('fs');

const { O_RDONLY, S_IFMT } = require('constants');
const { count } = require('console');
const commandFiles = readdirSync(join(__dirname, 'commands')).filter(file =>
	file.endsWith('.js')
);
for (const file of commandFiles) {
	const command = require(join(__dirname, 'commands', `${file}`));
	client.commands.set(command.name, command);
}
fs.readdir('./events/', (err, files) => {
	if (err) console.log(err);
	let jsfile1 = files.filter(f => f.split('.').pop() === 'js');
	if (jsfile1.length <= 0) {
		console.log('Could not find any events');
		return;
	}
	jsfile1.forEach(f => {
		const eventName = f.split('.')[0];
		console.log(`Loading Event: ${eventName}`);
		const event = require(`./events/${f}`);
		client.on(eventName, event.bind(null, client));
	});
});
client.login(config.token);
*/

/*
client.on('message', async message => {
if(message.author.bot) return undefined;
let prefix = config.prefix
if(message.content.toLowerCase().split(" ")[0] === `${prefix}top-server`){
const data = await db.startsWith("points", { sort: ".data", limit: 100000000 });
let lb = [];
data.slice(0, 10).forEach(xn=>{
let us1er = message.guild.members.cache.get(xn.ID.split('_')[1]) || { id: xn.ID.split('_')[1], tag: "NOT_FOUND#0000" };
lb.push(`**${data.indexOf(xn) + 1}-** <@!${us1er.id}> | \`${xn.data}\``);
});
message.channel.send(new Discord.MessageEmbed() 
.setThumbnail(message.guild.iconURL()).setDescription(lb.join("\n")).setAuthor("Top Points", message.guild.iconURL())
.setFooter(`Requested By: ${message.author.tag}`, message.author.avatarURL({dynamic:true})))
console.log(lb.join("\n"))
}})


*/
/*
client.on('message', async message => {
	if (message.author.bot) return undefined;
	let prefix = config.prefix;
	if (message.content.toLowerCase().split(' ')[0] === `${prefix}top-all`) {
		const data = await db.startsWith('points', {
			sort: '.data',
			limit: 1000000000
		});

		let lb = [];
		data.slice(0, 10).forEach(x => {
			let user = client.users.cache.get(x.ID.split('_')[1]) || {
				id: x.ID.split('_')[1],
				tag: 'NOT_FOUND#0000'
			};
			lb.push(`**${data.indexOf(x) + 1}-** * <@!${user.id}>| \`${x.data}\``);
		});
		message.channel.send(
			new Discord.MessageEmbed()
				.setThumbnail(client.user.avatarURL())
				.setDescription(lb.join('\n'))
				.setTitle('Top Points')
				.setFooter(
					`Requested By: ${message.author.tag}`,
					message.author.avatarURL({ dynamic: true })
				)
		);
		console.log(lb.join('\n'));
	}
});

*/