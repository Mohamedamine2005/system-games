module.exports = { 
name: "ping",
  enabled: true,

 run: async (client, msg, args, db , prefix) => {  
const Canvas = require("canvas");
const Dis = require("discord.js")
const { registerFont } = require('canvas');
//registerFont('Cairo-Black.ttf', { family: 'Cario' })
//registerFont('asta.ttf', { family: 'Asta' })
registerFont('abdullah.ttf', { family: 'Asta2' });
const jimp = require("jimp");

const background2 = await Canvas.loadImage("https://media.discordapp.net/attachments/783094860517343254/795800286400086076/Web_Photo_Editor.jpgg");//انتظر
const canvas =  Canvas.createCanvas(700, 220);
const ctx = canvas.getContext('2d');
ctx.drawImage(background2, 10, 0, canvas.width, canvas.height);

ctx.font = '45px Asta2';
const ping = Math.round(client.ws.ping) ;
ctx.fillStyle = '#ffffff';

ctx.fillText(ping , 325, 140);
const attachment = new Dis.MessageAttachment(canvas.toBuffer());
msg.channel.send(attachment)
}}
/*run: async (client, msg, args, db , prefix) => {  
const Canvas = require("canvas");
const Dis = require("discord.js")
const { registerFont } = require('canvas');
//registerFont('Cairo-Black.ttf', { family: 'Cario' })
//registerFont('asta.ttf', { family: 'Asta' })
registerFont('abdullah.ttf', { family: 'Asta2' });
const jimp = require("jimp");

const background2 = await Canvas.loadImage("https://media.discordapp.net/attachments/732699537168138340/782172908427804687/Web_Photo_Editor_1.jpg");//انتظر
const canvas =  Canvas.createCanvas(700, 220);
const ctx = canvas.getContext('2d');
ctx.drawImage(background2, 10, 0, canvas.width, canvas.height);

ctx.font = '45px Asta2';
const ping = Math.round(client.ws.ping) ;
ctx.fillStyle = '#ffffff';

ctx.fillText(ping , 325, 140);
const attachment = new Dis.MessageAttachment(canvas.toBuffer());
msg.channel.send(attachment)
}*/ 