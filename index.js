const Discord = require("discord.js-selfbot-v13");
const { Client } = require('discord.js-selfbot-v13');
const client = new Discord.Client({
    checkUpdate: false
});
const express = require('express')
const app = express();
const port = 8000;

const largeImages = [
    'https://media.discordapp.net/attachments/1199386824582373516/1211343738098688030/waifu-anime.gif?ex=65eddac4&is=65db65c4&hm=3c5f03263eaafb8567c0163708ed938097995a77ab220c188685341ab99b0fbf&=',
    'https://media.discordapp.net/attachments/1199386824582373516/1211343738656399392/hikikomari-terakomari.gif?ex=65eddac4&is=65db65c4&hm=54a4cb5a3bd8a1cdba46916a0f0c44251bdc685173a7cd90b338f6a444531bb6&=',
    'https://cdn.discordapp.com/attachments/1192595374259572736/1211925332488355850/standard_1_1.gif?ex=65eff86b&is=65dd836b&hm=72cc21d5ece8e996484d9cab55cf3f486b90f0e8b21714c9e412aa73e3179046&',
    'https://cdn.discordapp.com/attachments/1199386824582373516/1211690815592726638/F4tviVKWYAAWVDT.jpg?ex=65ef1e02&is=65dca902&hm=11810f6fcd089278f9e12ad59f27a1b87dabda5021029933e7f25dcb6e974f84&',

'https://cdn.discordapp.com/attachments/889976848581287946/1192664457915146301/download_1.gif?ex=65ea7fd5&is=65d80ad5&hm=af013b2b65d05bfd5ab5fef6afdce92752b4fee21ab9f20ba2ea3bc66d6a1faa&',

'https://cdn.discordapp.com/attachments/889976848581287946/1193140899987865600/Herrscher.of.the.Void.full.2866346.gif?ex=65ec3b8e&is=65d9c68e&hm=28866edb01c0c0e44950eb9f45856c54cf986c0bccb7b3d680a496d50e585718&',
      // ใส่เพิ่มได้ถ้าเองต้องการ รูปใหญ่
  ];

let currentLargeImageIndex = 0;

app.get('/', (req, res) => res.send('ทำงานเรียบร้อยแล้ว'))
app.listen(port, () =>
    console.log(`Your app is listening at http://localhost:${port}`)
);

client.on("ready", async () => {
    var startedAt = Date.now();
    console.log(`${client.user.username} เม็ดม่วงทำงานเรียบร้อยแล้ว !`);

    setInterval(() => {
        const currentTime = getCurrentTime();
        const currentDate = getCurrentDate();

const r = new Discord.RichPresence()
          .setApplicationId('1155496899697180762')
          .setType('WATCHING')
          .setURL('https://youtu.be/LzAlv-wnQJY?si=NI8ZtPikq9Hb7CR_')
          .setState('すごく疲れた | 死にたい') // คำที่ขึ้น
          .setName('𝙵𝙰𝙺𝙴') // คำที่ขึ้น
          .setDetails(` 〈⏳${currentTime}〉 «» 〈💤 Itz${client.user.username}〉 `) // เวลาเเละชื่อของความเท่
          .setStartTimestamp(startedAt)
          .setAssetsLargeText(`〈${currentDate}〉|〈🛸 ${Math.round(client.ws.ping)} m/s〉`) // status
          .setAssetsLargeImage(largeImages[currentLargeImageIndex]) // รูปใหญ่ไปใส่ข้างบน
          .setAssetsSmallImage('https://cdn.discordapp.com/attachments/1061395766586921092/1211763226577207416/Art_Icon.jpg?ex=65ef6172&is=65dcec72&hm=16829d77eeee2784c3c834ecfe0084e0d0909cea2b6a99d881c43683d451d392&') // รูปเล็ก
          .setAssetsSmallText('✧ Busy')
          .addButton('Free access 200+ ❤️', 'https://discord.com/invite/aqt6thEVV7')
          .addButton('Itz4levy', 'https://guns.lol/4levy')

        client.user.setPresence({ status: "idle" }); //dnd, online, idle, offline
        client.user.setActivity(r);

      // ปรับเปลียนไปรูปต่อไป
      currentLargeImageIndex = (currentLargeImageIndex + 1) % largeImages.length;
  }, 4000); // ปรับเวลา เปลียนรูปใหญ่
});

  function getCurrentDate() {
    const a = new Date(Date.now());
    const c = { timeZone: "Asia/Bangkok", day: "2-digit", month: "2-digit", year: "numeric" };
    const formattedDate = a.toLocaleDateString("en-US", c);
    const [month, day, year] = formattedDate.split('/');
    return `${day}/${month}/${year}`;
}

function getCurrentTime() {
    const a = new Date(Date.now());
    const c = { timeZone: "Asia/Bangkok", hour: "numeric", minute: "numeric", hour12: false };
    return a.toLocaleTimeString("th-TH", c);
}
client.login(process.env['token']);
