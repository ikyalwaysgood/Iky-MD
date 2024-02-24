let fetch = require('node-fetch')
let handler = async (m, { conn }) => conn.sendButtonLoc(m.chat, await (await fetch(fla + 'donasi')).buffer(), `
Hallo Semua 👋🏻

╭═ 〔 𝐋𝐈𝐒𝐓 𝐁𝐄𝐑𝐋𝐀𝐍𝐆𝐆𝐀𝐍𝐀𝐍 〕 ═
├────── *PREMIUM*──────
├⬡ *Khusus Bot pake nomor sendiri*_
├⬡ 𝟏 ᗷᑌᒪᗩᑎ *_/ Rp15.000_*
├⬡ 𝟑 ᗷᑌᒪᗩᑎ *_/ Rp40.000_*
├⬡ 𝟓 ᗷᑌᒪᗩᑎ *_/ RP70.000_*
├⬡ ᑭEᖇᗰᗩᑎEᑎ *_/ Rp100.000_*
└═════════════════════

*• KEUNTUNGAN !!!*

- Bisa Request Owner
- Request Nama Bot Kalian
- Terima Jadi Tanpa Ribet
- Lengkap AI
- Push Kontak 
- Play Musik
- Bisa buat sticker
- Bisa Isi tugas sekolah semua pelajaran 
- Bisa Bikin Jaga Grub Antilink dll.
- Bisa Main Bot Chat Group/ Privat
- Bisa Download Vidio Sosmed
- Bisa Nemenin Ngobrol 
- Dll.

╭═══════════════════════
║╭──❉ 〔 𝐕𝐈𝐀 𝐌𝐎𝐁𝐈𝐋𝐄 〕 ❉───
║│➸ *DANA* : 085794908894
║│➸ *PULSA*: 083164864536
║│➸ *GOPAY*: 085794908894
║╰──────────────────────
╰═══════════════════════
Jangan melakukan pembayaran sebelum chat saya!!!

• *Contact person Owner:*👇🏻
https://wa.me/6285794908894?text=Pesan+Bot+WhatsApp+Bang

_Klik link di atas buat pesan Bot_
`.trim(), footer, 'Owner', '.owner')
handler.help = ['belibot']
handler.tags = ['info']
handler.command = /^dona(te|si)$/i

module.exports = handler
