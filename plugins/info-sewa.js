let fetch = require('node-fetch')
let handler = async (m, { conn }) => conn.send2ButtonLoc(m.chat, await (await fetch(fla + teks)).buffer(), `
*Hi bantu donasi yuk supaya bot aktif selalu👋*
╔═══════════════════
║ _*PEMBAYARAN DI SINI*_ 
╠═══════════════════
║╭──❉ 〔 *INFO* 〕 ❉──────
║│➸ *DANA* : 085794908894
║│➸ *PULSA*: 083164864536
║│➸ *GOPAY*: 085794908894
║╰──────────────────
╰═══════════════════

`.trim(), footer, 'Owner', '.owner', 'Menu', '.menu')
handler.help = ['donasi','sewa','sewabot','belibot']
handler.tags = ['info']
handler.command = /^dona(te|si)$/i

module.exports = handler