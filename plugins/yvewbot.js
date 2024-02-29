let { MessageType } = require('@adiwajshing/baileys')
let PhoneNumber = require('awesome-phonenumber')
let levelling = require('../lib/levelling')

let handler = async (m, { conn }) => {
let caption = `*HALLO Bang*\n*Saya Kιɳα Bσƚ*\n*Pilih Menu Di Bawah Yaa Bray*\n*Spam = Banned*\n*Telp = Blok*\n\n*Follow Instagram*\nhttps://www.instagram.com/iky_alwaysgood?igsh=MXdwbXR3a2xxNjRocA==\n\n*Untuk Melihat Menu Bot Ketik .menu Atau .allmenu*`.trim()
conn.send3Button(m.chat, caption, `Powered By Baileys\nCreated Kιɳα Bσƚ By Iky𝖔𝖋𝖋𝖎𝖈𝖎𝖆𝖑ཽ\n`.trim(), '🧾MENU', '.?', '🍭Owner Kιɳα Bσƚ', '.owner', '📖Info Bot', '.infobot', m)
}

handler.command = /^(help|bot)$/i
handler.owner = false
handler.mods = false
handler.premium = false
handler.group = false
handler.private = false

handler.admin = false
handler.botAdmin = false
handler.register = false

handler.fail = null
handler.exp = 20

module.exports = handler