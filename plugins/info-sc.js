let handler = async (m, { conn }) => {
let ye = `@${m.sender.split`@`[0]}`
let esce = `
Hai ${ye} Nyari apa wir🗿 :\nChat owner • Iky𝖔𝖋𝖋𝖎𝖈𝖎𝖆𝖑ཽ`
m.reply(esce)
}
handler.help = ['sc', 'sourcecode']
handler.tags = ['info']
handler.command = /^(sc|sourcecode)$/i

module.exports = handler