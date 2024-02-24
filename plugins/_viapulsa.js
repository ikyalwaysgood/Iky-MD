let handler = async (m, { conn }) => {
	conn.reply(m.chat, `╠═〘 PEMBAYARAN 〙 ═
╠═ Untuk Pembayaran Via Pulsa
╠➥ Ke nomer ini
║➥ 083164864536
║
╠═〘 Fitur 〙 ═
║
╠➥ *FITUR DOWNLOADER 500++*
║     *YouTube, Twitter,* 
║     *Tiktok, Instagram, dll.*
║    *FITUR STIKER*
╠➥ *FITUR ADMIN*
║    *KICK ORANG*
║    *JADIIN ADMIN*
╠➥ *FITUR ISLAM*
║   *QURAN*
║   *CEK JADWAL SHALAT*
╠➥ *INTERNET*
║   *BRAINLY*
║   *GOOGLE*
╠➥ *DAN 200 LEBIH*
║   *FITUR LAINNYA*
║ 
╠═ ©2024 
╠═ Iky𝖔𝖋𝖋𝖎𝖈𝖎𝖆𝖑ཽ
╠═〘 Kιɳα Bσƚ 〙 ═`.trim(), m)
}

handler.command = /^viapulsa$/i

module.exports = handler