global.owner = ['6285794908894']  
global.mods = ['6285794908894'] 
global.prems = ['6285794908894']
global.nameowner = 'Iky𝖔𝖋𝖋𝖎𝖈𝖎𝖆𝖑ཽ'
global.numberowner = '6285794908894' 
global.mail = '?' 
global.gc = 'https://chat.whatsapp.com/GbNiwLK3R9y4pOUFDW5eAQ'
global.instagram = '@iky_alwaysgood'
global.wm = '© Kιɳα Bσƚ'
global.wait = '_*tunggu sєdαng díprσsєs ...*_'
global.eror = '_*sєrvєr єrrσr*_'
global.stiker_wait = '_*⫹⫺ stíckєr sєdαng díвuαt ...*_'
global.packname = 'mαdє wíth'
global.author = 'Iky𝖔𝖋𝖋𝖎𝖈𝖎𝖆𝖑ཽ'
global.maxwarn = '2' // Peringatan maksimum

//INI WAJIB DI ISI!//
global.btc = 'YOUR_API_KEY' 
//Daftar terlebih dahulu https://api.botcahx.eu.org
global.lolkey = 'GataDios'
global.xkey = 'd90a9e986e18778b'
global.xzn = 'konekocyz'
global.lann = 'p8ADYJib'
global.xyro = '3WIq7q3CWt'
global.btc = 'ikyalwaysgood'
global.xteam = 'MIMINETBOT'
global.Zeks = 'apivinz'
global.Caliph = 'FreeApi'
global.ZeksApi = 'PmzFe9Hq4xYdwha6pxiXd9jgLnh'
global.vhtear = 'LoliHunter'
global.apiKey = '7ed90d537ab5edddb6ba6465'
global.BarBarKey = 'IDxO1TFYnKADlX4pxcHa'
global.lann = '5G4Gdi67'


global.APIs = {   
  btc: 'https://api.botcahx.eu.org',
  lol: 'https://api.lolhuman.xyz', 
  xzn: 'https://skizo.tech',
  lann: 'https://api.betabotz.org', 
  xyro: 'https://api.xyroinee.xyz',
  btc: 'https://api.botcahx.eu.org',
  xteam: 'https://api.xteam.xyz',
  Zeks: 'https://api.zeks.xyz',
  Caliph: 'https://caliphapi.com',
  ZeksApi: 'https://api.zeks.xyz',
  vhtear: 'https://api.vhtear.com',
  apiKey: 'https://api.zeks.xyz',
  BarBarkey: 'https://api.barbar.moe'
}
global.APIKeys = { 
  'https://api.botcahx.eu.org': 'YOUR_API_KEY',
  'https://api.lolhuman.xyz': 'GataDios',
  'https://skizo.tech': 'konekocyz', 
  'https://api.betabotz.org': 'p8ADYJib', 
  'https://api.xyroinee.xyz': '3WIq7q3CWt', 
  'https://api.botcahx.eu.org': 'ikyalwaysgood', 
  'https://api.xteam.xyz': 'MIMINETBOT', 
  'https://api.zeks.xyz': 'apivinz', 
  'https://caliphapi.com': 'FreeApi', 
  'https://api.zeks.xyz': 'PmzFe9Hq4xYdwha6pxiXd9jgLnh',
  'https://api.vhtear.com': 'LoliHunter', 
  'https://api.zeks.xyz': '7ed90d537ab5edddb6ba6465',
  'https://api.barbar.moe': 'IDxO1TFYnKADlX4pxcHa'
}

let fs = require('fs')
let chalk = require('chalk')
let file = require.resolve(__filename)
fs.watchFile(file, () => {
  fs.unwatchFile(file)
  console.log(chalk.redBright("Update 'config.js'"))
  delete require.cache[file]
  require(file)
})