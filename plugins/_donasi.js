let fetch = require('node-fetch')

let handler = async (m, { conn, command }) => {
    let buffer = await fetch(`https://telegra.ph/file/ec1342450424ae0bf13ba.jpg`).then(res => res.buffer())
    conn.sendFile(m.chat, buffer, 'hasil.jpg', `*Hi bantu donasi yuk supaya bot aktif selalu👋*\n
╔═══════════════════\n║ _*PEMBAYARAN DI SINI*_\n╠═══════════════════\n║╭──❉ 〔 *INFO* 〕 ❉─────\n║│➸ *DANA* : 085794908894\n║│➸ *PULSA*: 083164864536\n║│➸ *GOPAY*: 085794908894\n║╰──────────────────\n╰═══════════════════`, m)
}

handler.help = handler.command = ['donasi']
handler.tags = ['main']
module.exports = handler