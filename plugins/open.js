let { MessageType } = require('@adiwajshing/baileys')
let handler = async (m, { conn, command, args, text, usedPrefix, DevMode }) => {
        if (!db.data.chats[m.chat].rpg && m.isGroup) throw global.wait
  try {
    let bruh = `${usedPrefix}open <crate name> < 1 | 10 | 100 | 1000 >\n\nContoh penggunaan: *${usedPrefix}open common 10*\n\nlist crate:\n*common*\n*uncommon*\n*mythic*\n*legendary*`
    let _lmao = args[0]
    let Lmao = `Hanya support 1, 10, 100, 1000\nContoh penggunaan: *${usedPrefix}open ${args > 2 ? _lmao : pickRandom(['common', 'uncommon', 'mythic', 'legendary'])} 10*`
    let type = (args[0] || '').toLowerCase()
    let jumlah = (args[1] || '').toLowerCase()
    switch (type) {
        case 'common':
            switch (jumlah) {
                case '1':
                case 'crate':
                    let _cm = `${Math.floor(Math.random() * 50)}`.trim()
                    let _cc = `${Math.floor(Math.random() * 2)}`.trim()
                    let _cp = `${Math.floor(Math.random() * 1)}`.trim()
                    let _ce = `${Math.floor(Math.random() * 100)}`.trim()
                    let _cu = `${Math.floor(Math.random() * 1)}`.trim()
                    let cm = (_cm * 1)
                    let cc = (_cc * 1)
                    let cp = (_cp * 1)
                    let ce = (_ce * 1)
                    let cu = (_cu * 1)
                    let Hcom = `
Anda telah membuka *Common crate* dan mendapatkan:${cm > 0 ? `\nMoney: ${cm}` : ''}${ce > 0 ? `\nExp: ${ce} *exp*` : ''}${cp > 0 ? `\nPotion: ${cp} *potion*` : ''}${cc > 0 ? `\ncommon crate: ${cc} *crate*` : ''}${cu > 0 ? `\nUncommon crate: ${cu} *crate*` : ''}
`.trim()
                    if (global.db.data.users[m.sender].common >= 1) {
                        global.db.data.users[m.sender].common -= 1
                        global.db.data.users[m.sender].money += cm * 1
                        global.db.data.users[m.sender].exp += ce * 1
                        global.db.data.users[m.sender].potion += cp * 1
                        global.db.data.users[m.sender].uncommon += cu * 1
                        global.db.data.users[m.sender].common += cc * 1
                        conn.reply(m.chat, Hcom, m)
                    } else conn.reply(m.chat, 'Common crate anda tidak cukup', m)
                    break
                case '10':
                    let _cm1 = `${Math.floor(Math.random() * 500)}`.trim()
                    let _cc1 = `${Math.floor(Math.random() * 5)}`.trim()
                    let _cp1 = `${Math.floor(Math.random() * 3)}`.trim()
                    let _ce1 = `${Math.floor(Math.random() * 700)}`.trim()
                    let _cu1 = `${Math.floor(Math.random() * 3)}`.trim()
                    let cm1 = (_cm1 * 1)
                    let cc1 = (_cc1 * 1)
                    let cp1 = (_cp1 * 1)
                    let ce1 = (_ce1 * 1)
                    let cu1 = (_cu1 * 1)
                    let Hcom1 = `
Anda telah membuka *Common crate* dan mendapatkan:${cm1 > 0 ? `\nMoney: ${cm1}` : ''}${ce1 > 0 ? `\nExp: ${ce1} *exp*` : ''}${cp1 > 0 ? `\nPotion: ${cp1} *potion*` : ''}${cc1 > 0 ? `\ncommon crate: ${cc1} *crate*` : ''}${cu1 > 0 ? `\nUncommon crate: ${cu1} *crate*` : ''}
`.trim()
                    if (global.db.data.users[m.sender].common >= 10) {
                        global.db.data.users[m.sender].common -= 10
                        global.db.data.users[m.sender].money += cm1 * 1
                        global.db.data.users[m.sender].exp += ce1 * 1
                        global.db.data.users[m.sender].potion += cp1 * 1
                        global.db.data.users[m.sender].uncommon += cu1 * 1
                        global.db.data.users[m.sender].common += cc1 * 1
                        conn.reply(m.chat, Hcom1, m)
                    } else conn.reply(m.chat, 'Common crate anda tidak cukup', m)
                    break
                case '100':
                    let _cm2 = `${Math.floor(Math.random() * 5000)}`.trim()
                    let _cc2 = `${Math.floor(Math.random() * 50)}`.trim()
                    let _cp2 = `${Math.floor(Math.random() * 20)}`.trim()
                    let _ce2 = `${Math.floor(Math.random() * 7500)}`.trim()
                    let _cu2 = `${Math.floor(Math.random() * 30)}`.trim()
                    let cm2 = (_cm2 * 1)
                    let cc2 = (_cc2 * 1)
                    let cp2 = (_cp2 * 1)
                    let ce2 = (_ce2 * 1)
                    let cu2 = (_cu2 * 1)
                    let Hcom2 = `
Anda telah membuka *Common crate* dan mendapatkan:${cm2 > 0 ? `\nMoney: ${cm2}` : ''}${ce2 > 0 ? `\nExp: ${ce2} *exp*` : ''}${cp2 > 0 ? `\nPotion: ${cp2} *potion*` : ''}${cc2 > 0 ? `\ncommon crate: ${cc2} *crate*` : ''}${cu2 > 0 ? `\nUncommon crate: ${cu2} *crate*` : ''}
`.trim()
                    if (global.db.data.users[m.sender].common >= 100) {
                        global.db.data.users[m.sender].common -= 100
                        global.db.data.users[m.sender].money += cm2 * 1
                        global.db.data.users[m.sender].exp += ce2 * 1
                        global.db.data.users[m.sender].potion += cp2 * 1
                        global.db.data.users[m.sender].uncommon += cu2 * 1
                        global.db.data.users[m.sender].common += cc2 * 1
                        conn.reply(m.chat, Hcom2, m)
                    } else conn.reply(m.chat, 'Common crate anda tidak cukup', m)
                    break
                case '1000':
                    let _cm3 = `${Math.floor(Math.random() * 50000)}`.trim()
                    let _cc3 = `${Math.floor(Math.random() * 350)}`.trim()
                    let _cp3 = `${Math.floor(Math.random() * 100)}`.trim()
                    let _ce3 = `${Math.floor(Math.random() * 80000)}`.trim()
                    let _cu3 = `${Math.floor(Math.random() * 200)}`.trim()
                    let cm3 = (_cm3 * 1)
                    let cc3 = (_cc3 * 1)
                    let cp3 = (_cp3 * 1)
                    let ce3 = (_ce3 * 1)
                    let cu3 = (_cu3 * 1)
                    let Hcom3 = `
Anda telah membuka *Common crate* dan mendapatkan:${cm3 > 0 ? `\nMoney: ${cm3}` : ''}${ce3 > 0 ? `\nExp: ${ce3} *exp*` : ''}${cp3 > 0 ? `\nPotion: ${cp3} *potion*` : ''}${cc3 > 0 ? `\ncommon crate: ${cc3} *crate*` : ''}${cu3 > 0 ? `\nUncommon crate: ${cu3} *crate*` : ''}
`.trim()
                    if (global.db.data.users[m.sender].common >= 1000) {
                        global.db.data.users[m.sender].common -= 1000
                        global.db.data.users[m.sender].money += cm3 * 1
                        global.db.data.users[m.sender].exp += ce3 * 1
                        global.db.data.users[m.sender].potion += cp3 * 1
                        global.db.data.users[m.sender].uncommon += cu3 * 1
                        global.db.data.users[m.sender].common += cc3 * 1
                        conn.reply(m.chat, Hcom3, m)
                    } else conn.reply(m.chat, 'Common crate anda tidak cukup', m)
                    break
                default:
                    return conn.reply(m.chat, Lmao, m)
            }
            break
        case 'uncommon':
            switch (jumlah) {
                case '1':
                case 'crate':
                    let _ud = `${Math.floor(Math.random() * 2)}`.trim()
                    let _ue = `${Math.floor(Math.random() * 100)}`.trim()
                    let _um = `${Math.floor(Math.random() * 150)}`.trim()
                    let _up = `${Math.floor(Math.random() * 2)}`.trim()
                    let _umc = `${Math.floor(Math.random() * 1)}`.trim()
                    let _uu = `${Math.floor(Math.random() * 2)}`.trim()
                    let _uc = `${Math.floor(Math.random() * 3)}`.trim()
                    let ud = (_ud * 1)
                    let ue = (_ue * 1)
                    let um = (_um * 1)
                    let up = (_up * 1)
                    let umc = (_umc * 1)
                    let uu = (_uu * 1)
                    let uc = (_uc * 1)
                    let Hun = `
Anda telah membuka *Uncommon crate* dan mendapatkan:${um > 0 ? `\nMoney: ${um}` : ''}${ue > 0 ? `\nExp: ${ue} *exp*` : ''}${ud > 0 ? `\nDiamond: ${ud} *diamond*` : ''}${up > 0 ? `\nPotion: ${up} *potion*` : ''}${uc > 0 ? `\nCommon crate: ${uc} *crate*` : ''}${uu > 0 ? `\nUncommon crate: ${uu} *crate*` : ''}
`.trim()
                    if (global.db.data.users[m.sender].uncommon >= 1) {
                        global.db.data.users[m.sender].uncommon -= 1
                        global.db.data.users[m.sender].money += um * 1
                        global.db.data.users[m.sender].diamond += ud * 1
                        global.db.data.users[m.sender].exp += ue * 1
                        global.db.data.users[m.sender].potion += up * 1
                        global.db.data.users[m.sender].common += uc * 1
                        global.db.data.users[m.sender].uncommon += uu * 1
                        conn.reply(m.chat, Hun, m)
                        if (umc > 0) {
                            m.reply(`*Selamat anda mendapatkan item Rare yaitu*\n${umc} Mythic Crate`)
                            global.db.data.users[m.sender].mythic += umc * 1
                        }
                    } else conn.reply(m.chat, 'Uncommon crate anda tidak cukup', m)
                    break
                case '10':
                    let _ud1 = `${Math.floor(Math.random() * 5)}`.trim()
                    let _ue1 = `${Math.floor(Math.random() * 750)}`.trim()
                    let _um1 = `${Math.floor(Math.random() * 400)}`.trim()
                    let _up1 = `${Math.floor(Math.random() * 7)}`.trim()
                    let _umc1 = `${Math.floor(Math.random() * 2)}`.trim()
                    let _uu1 = `${Math.floor(Math.random() * 4)}`.trim()
                    let _uc1 = `${Math.floor(Math.random() * 7)}`.trim()
                    let ud1 = (_ud1 * 1)
                    let ue1 = (_ue1 * 1)
                    let um1 = (_um1 * 1)
                    let up1 = (_up1 * 1)
                    let umc1 = (_umc1 * 1)
                    let uu1 = (_uu1 * 1)
                    let uc1 = (_uc1 * 1)
                    let Hun1 = `
Anda telah membuka *Uncommon crate* dan mendapatkan:${um1 > 0 ? `\nMoney: ${um1}` : ''}${ue1 > 0 ? `\nExp: ${ue1} *exp*` : ''}${ud1 > 0 ? `\nDiamond: ${ud1} *diamond*` : ''}${up1 > 0 ? `\nPotion: ${up1} *potion*` : ''}${uc1 > 0 ? `\nCommon crate: ${uc1} *crate*` : ''}${uu1 > 0 ? `\nUncommon crate: ${uu1} *crate*` : ''}
`.trim()
                    if (global.db.data.users[m.sender].uncommon >= 10) {
                        global.db.data.users[m.sender].uncommon -= 10
                        global.db.data.users[m.sender].money += um1 * 1
                        global.db.data.users[m.sender].diamond += ud1 * 1
                        global.db.data.users[m.sender].exp += ue1 * 1
                        global.db.data.users[m.sender].potion += up1 * 1
                        global.db.data.users[m.sender].common += uc1 * 1
                        global.db.data.users[m.sender].uncommon += uu1 * 1
                        conn.reply(m.chat, Hun1, m)
                        if (umc1 > 0) {
                            m.reply(`*Selamat anda mendapatkan item Rare yaitu*\n${umc1} Mythic Crate`)
                            global.db.data.users[m.sender].mythic += umc1 * 1
                        }
                    } else conn.reply(m.chat, 'Uncommon crate anda tidak cukup', m)
                    break
                case '100':
                    let _ud2 = `${Math.floor(Math.random() * 20)}`.trim()
                    let _ue2 = `${Math.floor(Math.random() * 8000)}`.trim()
                    let _um2 = `${Math.floor(Math.random() * 5000)}`.trim()
                    let _up2 = `${Math.floor(Math.random() * 20)}`.trim()
                    let _umc2 = `${Math.floor(Math.random() * 10)}`.trim()
                    let _uu2 = `${Math.floor(Math.random() * 25)}`.trim()
                    let _uc2 = `${Math.floor(Math.random() * 50)}`.trim()
                    let ud2 = (_ud2 * 1)
                    let ue2 = (_ue2 * 1)
                    let um2 = (_um2 * 1)
                    let up2 = (_up2 * 1)
                    let umc2 = (_umc2 * 1)
                    let uu2 = (_uu2 * 1)
                    let uc2 = (_uc2 * 1)
                    let Hun2 = `
Anda telah membuka *Uncommon crate* dan mendapatkan:${um2 > 0 ? `\nMoney: ${um2}` : ''}${ue2 > 0 ? `\nExp: ${ue2} *exp*` : ''}${ud2 > 0 ? `\nDiamond: ${ud2} *diamond*` : ''}${up2 > 0 ? `\nPotion: ${up2} *potion*` : ''}${uc2 > 0 ? `\nCommon crate: ${uc2} *crate*` : ''}${uu2 > 0 ? `\nUncommon crate: ${uu2} *crate*` : ''}
`.trim()
                    if (global.db.data.users[m.sender].uncommon >= 100) {
                        global.db.data.users[m.sender].uncommon -= 100
                        global.db.data.users[m.sender].money += um2 * 1
                        global.db.data.users[m.sender].diamond += ud2 * 1
                        global.db.data.users[m.sender].exp += ue2 * 1
                        global.db.data.users[m.sender].potion += up2 * 1
                        global.db.data.users[m.sender].common += uc2 * 1
                        global.db.data.users[m.sender].uncommon += uu2 * 1
                        conn.reply(m.chat, Hun2, m)
                        if (umc2 > 0) {
                            m.reply(`*Selamat anda mendapatkan item Rare yaitu*\n${umc2} Mythic Crate`)
                            global.db.data.users[m.sender].mythic += umc2 * 1
                        }
                    } else conn.reply(m.chat, 'Uncommon crate anda tidak cukup', m)
                    break
                case '1000':
                    let _ud3 = `${Math.floor(Math.random() * 50)}`.trim()
                    let _ue3 = `${Math.floor(Math.random() * 100000)}`.trim()
                    let _um3 = `${Math.floor(Math.random() * 50000)}`.trim()
                    let _up3 = `${Math.floor(Math.random() * 100)}`.trim()
                    let _umc3 = `${Math.floor(Math.random() * 100)}`.trim()
                    let _uu3 = `${Math.floor(Math.random() * 100)}`.trim()
                    let _uc3 = `${Math.floor(Math.random() * 200)}`.trim()
                    let ud3 = (_ud3 * 1)
                    let ue3 = (_ue3 * 1)
                    let um3 = (_um3 * 1)
                    let up3 = (_up3 * 1)
                    let umc3 = (_umc3 * 1)
                    let uu3 = (_uu3 * 1)
                    let uc3 = (_uc3 * 1)
                    let Hun3 = `
Anda telah membuka *Uncommon crate* dan mendapatkan:${um3 > 0 ? `\nMoney: ${um3}` : ''}${ue3 > 0 ? `\nExp: ${ue3} *exp*` : ''}${ud3 > 0 ? `\nDiamond: ${ud3} *diamond*` : ''}${up3 > 0 ? `\nPotion: ${up3} *potion*` : ''}${uc3 > 0 ? `\nCommon crate: ${uc3} *crate*` : ''}${uu3 > 0 ? `\nUncommon crate: ${uu3} *crate*` : ''}
`.trim()
                    if (global.db.data.users[m.sender].uncommon >= 1000) {
                        global.db.data.users[m.sender].uncommon -= 1000
                        global.db.data.users[m.sender].money += um3 * 1
                        global.db.data.users[m.sender].diamond += ud3 * 1
                        global.db.data.users[m.sender].exp += ue3 * 1
                        global.db.data.users[m.sender].potion += up3 * 1
                        global.db.data.users[m.sender].common += uc3 * 1
                        global.db.data.users[m.sender].uncommon += uu3 * 1
                        conn.reply(m.chat, Hun3, m)
                        if (umc3 > 0) {
                            m.reply(`*Selamat anda mendapatkan item Rare yaitu*\n${umc3} Mythic Crate`)
                            global.db.data.users[m.sender].mythic += umc3 * 1
                        }
                    } else conn.reply(m.chat, 'Uncommon crate anda tidak cukup', m)
                    break
                default:
                    return conn.reply(m.chat, Lmao ,m)
            }
            break
        case 'mythic':
            switch (jumlah) {
                case '1':
                case 'crate':
                    let _mm = `${Math.floor(Math.random() * 200)}`.trim()
                    let _mmm = `${pickRandom(['0', '0', '1', '0'])}`.trim()
                    let _me = `${Math.floor(Math.random() * 250)}`.trim()
                    let _mp = `${Math.floor(Math.random() * 3)}`.trim()
                    let _mu = `${Math.floor(Math.random() * 3)}`.trim()
                    let _mc = `${Math.floor(Math.random() * 5)}`.trim()
                    let _ml = `${pickRandom(['0', '0', '1', '0',  '0'])}`.trim()
                    let _md = `${Math.floor(Math.random() * 3)}`.trim()
                    let mm = (_mm * 1)
                    let mmm = (_mmm * 1)
                    let me = (_me * 1)
                    let mp = (_mp * 1)
                    let mu = (_mu * 1)
                    let mc = (_mc * 1)
                    let ml = (_ml * 1)
                    let md = (_md * 1)
                    let Mychat = `
Anda telah membuka *Mythic crate* dan mendapatkan:${mm > 0 ? `\nMoney: ${mm}` : ''}${me > 0 ? `\nExp: ${me} *exp*` : ''}${md > 0 ? `\nDiamond: ${md} *diamond*` : ''}${mp > 0 ? `\nPotion: ${mp} *potion*` : ''}${mc > 0 ? `\nCommon crate: ${mc} *crate*` : ''}${mu > 0 ? `\nUncommon crate: ${mu} *crate*` : ''}
`.trim()
                    if (global.db.data.users[m.sender].mythic >= 1) {
                        global.db.data.users[m.sender].mythic -= 1
                        global.db.data.users[m.sender].money += mm * 1
                        global.db.data.users[m.sender].diamond += md * 1
                        global.db.data.users[m.sender].exp += me * 1
                        global.db.data.users[m.sender].potion += mp * 1
                        global.db.data.users[m.sender].common += mc * 1
                        global.db.data.users[m.sender].uncommon += mu * 1
                        conn.reply(m.chat, Mychat, m)
                        if (mmm > 0) {
                            m.reply(`*Selamat anda mendapatkan item Rare yaitu*\n${mmm} Mythic Crate`)
                            global.db.data.users[m.sender].mythic += mmm * 1
                        }
                        if (ml > 0) {
                            m.reply(`*Selamat anda mendapatkan item Epic yaitu*\n${ml} Legendary Crate`)
                            global.db.data.users[m.sender].legendary += ml * 1
                        }
                    } else conn.reply(m.chat, 'Mythic crate anda tidak cukup', m)
                    break
                case '10':
                    let _mm1 = `${Math.floor(Math.random() * 2000)}`.trim()
                    let _mmm1 = `${Math.floor(Math.random() * 4)}`.trim()
                    let _me1 = `${Math.floor(Math.random() * 3000)}`.trim()
                    let _mp1 = `${Math.floor(Math.random() * 6)}`.trim()
                    let _mu1 = `${Math.floor(Math.random() * 6)}`.trim()
                    let _mc1 = `${Math.floor(Math.random() * 11)}`.trim()
                    let _ml1 = `${Math.floor(Math.random() * 1)}`.trim()
                    let _md1 = `${Math.floor(Math.random() * 5)}`.trim()
                    let mm1 = (_mm1 * 1)
                    let mmm1 = (_mmm1 * 1)
                    let me1 = (_me1 * 1)
                    let mp1 = (_mp1 * 1)
                    let mu1 = (_mu1 * 1)
                    let mc1 = (_mc1 * 1)
                    let ml1 = (_ml1 * 1)
                    let md1 = (_md1 * 1)
                    let Mychat1 = `
Anda telah membuka *Mythic crate* dan mendapatkan:${mm1 > 0 ? `\nMoney: ${mm1}` : ''}${me1 > 0 ? `\nExp: ${me1} *exp*` : ''}${md1 > 0 ? `\nDiamond: ${md1} *diamond*` : ''}${mp1 > 0 ? `\nPotion: ${mp1} *potion*` : ''}${mc1 > 0 ? `\nCommon crate: ${mc1} *crate*` : ''}${mu1 > 0 ? `\nUncommon crate: ${mu