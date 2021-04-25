module.exports = {
name: "ايموجي",  
enabled: true,
run: async (client, msgm, args, db , prefix) => {  
const Canvas = require("canvas");
const Dis = require("discord.js")
const { registerFont } = require('canvas');
//registerFont('Cairo-Black.ttf', { family: 'Cario' })
//registerFont('asta.ttf', { family: 'Asta' })
registerFont('abdullah.ttf', { family: 'Asta2' });
const jimp = require("jimp");
const emojis = require('../emojis.json');
const item = emojis[Math.floor(Math.random() * emojis.length)];
let author = msgm.author;
const ic1on = await Canvas.loadImage(`${item.emojis}`);
const filter = response => {
return item.answers.some(answer => answer.toLowerCase() === response.content.toLowerCase());};
msgm.channel.send('**لديك 15 ثانية لمعرفه الأيموجي الصحيح **').then(async msg => {
const background = await Canvas.loadImage('https://media.discordapp.net/attachments/774373168856563738/800491055731572746/Web_Photo_Editor_1.jpg?width=468&height=373');

const canvas = Canvas.createCanvas(367, 300);
const ctx = canvas.getContext('2d');
ctx.drawImage(background, 0, 0, canvas.width, canvas.height);
ctx.font = '30px Elephant';
ctx.fillStyle = '#ffffff';

      //ctx.drawImage(icon, 309, 40, 170, 170);
      ctx.drawImage(ic1on, 100, 80, 170, 170);

let url = msg.author.displayAvatarURL({ dynamic: true, format: "png" }).endsWith(".webp") ? msg.author.displayAvatarURL({ dynamic: true, format: "png" }).slice(5, -20) + ".png" : msg.author.displayAvatarURL({ dynamic: true, format: "png" });
jimp.read(url, (err, ava) => { 
if (err) return console.log(err);
ava.getBuffer(jimp.MIME_PNG, (err, buf) => {
if (err) return console.log(err);
let Avatar = Canvas.Image;
let ava = new Avatar;
ava.src = buf;
ctx.beginPath();
ctx.arc(70, 80, 63, 0, Math.PI*2);
ctx.closePath();
ctx.clip();
//ctx.drawImage(ava, 8, 18, 128, 126);   
const attachment = new Dis.MessageAttachment(canvas.toBuffer());
msg.channel.send(attachment);
})

msg.channel.awaitMessages(filter, {
max: 1,
time: 15000,errors: ['time']}).then(async collected => {
copy = collected.first().content;
won = collected.first().author;
let r = await db.get(`points_${won.id}`);
let nk = 3;
let nkat = r + nk;
if (copy == item.answers){
msg.channel.send(`**الفائز : ${collected.first().author} **`)
var embed = new Dis.MessageEmbed()
.setColor('#2f3136')
.setDescription(`🥳 لدينا فائز 🥳
🎊الفائز هو : ${collected.first().author}
📥
لقد حصل على : \`3\` نقطه
📉
نقاطك هي : ${nkat}`)
.setFooter(`Developer: HaiDer`)
msg.channel.send(embed);
console.log(`[Typing] ${collected.first().author} typed the word.`);
copy = collected.first().content;
await db.add(`points_${won.id}`, 3);
await db.add(`win_${won.id}`, 1);
}else{  msg.channel.send(`**الفائز : ${collected.first().author} **`)
var embed = new Dis.MessageEmbed()
.setColor('#2f3136')
.setDescription(`🥳 لدينا فائز 🥳
🎊الفائز هو : ${collected.first().author}
📥
لقد حصل على : \`3\` نقطه
📉
نقاطك هي : ${nkat}`)
.setFooter(`Developer: HaiDer`)
msg.channel.send(embed);
await db.add(`win_${won.id}`, 1);
await db.add(`points_${won.id}`, 3);
}}).catch(collected=>{
  msg.channel.send(`انتهاء الوقت ولم يقم احد بمعرفه الأيموجي `);
})
})})}}