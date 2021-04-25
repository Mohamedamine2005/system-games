module.exports = {
name: "هل-تعلم",
  enabled: true,

run: async (client, msg, args, db , prefix) => {  
const Canvas = require("canvas");
const Dis = require("discord.js")
const { registerFont } = require('canvas');
//registerFont('Cairo-Black.ttf', { family: 'Cario' })
//registerFont('asta.ttf', { family: 'Asta' })
registerFont('abdullah.ttf', { family: 'Asta2' });
const jimp = require("jimp");
const word6 = require('../hl.json');
const item6 = word6[Math.floor(Math.random() * word6.length)];
const background6 = await Canvas.loadImage("https://cdn.discordapp.com/attachments/776567865280036884/776583732177797131/PicsArt_09-08-02.34.07.png");
const canvas = Canvas.createCanvas(500, 150);
const ctx = canvas.getContext('2d');
ctx.drawImage(background6, 10, 0, canvas.width, canvas.height);
ctx.font = '35px Asta2';
ctx.fillStyle = '#ffffff';
//ctx.fillText(msg.author.username , 120, 30);
ctx.fillText(item6.type  , 115, 100);
const attachment6 = new Dis.MessageAttachment(canvas.toBuffer());
msg.channel.send(attachment6)
}        // اكمل ؟      
}