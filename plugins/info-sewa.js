let fetch = require('node-fetch')

let handler = async (m, { conn, command }) => {
    let buffer = await fetch(`https://cdn.btch.bz/file/06e8d93a5831ce577b93e.jpg`).then(res => res.buffer())
    conn.sendFile(m.chat, buffer, 'hasil.jpg', `*Jika ingin melakukan pembayaran silahkan ketik .owner untuk pembayaran ke WhatsApp Owner.*`, m)
}

handler.help = handler.command = ['sewa','sewabot','belibot']
handler.tags = ['main']
module.exports = handler
