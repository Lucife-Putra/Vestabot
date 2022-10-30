let levelling = require('../lib/levelling')
let fetch = require('node-fetch')
let path = require('path')
const moment = require("moment-timezone")
const time = moment.tz('Asia/Jakarta').format("HH:mm:ss")
let fs = require('fs')

const defaultMenu = { 
	before: `┏━┈┈⎆ 𝐈𝐍𝐅𝐎 𝐔𝐒𝐄𝐑
┆⎆ 𝐍𝐚𝐦𝐚 : *%name*
┆⎆ 𝐓𝐞𝐫𝐬𝐢𝐬𝐚 : *%limit* 𝐋𝐢𝐦𝐢𝐭
┆⎆ 𝐑𝐨𝐥𝐞 : *%role*
┆⎆ 𝐋𝐞𝐯𝐞𝐥 : *%level ( %exp / %maxexp )*
┆⎆ 𝐓𝐨𝐭𝐚𝐥 : *%totalexp 𝐄𝐱𝐩*
┗━───────⬣
┏━┈┈⎆ 𝐓𝐎𝐃𝐀𝐘
┆⧈ 𝐓𝐚𝐧𝐠𝐠𝐚𝐥 :  *%week %weton, %date* 
┆⧈ 𝐓𝐚𝐧𝐠𝐠𝐚𝐥 𝐈𝐬𝐥𝐚𝐦 :  *%dateIslamic* 
┆⧈ 𝐖𝐚𝐤𝐭𝐮 :  *%time* 
┗━───────⬣
┏━┈┈⎆ 𝐈𝐍𝐅𝐎 𝐁𝐎𝐓
┆⏣ 𝐍𝐚𝐦𝐚 𝐁𝐨𝐭 : *${botname}* 
┆⏣ 𝐑𝐮𝐧𝐭𝐢𝐦𝐞 : *%uptime ( %muptime )*
┆⏣ 𝐃𝐚𝐭𝐚𝐛𝐚𝐬𝐞 : %rtotalreg 𝐃𝐚𝐫𝐢 %totalreg 
┆⏣ 𝐓𝐨𝐭𝐚𝐥 :  - 𝐅𝐢𝐭𝐮𝐫
┆⏣ 𝐌𝐞𝐦𝐨𝐫𝐲 𝐔𝐬𝐞𝐝 : *${(process.memoryUsage().heapUsed / 1024 / 1024).toFixed(2)}MB / ${Math.round(require('os').totalmem / 1024 / 1024)}MB* 
┗━─────────⬣
%readmore`.trim(),
  header: '┌──⭓ %category\n┆',
  body: '┆⬡ %cmd %islimit %isPremium',
  footer: '┆\n└───────⭓\n',
  after: `${global.botname}
*𝐏𝐫𝐨𝐣𝐞𝐜𝐭 𝐢𝐧𝐢 𝐝𝐢𝐛𝐮𝐚𝐭 𝐨𝐥𝐞𝐡 ${global.ownername}
`,}

let handler = async (m, { conn, usedPrefix: _p, command: _q, args }) => {

let totalf = Object.values(global.plugins).filter(
    (v) => v.help && v.tags
  ).length;
let name = await conn.getName(m.sender) 
let tags
let teks = `${args[0]}`.toLowerCase()
let arrayMenu = ['all', 'sinfo', 'smain', 'stools', 'sberita', 'sxp', 'ssticker', 'seditor', 'sfun', 'sgame', 'skerang', 'sislam', 'sgroup', 'sdownloader', 'sabsen', 'sowner', 'sadvanced', 'sdatabase', 'srpg', 'sjadian', 'squotes', 'sinternet', 'snulis', 'saudio', 'sanime', 'srandom', 'ssound', 'sprem']
if (!arrayMenu.includes(teks)) teks = '404'
if (teks == 'all') tags = { 
'info': '𝐈𝐍𝐅𝐎 𝐌𝐄𝐍𝐔',
'main': '𝐌𝐀𝐈𝐍 𝐌𝐄𝐍𝐔',
'tools': '𝐓𝐎𝐎𝐋 𝐌𝐄𝐍𝐔',
'berita': '𝐁𝐄𝐑𝐈𝐓𝐀',
'xp': '𝐗𝐏 𝐌𝐄𝐍𝐔',
'sticker': '𝐒𝐓𝐈𝐂𝐊𝐄𝐑 𝐌𝐄𝐍𝐔',
'editor': '𝐄𝐃𝐈𝐓𝐎𝐑 𝐌𝐄𝐍𝐔',
'fun': '𝐅𝐔𝐍 𝐌𝐄𝐍𝐔',
'game': '𝐆𝐀𝐌𝐄 𝐌𝐄𝐍𝐔',
'kerang': '𝐊𝐄𝐑𝐀𝐍𝐆 𝐌𝐄𝐍𝐔',
'islam': '𝐈𝐒𝐋𝐀𝐌 𝐌𝐄𝐍𝐔',
'group': '𝐆𝐑𝐎𝐔𝐏 𝐌𝐄𝐍𝐔',
'downloader': '𝐃𝐎𝐖𝐍𝐋𝐎𝐀𝐃 𝐌𝐄𝐍𝐔',
'absen': '𝐀𝐁𝐒𝐄𝐍 𝐌𝐄𝐍𝐔',
'owner': '𝐎𝐖𝐍𝐄𝐑 𝐌𝐄𝐍𝐔',
'advanced': '𝐀𝐃𝐕𝐀𝐍𝐂𝐄𝐃 𝐌𝐄𝐍𝐔',
'database': '𝐃𝐀𝐓𝐀𝐁𝐀𝐒𝐄 𝐌𝐄𝐍𝐔',
'rpg': '𝐑𝐏𝐆 𝐌𝐄𝐍𝐔',
'jadian': '𝐉𝐀𝐃𝐈𝐀𝐍 𝐌𝐄𝐍𝐔',
'quotes': '𝐐𝐔𝐎𝐓𝐄𝐒 𝐌𝐄𝐍𝐔',
'internet': '𝐈𝐍𝐓𝐄𝐑𝐍𝐄𝐓 𝐌𝐄𝐍𝐔',
'nulis': '𝐍𝐔𝐋𝐈𝐒 𝐌𝐄𝐍𝐔',
'audio': '𝐀𝐔𝐃𝐈𝐎 𝐌𝐄𝐍𝐔',
'anime': '𝐃𝐄𝐖𝐀𝐒𝐀 𝐌𝐄𝐍𝐔', 
'random': '𝐑𝐀𝐍𝐃𝐎𝐌 𝐌𝐄𝐍𝐔',
'sound': '𝐒𝐎𝐔𝐍𝐃 𝐌𝐄𝐍𝐔',
}
if (teks == 'sinfo') tags = { 
'info': '𝐈𝐍𝐅𝐎 𝐌𝐄𝐍𝐔', 
}
if (teks == 'smain') tags = {
'main': '𝐌𝐀𝐈𝐍 𝐌𝐄𝐍𝐔',
}
if (teks == 'stools') tags = {
'tools': '𝐓𝐎𝐎𝐋 𝐌𝐄𝐍𝐔',
}
if (teks == 'sberita') tags = {
'berita': '𝐁𝐄𝐑𝐈𝐓𝐀',
}
if (teks == 'sgame') tags = {
'game': '𝐆𝐀𝐌𝐄 𝐌𝐄𝐍𝐔',
'rpg': '𝐑𝐏𝐆 𝐌𝐄𝐍𝐔',
'xp': '𝐗𝐏 𝐌𝐄𝐍𝐔', 
}
if (teks == 'srpg') tags = {
'rpg': '𝐑𝐏𝐆 𝐌𝐄𝐍𝐔',
}
if (teks == 'sxp') tags = {
'xp': '𝐗𝐏 𝐌𝐄𝐍𝐔', 
}
if (teks == 'sfun') tags = {
'fun': '𝐅𝐔𝐍 𝐌𝐄𝐍𝐔',
}
if (teks == 'ssticker') tags = {
'sticker': '𝐒𝐓𝐈𝐂𝐊𝐄𝐑 𝐌𝐄𝐍𝐔',
}
if (teks == 'seditor') tags = {
'editor': '𝐄𝐃𝐈𝐓𝐎𝐑 𝐌𝐄𝐍𝐔',
}
if (teks == 'skerang') tags = {
'kerang': '𝐊𝐄𝐑𝐀𝐍𝐆 𝐌𝐄𝐍𝐔',
}
if (teks == 'sislam') tags = {
'islam': '𝐈𝐒𝐋𝐀𝐌 𝐌𝐄𝐍𝐔',
}
if (teks == 'sgroup') tags = {
'group': '𝐆𝐑𝐎𝐔𝐏 𝐌𝐄𝐍𝐔',
}
if (teks == 'sdownloader') tags = {
'downloader': '𝐃𝐎𝐖𝐍𝐋𝐎𝐀𝐃 𝐌𝐄𝐍𝐔',
}
if (teks == 'sabsen') tags = {
'absen': '𝐀𝐁𝐒𝐄𝐍 𝐌𝐄𝐍𝐔',
}
if (teks == 'sowner') tags = {
'owner': '𝐎𝐖𝐍𝐄𝐑 𝐌𝐄𝐍𝐔',
}
if (teks == 'sadvanced') tags = {
'advanced': '𝐀𝐃𝐕𝐀𝐍𝐂𝐄𝐃 𝐌𝐄𝐍𝐔',
}
if (teks == 'sdatabase') tags = {
'database': '𝐃𝐀𝐓𝐀𝐁𝐀𝐒𝐄 𝐌𝐄𝐍𝐔',
}
if (teks == 'srpg') tags = {
'rpg': '𝐑𝐏𝐆 𝐌𝐄𝐍𝐔',
}
if (teks == 'sjadian') tags = {
'jadian': '𝐉𝐀𝐃𝐈𝐀𝐍 𝐌𝐄𝐍𝐔',
}
if (teks == 'squotes') tags = {
'quotes': '𝐐𝐔𝐎𝐓𝐄𝐒 𝐌𝐄𝐍𝐔',
}
if (teks == 'sinternet') tags = {
'internet': '𝐈𝐍𝐓𝐄𝐑𝐍𝐄𝐓 𝐌𝐄𝐍𝐔',
}
if (teks == 'snulis') tags = {
'nulis': '𝐍𝐔𝐋𝐈𝐒 𝐌𝐄𝐍𝐔',
}
if (teks == 'saudio') tags = {
'audio': '𝐀𝐔𝐃𝐈𝐎 𝐌𝐄𝐍𝐔',
}
if (teks == 'sanime') tags = {
'anime': '𝐃𝐄𝐖𝐀𝐒𝐀 𝐌𝐄𝐍𝐔', 
}
if (teks == 'srandom') tags = {
'random': '𝐑𝐀𝐍𝐃𝐎𝐌 𝐌𝐄𝐍𝐔',
}
if (teks == 'ssound') tags = {
'sound': '𝐒𝐎𝐔𝐍𝐃 𝐌𝐄𝐍𝐔',
}
if (teks == 'sprem') tags = { 
'premium': '𝐏𝐑𝐄𝐌𝐈𝐔𝐌 𝐌𝐄𝐍𝐔',
'gass': '𝐒𝐏𝐄𝐂𝐈𝐀𝐋 𝐌𝐄𝐍𝐔',
}
 
try { 
let package = JSON.parse(await fs.promises.readFile(path.join(__dirname, '../package.json')).catch(_ => '{}'))
let { exp, limit, age, money, level, role, registered } = global.db.data.users[m.sender]
let { min, xp, max } = levelling.xpRange(level, global.multiplier)
let umur = `*${age == '-1' ? 'Belum Daftar*' : age + '* Thn'}`

let d = new Date(new Date + 3600000)
let locale = 'id'
// d.getTimeZoneOffset()
// Offset -420 is 18.00
// Offset    0 is  0.00
// Offset  420 is  7.00
let weton = ['Pahing', 'Pon', 'Wage', 'Kliwon', 'Legi'][Math.floor(d / 84600000) % 5]
let week = d.toLocaleDateString(locale, { weekday: 'long' })
let date = d.toLocaleDateString(locale, {
day: 'numeric',
month: 'long',
year: 'numeric'
})
let dateIslamic = Intl.DateTimeFormat(locale + '-TN-u-ca-islamic', {
day: 'numeric',
month: 'long',
year: 'numeric'
}).format(d)
let time = d.toLocaleTimeString(locale, {
hour: 'numeric',
minute: 'numeric',
second: 'numeric'
})
let _uptime = process.uptime() * 1000
let _muptime
if (process.send) {
process.send('uptime')
_muptime = await new Promise(resolve => {
process.once('message', resolve)
setTimeout(resolve, 1000)
}) * 1000
}
let muptime = clockString(_muptime)
let uptime = clockString(_uptime)
global.jam = time
    
let totalreg = Object.keys(global.db.data.users).length
let rtotalreg = Object.values(global.db.data.users).filter(user => user.registered == true).length
let help = Object.values(global.plugins).filter(plugin => !plugin.disabled).map(plugin => {
return {
help: Array.isArray(plugin.help) ? plugin.help : [plugin.help],
tags: Array.isArray(plugin.tags) ? plugin.tags : [plugin.tags],
prefix: 'customPrefix' in plugin,
limit: plugin.limit,
premium: plugin.premium,
enabled: !plugin.disabled,
}
})

if (teks == '404') {

let ty = `Hi Kak @${m.sender.split('@')[0]}, ${ucapWaktu}`
//`Hallo Kak , ${ucapWaktu}\nSaya Adalah Bot Whatsapp,\nBot Yang Di Buat Dari Hasil Gabut ${ownername},\nApa Ada Yang Bisa Saya Bantu?\nSilahkan Click Button Di Bawah Ya Kak\nJangan Lupa Mandi Kak 😉`.trim()

let usrs = db.data.users[m.sender]

let totlf = Object.values(global.plugins).filter(
    (v) => v.help && v.tags
  ).length
 
let eh = global.opts['self'] ? 'Private' : 'Publik'

const tt = `
╔══════════════⏣
║☓ ${ucapWaktu}
╠══════════════⏣
║☓ 𝐖𝐚𝐤𝐭𝐮 : ${time} 𝐖𝐢𝐛
╚╗════════════╗
❖║▣ 𝐈 𝐍 𝐅 𝐎 -- 𝐁 𝐎 𝐓 ▣
╔╝════════════╝
║⏣ 𝐍𝐚𝐦𝐚 : ${botname}
║⏣ 𝐎𝐰𝐧𝐞𝐫 : ${ownername}
║⏣ 𝐔𝐩𝐭𝐢𝐦𝐞 : 
║⏣ 𝐔𝐬𝐞𝐫 : ${Object.keys(global.db.data.users).length}
║⏣ 𝐓𝐨𝐭𝐚𝐥 𝐅𝐢𝐭𝐮𝐫 : ${totlf}
║⏣ 𝐌𝐨𝐝𝐞 : ${eh}
║
╚╗════════════╗
❖║▣  𝐈 𝐍 𝐅 𝐎 -- 𝐔 𝐒 𝐄 𝐑 ▣
╔╝════════════╝
║⧈ 𝐍𝐚𝐦𝐚 : ${usrs.registered ? usrs.name : conn.getName(m.sender)}
║⧈ 𝐓𝐚𝐠𝐬 : @${m.sender.split`@`[0]}
║⧈ 𝐒𝐭𝐚𝐭𝐮𝐬 : ${m.sender.split`@`[0] == numb ? 'Developer' : (usrs.premiumTime >= 1 ? 'Premium User' : 'Free User')}
║⧈ 𝐏𝐫𝐞𝐦𝐢𝐮𝐦 : ${usrs.premiumTime > 1 ? 'Yes': 'No'}
║
╚════════════⏣
`.trim()
	
const mo = ['🎗️']
const mot = pickRandom(['🔖','⧈','⏣','🧧', '👻','⎔', '⭔', '◉', '⬟', '▢', '⛥', '✗', '⛊', '⚜', '⚝', '♪'])

const sections = [{
	title: `${htki} 𝐈 𝐍 𝐅 𝐎 ${htka}`,
	rows: [
	{ title: `${mot} 𝐎 𝐖 𝐍 𝐄 𝐑`, rowId: `${_p}owner`, description: `${mo} 𝐌𝐞𝐧𝐚𝐦𝐩𝐢𝐥𝐤𝐚𝐧 𝐍𝐨 𝐎𝐰𝐧𝐞𝐫`},
	
	{ title: `${mot} 𝐏 𝐈 𝐍 𝐆`, rowId: `${_p}ping`, description: `${mo} 𝐌𝐞𝐧𝐚𝐦𝐩𝐢𝐤𝐚𝐧 𝐊𝐞𝐜𝐞𝐩𝐚𝐭𝐚𝐧 𝐑𝐞𝐬𝐩𝐨𝐧 𝐁𝐨𝐭`},
	
	{ title: `${mot} 𝐒 𝐂 𝐑 𝐈 𝐏 𝐓`, rowId: `${_p}sc`, description: `${mo} 𝐒𝐜𝐫𝐢𝐩𝐭 𝐁𝐲 ${botname}`},
	]
	},{
	title: `${htki} 𝐌 𝐄 𝐍 𝐔 ${htka}`,
	rows: [
	{ title: `${mot} 𝐀𝐋𝐋𝐌𝐄𝐍𝐔`, rowId: `${_p}_ all`, description: `${mo} 𝐌𝐞𝐧𝐚𝐦𝐩𝐢𝐥𝐤𝐚𝐧 𝐒𝐞𝐦𝐮𝐚 𝐌𝐞𝐧𝐮 𝐁𝐨𝐭`},
	
	{ title: `${mot} 𝐌𝐀𝐈𝐍 𝐌𝐄𝐍𝐔`, rowId: `${_p}_ smain`, description: `${mo} 𝐌𝐞𝐧𝐚𝐦𝐩𝐢𝐥𝐤𝐚𝐧 𝐌𝐚𝐢𝐧 𝐌𝐞𝐧𝐮`},
	
	{ title: `${mot} 𝐌𝐄𝐍𝐔 𝐈𝐍𝐅𝐎`, rowId: `${_p}_ sinfo`, description: `${mo} 𝐌𝐞𝐧𝐚𝐦𝐩𝐢𝐥𝐤𝐚𝐧 𝐌𝐞𝐧𝐮 𝐈𝐧𝐟𝐨`},
	
	{ title: `${mot} 𝐌𝐄𝐍𝐔 𝐓𝐎𝐎𝐋𝐒`, rowId: `${_p}_ stools`, description: `${mo} 𝐌𝐞𝐧𝐚𝐦𝐩𝐢𝐥𝐤𝐚𝐧 𝐌𝐞𝐧𝐮 𝐓𝐨𝐨𝐥𝐬`},
	
	{ title: `${mot} 𝐌𝐄𝐍𝐔 𝐁𝐄𝐑𝐈𝐓𝐀`, rowId: `${_p}_ sberita`, description: `${mo} 𝐌𝐞𝐧𝐚𝐦𝐩𝐢𝐥𝐤𝐚𝐧 𝐌𝐞𝐧𝐮 𝐁𝐞𝐫𝐢𝐭𝐚`},
	
	{ title: `${mot} 𝐌𝐄𝐍𝐔 𝐗𝐏`, rowId: `${_p}_ sxp`, description: `${mo} 𝐌𝐞𝐧𝐚𝐦𝐩𝐢𝐥𝐤𝐚𝐧 𝐌𝐞𝐧𝐮 𝐗𝐩`},
	
	{ title: `${mot} 𝐌𝐄𝐍𝐔 𝐆𝐀𝐌𝐄`, rowId: `${_p}_ sgame`, description: `${mo} 𝐌𝐞𝐧𝐚𝐦𝐩𝐢𝐥𝐤𝐚𝐧 𝐌𝐞𝐧𝐮 𝐆𝐚𝐦𝐞`},
	
	{ title: `${mot} 𝐌𝐄𝐍𝐔 𝐅𝐔𝐍`, rowId: `${_p}_ sfun`, description: `${mo} 𝐌𝐞𝐧𝐚𝐦𝐩𝐢𝐥𝐤𝐚𝐧 𝐌𝐞𝐧𝐮 𝐅𝐮𝐧`},
	
	{ title: `${mot} 𝐌𝐄𝐍𝐔 𝐒𝐓𝐈𝐂𝐊𝐄𝐑`, rowId: `${_p}_ ssticker`, description: `${mo} 𝐌𝐞𝐧𝐚𝐦𝐩𝐢𝐥𝐤𝐚𝐧 𝐌𝐞𝐧𝐮 𝐒𝐭𝐢𝐜𝐤𝐞𝐫`},
	
	{ title: `${mot} 𝐌𝐄𝐍𝐔 𝐄𝐃𝐈𝐓𝐎𝐑`, rowId: `${_p}_ seditor`, description: `${mo} 𝐌𝐞𝐧𝐚𝐦𝐩𝐢𝐥𝐤𝐚𝐧 𝐌𝐞𝐧𝐮 𝐄𝐝𝐢𝐭𝐨𝐫`},
	
	{ title: `${mot} 𝐌𝐄𝐍𝐔 𝐊𝐄𝐑𝐀𝐍𝐆`, rowId: `${_p}_ skerang`, description: `${mo} 𝐌𝐞𝐧𝐚𝐦𝐩𝐢𝐥𝐤𝐚𝐧 𝐌𝐞𝐧𝐮 𝐊𝐞𝐫𝐚??𝐠`},
	
	{ title: `${mot} 𝐌𝐄𝐍𝐔 ??𝐒𝐋𝐀𝐌`, rowId: `${_p}_ sislam`, description: `${mo} 𝐌𝐞𝐧𝐚𝐦𝐩𝐢𝐥𝐤𝐚𝐧 𝐌𝐞𝐧𝐮 𝐈𝐬𝐥𝐚𝐦`},
	
	{ title: `${mot} 𝐌𝐄𝐍𝐔 𝐆𝐑𝐎𝐔𝐏`, rowId: `${_p}_ sgroup`, description: `${mo} 𝐌𝐞𝐧𝐚𝐦𝐩𝐢𝐥𝐤𝐚𝐧 𝐌𝐞𝐧𝐮 𝐆𝐫𝐨𝐮𝐩`},
	
	{ title: `${mot} 𝐌𝐄𝐍𝐔 𝐃𝐎𝐖𝐍𝐋𝐎𝐀𝐃`, rowId: `${_p}_ sdownloader`, description: `${mo} 𝐌𝐞𝐧𝐚𝐦𝐩𝐢𝐥𝐤𝐚𝐧 𝐌𝐞𝐧𝐮 𝐃𝐨𝐰𝐧𝐥𝐨𝐚𝐝`},
	
	{ title: `${mot} 𝐌𝐄𝐍𝐔 𝐀𝐁𝐒𝐄𝐍`, rowId: `${_p}_ sabsen`, description: `${mo} 𝐌𝐞𝐧𝐚𝐦𝐩𝐢𝐥𝐤𝐚𝐧 𝐌𝐞𝐧𝐮 𝐀𝐛𝐬𝐞𝐧`},
	
	{ title: `${mot} 𝐌𝐄𝐍𝐔 𝐎𝐖𝐍𝐄𝐑`,rowId: `${_p}_ sowner`, description: `${mo} 𝐌𝐞𝐧𝐚𝐦𝐩𝐢𝐥𝐤𝐚𝐧 𝐌𝐞𝐧𝐮 𝐎𝐰𝐧𝐞𝐫`},
	
	{ title: `${mot} 𝐌𝐄𝐍𝐔 𝐀𝐃𝐕𝐀𝐍𝐂𝐄𝐃`, rowId: `${_p}_ sadvanced`, description: `${mo} 𝐌𝐞𝐧𝐚𝐦𝐩𝐢𝐥𝐤𝐚𝐧 𝐌𝐞𝐧𝐮 𝐀𝐝𝐯𝐚𝐧𝐜𝐞𝐝`},
	
	{ title: `${mot} 𝐌𝐄𝐍𝐔 𝐃𝐀𝐓𝐀𝐁𝐀𝐒𝐄 `, rowId: `${_p}_ sdatabase`, description: `${mo} 𝐌𝐞𝐧𝐚𝐦𝐩𝐢𝐥𝐤𝐚𝐧 𝐌𝐞𝐧𝐮 𝐃𝐚𝐭𝐚𝐛𝐚𝐬𝐞`},
	
	{ title: `${mot} 𝐌𝐄𝐍𝐔 𝐑𝐏𝐆`, rowId: `${_p}_ srpg`, description: `${mo} 𝐌𝐞𝐧𝐚𝐦𝐩𝐢𝐥𝐤𝐚𝐧 𝐌𝐞𝐧𝐮 𝐑𝐩𝐠`},
	
	{ title: `${mot} 𝐌𝐄𝐍𝐔 𝐉𝐀𝐃𝐈𝐀𝐍`, rowId: `${_p}_ sjadian`, description: `${mo} 𝐌𝐞𝐧𝐚𝐦𝐩𝐢𝐥𝐤𝐚𝐧 𝐌𝐞𝐧𝐮 𝐉𝐚𝐝𝐢𝐚𝐧`},
	
	{ title: `${mot} 𝐌𝐄𝐍𝐔 𝐐𝐔𝐎𝐓𝐄𝐒`, rowId: `${_p}_ squotes`, description: `${mo} 𝐌𝐞𝐧𝐚𝐦𝐩𝐢𝐥𝐤𝐚𝐧 𝐌𝐞𝐧𝐮 𝐐𝐮𝐨𝐭𝐞𝐬`},
	
	{ title: `${mot} 𝐌𝐄𝐍𝐔 𝐈𝐍𝐓𝐄𝐑𝐍𝐄𝐓`, rowId: `${_p}_ sinternet`, description: `${mo} 𝐌𝐞𝐧𝐚𝐦𝐩𝐢𝐥𝐤𝐚𝐧 𝐌𝐞𝐧𝐮 𝐈𝐧𝐭𝐞𝐫𝐧𝐞𝐭`},
	
	{ title: `${mot} 𝐌𝐄𝐍𝐔 𝐍𝐔𝐋𝐈𝐒 `, rowId: `${_p}_ snulis`, description: `${mo} 𝐌𝐞𝐧𝐚𝐦𝐩𝐢𝐥𝐤𝐚𝐧 𝐌𝐞𝐧𝐮 𝐍𝐮𝐥𝐢𝐬`},
	
	{ title: `${mot} 𝐌𝐄𝐍𝐔 𝐀𝐔𝐃𝐈𝐎`, rowId: `${_p}_ saudio`, description: `${mo} 𝐌𝐞𝐧𝐚𝐦𝐩𝐢𝐥𝐤𝐚𝐧 𝐌𝐞𝐧𝐮 𝐀𝐮𝐝𝐢𝐨`},
	
	{ title: `${mot} 𝐌𝐄𝐍𝐔 𝐃𝐄𝐖𝐀𝐒𝐀`, rowId: `${_p}_ sanime`, description: `${mo} 𝐌𝐞𝐧𝐚𝐦𝐩𝐢𝐥𝐤𝐚𝐧 𝐌𝐞𝐧𝐮 𝐃𝐞𝐰𝐚𝐬𝐚`},
	
	{ title: `${mot} 𝐌𝐄𝐍𝐔 𝐑𝐀𝐍𝐃𝐎𝐌`, rowId: `${_p}_ srandom`, description: `${mo} 𝐌𝐞𝐧𝐚𝐦𝐩𝐢𝐥𝐤𝐚𝐧 𝐌𝐞𝐧𝐮 𝐑𝐚𝐧𝐝𝐨𝐦`},
	
	{ title: `${mot} 𝐌𝐄𝐍𝐔 𝐒𝐎𝐔𝐍𝐃`, rowId: `${_p}_ ssound`, description: `${mo} 𝐌𝐞𝐧𝐚𝐦𝐩𝐢𝐥𝐤𝐚𝐧 𝐌𝐞𝐧𝐮 𝐒𝐨𝐮𝐧𝐝`},
	
	{ title: `${mot} 𝐌𝐄𝐍𝐔 𝐏𝐑𝐄𝐌𝐈𝐔𝐌`, rowId: `${_p}_ sprem`, description: `${mo} 𝐌𝐞𝐧𝐚𝐦𝐩𝐢𝐥𝐤𝐚𝐧 𝐌𝐞𝐧𝐮 𝐏𝐫𝐞𝐦𝐢𝐮𝐦`},
	
	{ title: `${mot} Masih Di Recode`, rowId: `gada`},
	]
	},
	]
// `      ▣  𝐋 𝐈 𝐒 𝐓 -- 𝐌 𝐄 𝐍 𝐔 ▣`,
const listMessage = {
text: tt,//tengah
footer: wm, //bawah
mentions: '',
title: '', //atas
buttonText: "Pencet Ngab",
sections
}

return conn.sendMessage(m.chat, listMessage, { quoted: m, contextInfo: { forwardingScore: 99999, isForwarded: true }})
}

let groups = {}
for (let tag in tags) {
groups[tag] = []
for (let plugin of help)
if (plugin.tags && plugin.tags.includes(tag))
if (plugin.help) groups[tag].push(plugin)
}

conn.menu = conn.menu ? conn.menu : {}
let before = conn.menu.before || defaultMenu.before
let header = conn.menu.header || defaultMenu.header
let body = conn.menu.body || defaultMenu.body
let footer = conn.menu.footer || defaultMenu.footer
let after = conn.menu.after || (conn.user.jid == global.conn.user.jid ? '' : `Dipersembahkan oleh https://wa.me/${global.conn.user.jid.split`@`[0]}`) + defaultMenu.after
 
let _text = [
before,
...Object.keys(tags).map(tag => {
return header.replace(/%category/g, tags[tag]) + '\n' + [
...help.filter(menu => menu.tags && menu.tags.includes(tag) && menu.help).map(menu => {
return menu.help.map(help => {
return body.replace(/%cmd/g, menu.prefix ? help : '%p' + help)
.replace(/%islimit/g, menu.limit ? '(Ⓛ)' : '')
.replace(/%isPremium/g, menu.premium ? '(Ⓟ)' : '')
.trim()
}).join('\n')
}),
footer
].join('\n')
}),
after
].join('\n')
// Cape Anjim... AwokAwokAwokAok

text = typeof conn.menu == 'string' ? conn.menu : typeof conn.menu == 'object' ? _text : ''
let replace = {
'%': '%',
ucapan: global.ucapan,
p: _p, uptime, muptime,
me: conn.user.name,
npmname: package.name,
npmdesc: package.description,
version: package.version,
exp: exp - min,
maxexp: xp,
totalexp: exp,
xp4levelup: max - exp <= 0 ? `Siap untuk *${_p}levelup*` : `${max - exp} XP lagi untuk levelup`,
github: package.homepage ? package.homepage.url || package.homepage : '[unknown github url]',
level, limit, name, umur, money, age, weton, week, date, dateIslamic, time, totalreg, rtotalreg, role,
readmore: readMore
}

text = text.replace(new RegExp(`%(${Object.keys(replace).sort((a, b) => b.length - a.length).join`|`})`, 'g'), (_, name) => '' + replace[name])

await conn.send2ButtonImg(m.chat, thumb, text, wm, '𝐏 𝐈 𝐍 𝐆', '.ping', '𝐎 𝐖 𝐍 𝐄 𝐑', '.owner', m)

} catch (e) {
conn.sendButtonDoc(m.chat, '𝐄𝐑𝐑𝐎𝐑\n𝐈𝐍𝐈 𝐒𝐄𝐌𝐔𝐀 𝐒𝐀𝐋𝐀𝐇 𝐎𝐖𝐍𝐄𝐑 😒\n', wm, '𝐎𝐖𝐍𝐄𝐑', '.owner', m)
throw e
}

}  
handler.help = ['listmenu']
handler.tags = ['main']
handler.command = /^(listmenu|anu|command|\_)$/i

handler.register = regist

module.exports = handler

const more = String.fromCharCode(8206)
const readMore = more.repeat(4001)

function clockString(ms) {
  let h = isNaN(ms) ? '--' : Math.floor(ms / 3600000)
  let m = isNaN(ms) ? '--' : Math.floor(ms / 60000) % 60
  let s = isNaN(ms) ? '--' : Math.floor(ms / 1000) % 60
  return [h, m, s].map(v => v.toString().padStart(2, 0)).join(':')
}

function pickRandom(list) {
  return list[Math.floor(list.length * Math.random())]
}