const fs = require('fs')

let handler = async (m, { conn }) => {
let loadd = [
    '*▬▭▭▭▭▭▭▭▭▭  1𝟶٪*',
    '*▬▬▭▭▭▭▭▭▭▭  2𝟶٪*',
    '*▬▬▬▭▭▭▭▭▭▭  3𝟶٪*',
    '*▬▬▬▬▭▭▭▭▭▭  4𝟶٪*',
    '*▬▬▬▬▬▭▭▭▭▭  5𝟶٪*',
    '*▬▬▬▬▬▬▭▭▭▭  6𝟶٪*',
    '*▬▬▬▬▬▬▬▭▭▭  7𝟶٪*',
    '*▬▬▬▬▬▬▬▬▭▭  8𝟶٪*',
    '*▬▬▬▬▬▬▬▬▬▭  9𝟶٪*',
    '*▬▬▬▬▬▬▬▬▬▬  𝟷𝟶𝟶٪*',
    '*𝙲𝙾𝙼𝙿𝙻𝙴𝚃𝙴𝙳. . .*'
 ]

let { key } = await conn.sendMessage(m.chat, {text: '*Loading. . .*'})//Pengalih isu

for (let i = 0; i < loadd.length; i++) {
await conn.sendMessage(m.chat, {text: loadd[i], edit: key })}
  let pfft = `
ubah di bawah!!!
`;
 conn.sendMessage(m.chat, {
      video: { url: "https://telegra.ph/file/78cbac01bcbd6e1bbddaa.mp4"},
      gifPlayback: true,
      caption: ' *_"Janganlah engkau menyesali apa yang telah terjadi di masa lalu, tetapi bersyukurlah atas apa yang kamu miliki saat ini. Karena hidup ini adalah perjalanan yang penuh ujian dan cobaan, namun Allah selalu menyediakan jalan keluar bagi hamba-Nya yang bersabar dan beriman."_*\n\n Click and follow my Instagram💎\n\n❖━━━[ *Kιɳα Bσƚ* ]━━━❖\n*.allmenu*\n*.owner*',     
      contextInfo: {
      externalAdReply: {
      title: `© Kιɳα Bσƚ by`,
      body: global.author,
      thumbnailUrl: 'https://telegra.ph/file/19ec91cb44e7c27c78708.jpg',
      sourceUrl: `https://www.instagram.com/iky_alwaysgood?igsh=MXdwbXR3a2xxNjRocA==`,
      mediaType: 1,
      renderLargerThumbnail: true
      }}})

let vn = "./vn/menu.mp3"
  conn.sendFile(m.chat, vn, "menu.mp3", null, m, true, {
    type: "audioMessage",
    ptt: true,
  });
}
handler.help = ['menu']
handler.tags = ['main']
handler.command = /^(menu)$/i;

module.exports = handler;