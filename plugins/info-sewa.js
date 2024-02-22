let fetch = require('node-fetch')

let handler = async (m, { conn, command }) => {
    let buffer = await fetch(`https://btch.pages.dev/file/9e4162d4034241953fdfb.jpg`).then(res => res.buffer())
    conn.sendFile(m.chat, buffer, 'hasil.jpg', `*Jika ingin melakukan pembayaran silahkan ketik .owner untuk pembayaran ke WhatsApp Owner.*`, m)
}

handler.help = handler.command = ['sewa','sewabot','belibot']
handler.tags = ['main']
module.exports = handler
