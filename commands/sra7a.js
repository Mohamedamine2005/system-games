module.exports = {
name: "صراحة",
  enabled: true,

run: async (client, msg, args, db , prefix) => {  
const Canvas = require("canvas");
const Dis = require("discord.js")
const { registerFont } = require('canvas');
//registerFont('Cairo-Black.ttf', { family: 'Cario' })
//registerFont('asta.ttf', { family: 'Asta' })
registerFont('abdullah.ttf', { family: 'Asta2' });
const jimp = require("jimp");
const word3 = require('../9ra7a.json');
const item3 = word3[Math.floor(Math.random() * word3.length)];
const background2 = await Canvas.loadImage("https://cdn.discordapp.com/attachments/758429320246198313/777169327094628392/Web_Photo_Editor_6.png");//انتظر
const canvas = Canvas.createCanvas(367, 300);
const ctx = canvas.getContext('2d');
ctx.drawImage(background2, 10, 0, canvas.width, canvas.height);
ctx.font = '27px Asta2';
ctx.fillStyle = '#ffffff';
//ctx.fillText(msg.author.username , 115, 30);
ctx.fillText(item3.type  , 115, 130);
const attachment3 = new Dis.MessageAttachment(canvas.toBuffer());
msg.channel.send(attachment3)
} 
}