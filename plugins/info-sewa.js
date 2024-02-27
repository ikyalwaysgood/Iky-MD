let fetch = require('node-fetch')

let handler = async (m, { conn, command }) => {
    let buffer = await fetch(`https://cdn.btch.bz/file/06e8d93a5831ce577b93e.jpg`).then(res => res.buffer())
    conn.sendFile(m.chat, buffer, 'hasil.jpg', `*Hi bantu donasi yuk supaya bot aktif selalu👋*
╔═══════════════════
║ _*PEMBAYARAN DI SINI*_ 
╠═══════════════════
║╭──❉ 〔 *INFO* 〕 ❉──────
║│➸ *DANA* : 085794908894
║│➸ *PULSA*: 083164864536
║│➸ *GOPAY*: 085794908894
║╰──────────────────
╰═══════════════════`, m)
}

handler.help = handler.command = ['sewa','sewabot','belibot']
handler.tags = ['main']
module.exports = handler