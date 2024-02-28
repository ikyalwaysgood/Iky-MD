let fetch = require('node-fetch')
let handler = m => m

handler.before = async (m) => {
    let chat = global.db.data.chats[m.chat]
    if (chat.simi && !chat.isBanned && !m.isGroup) {
        if (/^.*false|disnable|(turn)?off|0/i.test(m.text)) return
        if (!m.text) return
        let res = await fetch(global.API('pencarikode', '/api/simsimii', { text: encodeURIComponent(m.text) }, 'apikey'))
        if (!res.ok) return m.reply(eror)
        let json = await res.json()
        if (json.result == 'Aku tidak mengerti apa yang kamu katakan.Tolong ajari aku.') await m.reply('Kina nya blom diajarin, ajarin dong')
        else await m.reply(`*Kina:* ${json.result}`)
        return !0
    }
    return true
}
module.exports = handler