let fetch = require('node-fetch')
let handler = async(m, { conn, usedPrefix, command }) => {

        let res = await (await fetch(`https://api.lolhuman.xyz/api/random/quotesnime?apikey=${lolkey}`)).json()
                 let hasil = `${res.result.quote}
chara: ${res.result.character}
anime: ${res.result.anime}
episode: ${res.result.episode}`.trim()
await conn.sendButton(m.chat, hasil, footer, 'Next', `${usedPrefix + command}`, m, { contextInfo: { forwardingScore: 999, isForwarded: true }})

}
handler.help = ['quoteanime']
handler.tags = ['anime', 'quotes']
handler.command = /^(quoteanime)$/i
handler.owner = false
handler.mods = false
handler.premium = false
handler.group = false
handler.private = false

handler.admin = false
handler.botAdmin = false

handler.fail = null
handler.exp = 0
handler.limit = false

module.exports = handler