let fetch = require('node-fetch')
let handler = async (m, { conn, command, usedPrefix }) => {
	
	conn.sendButtonImg(m.chat, await ( await fetch(`https://hardianto.xyz/api/darkmeme?apikey=hardianto`)).buffer(), 'Awok lanjut🗿', 'NEXT', `${usedPrefix + command}`, m)

}

handler.help = ['darkmeme']
handler.tags = ['image']
handler.command = /^(darkmeme)$/i
handler.register = true

handler.limit = 30

module.exports = handler