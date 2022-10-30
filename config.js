//========================================//
// ==> Settingan Module
let fs = require('fs')
let chalk = require('chalk')
let fetch = require('node-fetch')
//========================================//
// ==> Settingan Bot
global.owner = [['6289530291942', 'M𝙰𝚁𝚂𝙰𝙽𝙳𝙸', true]]
global.numb = ['6289530291942']
global.ownername = 'M𝙰𝚁𝚂𝙰𝙽𝙳𝙸'
global.botname = '𝐕𝐞𝐬𝐭𝐚 𝐁𝐨𝐭 -𝐌𝐃'
global.wm = `❦ ${botname}`
// ❦ 𝐕𝐞𝐬𝐭𝐚 𝐁𝐨𝐭 -𝐌𝐃'
global.wem = '✘𝐕𝐄𝐒𝐓𝐀 𝐂𝐑𝐀𝐒𝐇 𝐈𝐍𝐅𝐈𝐍𝐈𝐓𝐘'
global.mods = []
global.prems = []
//========================================//
// ==> Settingan Apikey
global.APIs = {
xteam: 'https://api.xteam.xyz'
}
global.APIKeys = {
'https://api.xteam.xyz': 'ebb6251cc00f9c63'
}
global.apixteam = 'ebb6251cc00f9c63'
global.apilolkey = 'gada'
//========================================//
// ==> Settingan Run
process.env['NODE_TLS_REJECT_UNAUTHORIZED'] = 0
global.sessionName= './VestaBotMd'
//========================================//
// ==> Image Bot
global.thumb = fs.readFileSync('./src/img/thumb4.jpg') // Thumb Menu
global.thumb2 = fs.readFileSync('./src/img/thumb3.jpg') // Thumb MenuWar
global.thumb3 = fs.readFileSync('./src/img/thumb.jpg') //Thumb AdReply
//========================================//
// ==> Settingan Limits
global.lmt = 5
global.lmt1 = 10
global.lmt2 = 15
global.lmt3 = 20
global.regist = true
global.registt = false
//============= Games ================//
global.benar = '_*Benar*_✅'
global.salah = '_*Salah*_❌'
global.dikit = "dikit lagi"

global.htki = '––––––『' // Hiasan Titile (KIRI)
global.htka = '』––––––' // Hiasan Title  (KANAN)
global.hki = '▣═━–〈' // Hiasan Header atas ( Kiri )
global.hka = '〉–━═▣' // Hiasan Header atas ( kanan )
global.hdi = '┊' // Hiasan Header ( Body )
global.hbw = '┗–––––––––––━═▣' // Hiasan Header ( Bawah )
//========================================//
// ==> Settingan Rpg
global.multiplier = 69 // The higher, The harder levelup'
//========================================//
// ==> Settingan Button
global.dtu = '𝐆𝐫𝐨𝐮𝐩 𝐁𝐨𝐭'
global.urlnya = 'https://chat.whatsapp.com/'
global.ig = 'https://instagram.com/marmarsandi'
global.gh = 'https://github.com/DeathBack-uhuy'
global.dtc = '𝐂𝐚𝐥𝐥 𝐎𝐰𝐧𝐞𝐫'
global.phn = '+62 895-3029-1942'
//========================================//
// ==> Settingan Sticker
global.packname = `🎗 𝐂𝐫𝐞𝐚𝐭𝐞𝐝 𝐁𝐲`
global.author = `${botname}`
//========================================//
// ==> Settingan File
let file = require.resolve(__filename)
fs.watchFile(file, () => {
fs.unwatchFile(file)
console.log(chalk.redBright("Update 'config.js'"))
delete require.cache[file]
require(file)
})
//========================================//