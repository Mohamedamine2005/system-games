module.exports = {
name: "كت",
  enabled: true,

run: async (client, msg, args, db , prefix) => {  
const Canvas = require("canvas");
const Dis = require("discord.js")
const { registerFont } = require('canvas');
//registerFont('Cairo-Black.ttf', { family: 'Cario' })
//registerFont('asta.ttf', { family: 'Asta' })
registerFont('abdullah.ttf', { family: 'Asta2' });
const jimp = require("jimp");
const word876 = require('../kt.json');
const item01 = word876[Math.floor(Math.random() * word876.length)];
const background89 = await Canvas.loadImage("https://cdn.discordapp.com/attachments/758429320246198313/777173750617210880/Web_Photo_Editor_8.png");//انتظر
const canvas = Canvas.createCanvas(367, 300);
const ctx = canvas.getContext('2d');
ctx.drawImage(background89, 10, 0, canvas.width, canvas.height);
ctx.font = '25px Asta2';
ctx.fillStyle = '#ffffff';
//ctx.fillText(msg.author.username , 115, 30);
ctx.fillText(item01.type  , 80, 130);
const attachment4 = new Dis.MessageAttachment(canvas.toBuffer());
msg.channel.send(attachment4)
}      
}