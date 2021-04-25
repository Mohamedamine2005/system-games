module.exports = {
name: "عقاب",
  enabled: true,

run: async (client, msg, args, db , prefix) => {  
const Canvas = require("canvas");
const Dis = require("discord.js")
const { registerFont } = require('canvas');
//registerFont('Cairo-Black.ttf1', { family: 'Cario' })

//registerFont('asta.ttf', { family: 'Asta' })
registerFont('abdullah.ttf', { family: 'Asta2' });
const jimp = require("jimp");
const word6 = require('../3gab.json');
const item6 = word6[Math.floor(Math.random() * word6.length)];
const background6 = await Canvas.loadImage("https://cdn.discordapp.com/attachments/758429320246198313/777177106768986112/Web_Photo_Editor_7.png");//انتظر
const canvas = Canvas.createCanvas(367, 300);
const ctx = canvas.getContext('2d');
ctx.drawImage(background6, 10, 0, canvas.width, canvas.height);
ctx.font = '25px Asta2';
ctx.fillStyle = '#ffffff';
//ctx.fillText(msg.author.username , 150, 30);
ctx.fillText(item6.type  , 80, 130);
const attachment6 = new Dis.MessageAttachment(canvas.toBuffer());
msg.channel.send(attachment6)
}        // اكمل ؟      
}