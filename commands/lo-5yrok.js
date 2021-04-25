module.exports = {
name: "لو",
  enabled: true,

run: async (client, msg, args, db , prefix) => {  
const Canvas = require("canvas");
const Dis = require("discord.js")
const { registerFont } = require('canvas');
//registerFont('Cairo-Black.ttf', { family: 'Cario' })
//registerFont('asta.ttf', { family: 'Asta' })
registerFont('abdullah.ttf', { family: 'Asta2' });
const jimp = require("jimp");
const word2 = require('../lo.json');
const item2 = word2[Math.floor(Math.random() * word2.length)];
const background2 = await Canvas.loadImage("https://cdn.discordapp.com/attachments/758429320246198313/777156124146270208/Web_Photo_Editor_4.png");//انتظر
const canvas = Canvas.createCanvas(367, 300);
const ctx = canvas.getContext('2d');
ctx.drawImage(background2, 10, 0, canvas.width, canvas.height);
ctx.font = '20px Asta2';
ctx.fillStyle = '#ffffff';
//ctx.fillText(msg.author.username , 115, 30);
ctx.fillText(item2.type1  ,   210, 200);
ctx.fillText(item2.type2  , 45, 200);
const attachment = new Dis.MessageAttachment(canvas.toBuffer());
msg.channel.send(attachment)
} 
}
