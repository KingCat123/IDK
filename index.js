const Discord = require("discord.js-selfbot-v13");
const { Client } = require('discord.js-selfbot-v13');
const client = new Discord.Client({
    checkUpdate: false
});
const express = require('express')
const app = express();
const port = 8000;

const largeImages = [
    'https://media.discordapp.net/attachments/1160072155476795392/1213708850939559999/Blue_Moment.PNG?ex=65f67573&is=65e40073&hm=34b99529ebc16f73f85b17252fa85a37e4c4654144665462cdbdc13bf95efbf0&=&format=webp&quality=lossless&width=540&height=437',
    'https://media.discordapp.net/attachments/1160072155476795392/1213708850939559999/Blue_Moment.PNG?ex=65f67573&is=65e40073&hm=34b99529ebc16f73f85b17252fa85a37e4c4654144665462cdbdc13bf95efbf0&=&format=webp&quality=lossless&width=540&height=437',
    'https://media.discordapp.net/attachments/1160072155476795392/1213708850939559999/Blue_Moment.PNG?ex=65f67573&is=65e40073&hm=34b99529ebc16f73f85b17252fa85a37e4c4654144665462cdbdc13bf95efbf0&=&format=webp&quality=lossless&width=540&height=437',
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
          .setState('Normal Cat Moment') // คำที่ขึ้น
          .setName('Play Game For 24/7') // คำที่ขึ้น
          .setDetails(` 〈⏳${currentTime}〉 «» 〈🔥 im${client.user.username}〉 `) // เวลาเเละชื่อของความเท่
          .setStartTimestamp(startedAt)
          .setAssetsLargeText(`〈${currentDate}〉|〈🛸 ${Math.round(client.ws.ping)} m/s〉`) // status
          .setAssetsLargeImage(largeImages[currentLargeImageIndex]) // รูปใหญ่ไปใส่ข้างบน
          .setAssetsSmallImage('https://media.discordapp.net/attachments/1160072155476795392/1213711209795162122/Cute_Cat.jpg?ex=65f677a6&is=65e402a6&hm=e95353a5700cc86c403b040a29db40cbd1b3e0ab70fdf3fd67766ff5fa27f853&=&format=webp&width=592&height=591') // รูปเล็ก
          .setAssetsSmallText('Cat Moment')
          .addButton('Join My Discord Server !', 'https://discord.gg/VUsFzfMytN')
          .addButton('Sub To My Channel !', 'https://www.youtube.com/channel/UCFUvOsGvirLNNBnf0F6B8FA')

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
