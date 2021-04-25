module.exports = { 
name: "help",
  enabled: true,

  run: async (client, message, prefix) => {
  const Discord = require("discord.js")
  return    message.author.send(`https://discord.gg/CzGtvVGPJS`
 ,
 new Discord.MessageEmbed()
.setTitle(`** ${client.user.username}  ** `)
.setDescription(`**

I\` لعبه سرعه على السريع\`
I اسرع
I\` فكك الجمله بأسرع وقت\`
I فكك
I\` عليك بحل اللغز يا ذكي\`
I لغز
I\` عليك بحل الأسئله\`
I اسئله-دينيه
I\` يجب ان تكون ذكي لتعرف من هو\`
I من
I\` يجب ان تكون صريحا قبل لعب هذه اللعبه\`
I صراحة
I\` يجب ان تكون قويا لمقاومه العقابات\`
I عقاب
I\` عليك بحل الأسءله بأسرع وقت\`
I اسئلة
I\` عليك بأن تكون لديك معرفه بالجغرافية لكي تعرف عواصم الدول\`
I عواصم
I\` يجب ان تختار شيء واحد وحسب\`
I لو
I\` يجب ان تكن جريئا بما يكفي\`
I كت
I\` عليك ان تكون ذكيا حتى تحل المعادله\`
I معادلات
I\` عليك بتشبيك الجمله\`
I شبك
I\` عليك بترجمه كل شيء للغه الأنجليزية\`
I ترجم
I\` يعطيك صوره يوتيوبر و عليك معرفه اسم القناة و اسم صاحب القناة\`
I يوتيوبر
I\` يعطيك صوره عشوائية و عليك بمعرفه ما في الصوره\`
I صور
I\` يعطيك صوره ايموجي و عليك معرفتها\`
I ايموحي
I\` يعطيك جمله و عليك معرفه المعاكسة الخاصه بالجمله\`
I معاكسات


[Server Support](https://discord.gg/CzGtvVGPJS)
[Link Bot](https://discord.com/api/oauth2/authorize?client_id=719912472903155814&permissions=8&scope=bot)

**`)
.setColor("#2f3136")
.setFooter(`Developer: HaiDer`)
).then((res) =>{
    message.react('✅')
}).catch(err => {
    message.react('❌')

        //     msg.reply(`Erro`)

})
}}