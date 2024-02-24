let handler = async (m, { conn }) => {
conn.reply(m.chat, audio, m) 
}
handler.help = ['menu']
handler.tags = ['main']
handler.command = /^(menu)$/i

module.exports = handler