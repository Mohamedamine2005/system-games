module.exports = {
name: "معادلات",
  enabled: true,

run: async (client, message, args, db , prefix) => {  
const Canvas = require("canvas");
const Dis = require("discord.js")
const { registerFont } = require('canvas');
//registerFont('Cairo-Black.ttf', { family: 'Cario' })
//registerFont('asta.ttf', { family: 'Asta' })
registerFont('abdullah.ttf', { family: 'Asta2' });
const jimp = require("jimp");
const type = require('../m3.json');
const item = type[Math.floor(Math.random() * type.length)];
let author = message.author;
const filter = response => {
return item.answers.some(answer => answer.toLowerCase() === response.content.toLowerCase());};
message.channel.send('**لديك __15__ ثانيه لتحل المعادله**').then(async msg => {
const background = await Canvas.loadImage("https://media.discordapp.net/attachments/732699537168138340/778364140536332318/Web_Photo_Editor_4.jpg");
const canvas = Canvas.createCanvas(700, 220);
const  ctx = canvas.getContext('2d');
const fkk = "فكك الجملة:";
ctx.fillStyle = '#ffffff';
ctx.drawImage(background, 10, 0, canvas.width, canvas.height);
ctx.font = '55px Cairo';
//ctx.strokeRect(0, 0, canvas.width, canvas.height);          
//ctx.fillText(fkk  , 250, 30);
ctx.fillText(item.type  , 280, 140);
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
msg.channel.send(`انتهاء الوقت ولم يقم احد بـحل المعادلة`);
})})})}}