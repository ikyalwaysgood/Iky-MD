var fetch = require('node-fetch');
var handler = async (m, {
 text, 
 usedPrefix, 
 command
 }) => {
if (!text) throw `Masukkan pertanyaan!\n\n*Contoh:* Kapan Indonesia merdeka ? `
try {
  await m.reply(wait)
  var apii = await fetch(`https://api.botcahx.eu.org/api/search/openai-chat?text=${text}&apikey=${btc}`)
  var res = await apii.json()
  await m.reply(res.message)
} catch (err) {
  console.error(err)
  throw "_Terjadi kesalahan dalam menjawab pertanyaan!_"
}
}
handler.command = handler.help = ['ai','openai','chatgpt'];
handler.tags = ['tools'];
handler.premium = false
module.exports = handler;
