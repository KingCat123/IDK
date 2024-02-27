const Discord = require("discord.js-selfbot-v13");
const { Client } = require('discord.js-selfbot-v13');
const client = new Discord.Client({
    checkUpdate: false
});
const express = require('express')
const app = express();
const port = 8000;

const largeImages = [
    'https://media.discordapp.net/attachments/1199386824582373516/1211343738098688030/waifu-anime.gif?ex=65eddac4&is=65db65c4&hm=3c5f03263eaafb8567c0163708ed938097995a77ab220c188685341ab99b0fbf&=%27%2C&',
    'https://media.discordapp.net/attachments/1199386824582373516/1212036332843569182/ezgif-1-029e122a42.gif?ex=65f05fcc&is=65ddeacc&hm=dbbfc9ccf200fdade58f2e0b8c407ca6e4735c7e72ed0ddbe1be531597a5a19c&=',
    'https://media.discordapp.net/attachments/1199386824582373516/1212036353269956678/ezgif-1-e85f55f0a6.gif?ex=65f05fd1&is=65ddead1&hm=2749a3c7e6be666eabc5ab4e418929210c756573ae8c0f6108b471a97ef2ad11&=',
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
  }, 5000); // ปรับเวลา เปลียนรูปใหญ่
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
