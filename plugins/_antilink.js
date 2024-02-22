let handler = m => m

let linkRegex = /chat.whatsapp.com\/([0-9A-Za-z]{20,24})/i
handler.before = async function (m, { user, isBotAdmin, isAdmin }) {
  if ((m.isBaileys && m.fromMe) || m.fromMe || !m.isGroup) return true
  let chat = global.db.data.chats[m.chat]
  let isGroupLink = linkRegex.exec(m.text)

  if (chat.antiLink && isGroupLink) {
    await m.reply(`*「 ANTI LINK 」*\n\nDetected *${await conn.getName(m.sender)}* 𝙰𝚗𝚍𝚊 𝚝𝚎𝚕𝚊𝚑 𝚖𝚎𝚗𝚐𝚒𝚛𝚒𝚖𝚔𝚊𝚗 𝚕𝚒𝚗𝚔 𝚐𝚛𝚞𝚙!\n\n𝙼𝚊𝚊𝚏 𝚔𝚊𝚖𝚞 𝚊𝚔𝚊𝚗 𝚍𝚒𝚔𝚎𝚕𝚞𝚊𝚛𝚔𝚊𝚗 𝚍𝚊𝚛𝚒 𝚐𝚛𝚞𝚙 𝚒𝚗𝚒 𝚜𝚊𝚖𝚙𝚊𝚒 𝚓𝚞𝚖𝚙𝚊!`)
    if (isAdmin) return m.reply('*𝙴𝚑 𝚜𝚘𝚛𝚛𝚢 𝚢𝚘𝚞 𝚊𝚍𝚖𝚒𝚗𝚜, 𝚢𝚘𝚞 𝚠𝚒𝚕𝚕 𝚗𝚘𝚝 𝚋𝚎 𝚔𝚒𝚌𝚔𝚎𝚍. 𝚑𝚎𝚑𝚎..*')
    if (!isBotAdmin) return m.reply('*𝙱𝚘𝚝𝚜 𝚊𝚛𝚎 𝚗𝚘𝚝 𝚊𝚍𝚖𝚒𝚗𝚜, 𝚑𝚘𝚠 𝚌𝚊𝚗 𝚝𝚑𝚎𝚢 𝚔𝚒𝚌𝚔 𝚙𝚎𝚘𝚙𝚕𝚎 _-*')
    let linkGC = ('https://chat.whatsapp.com/' + await conn.groupInviteCode(m.chat))
    let isLinkconnGc = new RegExp(linkGC, 'i')
    let isgclink = isLinkconnGc.test(m.text)
    if (isgclink) return m.reply('*「 ANTI LINK 」*\n\n𝙾𝚛𝚍𝚎𝚛 𝚍𝚎𝚗𝚒𝚎𝚍, 𝚋𝚘𝚝 𝚠𝚒𝚕𝚕 𝚗𝚘𝚝 𝚔𝚒𝚌𝚔 𝚢𝚘𝚞.\n𝙱𝚎𝚌𝚊𝚞𝚜𝚎 𝚝𝚑𝚎 𝚐𝚛𝚘𝚞𝚙 𝚕𝚒𝚗𝚔 𝚒𝚝𝚜𝚎𝚕𝚏')
    await conn.sendMessage(m.chat, { delete: m.key })
    await conn.groupParticipantsUpdate(m.chat, [m.sender], "remove")
  }
  return true
}

module.exports = handler
