let handler = async(m, { conn, text }) => {

    if (!text) return conn.reply(m.chat, 'Masukan Teks yang akan dispam!', m)

    let pesan = `${text}`
    await m.reply('*SPAM DIMULAI!*\n\nNote : Bot akan spam 30 kali')
    await m.reply(pesan)
    await m.reply(pesan)
    await m.reply(pesan)
    await m.reply(pesan)
    await m.reply(pesan)
    await m.reply(pesan)
    await m.reply(pesan)
    await m.reply(pesan)
    await m.reply(pesan)
    await m.reply(pesan)
    await m.reply(pesan)
    await m.reply(pesan)
    await m.reply(pesan)
    await m.reply(pesan)
    await m.reply(pesan)
    await m.reply(pesan)
    await m.reply(pesan)
    await m.reply(pesan)
    await m.reply(pesan)
    await m.reply(pesan)
    await m.reply(pesan)
    await m.reply(pesan)
    await m.reply(pesan)
    await m.reply(pesan)
    await m.reply(pesan)
    await m.reply(pesan)
    await m.reply(pesan)
    await m.reply(pesan)
    await m.reply(pesan)

    conn.reply(m.chat, 'Akhir Dari Spam', m)
}
handler.help = ['spamchat'].map(v => v + ' <teks>')
handler.tags = ['admin', 'grup']
handler.command = /^(spamchat)$/i
handler.owner = true
handler.mods = false
handler.premium = true
handler.group = true

handler.admin = true
handler.botAdmin = false

handler.fail = null
handler.exp = 100
handler.limit = true

module.exports = handler