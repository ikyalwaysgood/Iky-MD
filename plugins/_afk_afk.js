let handler = async (m, { text }) => {
let user = global.db.data.users[m.sender]
user.afk = + new Date
user.afkReason = text
m.reply(`@${m.sender.split`@`[0]} 𝚜𝚎𝚔𝚊𝚛𝚊𝚗𝚐 𝙰𝙵𝙺 ${text ? '\n𝙳𝚎𝚗𝚐𝚊𝚗 𝙰𝚕𝚊𝚜𝚊𝚗 : ' + text : '𝚃𝚊𝚗𝚙𝚊 𝙰𝚕𝚊𝚜𝚊𝚗'}
`)
}
handler.help = ['afk [alasan]']
handler.tags = ['main']
handler.command = /^afk$/i

module.exports = handler
//@${who.split`@`[0]}        /////@${m.sender.split`@`[0]