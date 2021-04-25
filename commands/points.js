module.exports = {
name: "هوية",
  enabled: true,

run: async (client, msg, args) => {  
const { Database } = require("quickmongo");
const db = new Database(require("../config").MongoDB)
const Canvas = require("canvas");
const Dis = require("discord.js")
const { registerFont } = require('canvas');
//registerFont('Cairo-Black.ttf', { family: 'Cario' })
//registerFont('asta.ttf', { family: 'Asta' })
registerFont('abdullah.ttf', { family: 'Asta2' });
const jimp = require("jimp");
let c = msg.mentions.users.first() || msg.author;
let points = await db.get(`points_${c.id}`)
let wins = await db.get(`win_${c.id}`)
const rr = await Canvas.loadImage("https://media.discordapp.net/attachments/773272703352307762/778353652783513662/20201117_221820.png?width=620&height=495");
const canvas = Canvas.createCanvas(500, 350);
const  ctx = canvas.getContext('2d');
let name = `${c.username.slice(0,8)}...`;
let pnt = `${points}`;
let ss = `${wins}`;
if(points === "0") points = 0;
if(wins === "0") wins = 0;
ctx.drawImage(rr, 10, 0, canvas.width, canvas.height);
ctx.fillStyle = '#ffffff';
ctx.font = '25px Asta2';
ctx.fillText(name  , 130, 85);
ctx.fillStyle = '#ffffff';
ctx.font = '35px Asta2';
ctx.fillText(pnt  , 200, 150);
ctx.fillText(ss  , 200, 210);
const attachment = new Dis.MessageAttachment(canvas.toBuffer());
msg.channel.send(attachment);
        }
      }
    