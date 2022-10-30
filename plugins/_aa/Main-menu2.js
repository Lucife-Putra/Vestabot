/*
let PhoneNumber = require('awesome-phonenumber') 
let moment = require('moment-timezone') 
let fetch = require('node-fetch') 
//let jimp = require('jimp') 
let path = require('path') 
let fs = require('fs') 
let levelling = require('../lib/levelling') 


let handler = async(m, { conn, usedPrefix: _p, args, command }) => { 

const defaultMenu = { 
   before:`
┏━┈┈『 𝐔𝐒𝐄𝐑 』┈┈⬣
┆⎆ Name : *%name*
┆⎆ Tersisa : *%limit Limit*
┆⎆ Role : *%role*
┆⎆ Level : *%level ( %exp / %maxexp )*
┆⎆ Total : *%totalexp Exp*
┣━─────────⬣
┃   【 ${wm} 】
┣━┈┈『 𝐓𝐎𝐃𝐀𝐘 』┈┈⬣
┆⧈ Tanggal :  *%week %weton, %date* 
┆⧈ Tanggal Islam:  *%dateIslamic* 
┆⧈ Waktu:  *%time* 
┣━─────────⬣
┃   【 ${wm} 】
┣━┈┈『 𝐁𝐎𝐓 』┈┈⬣
┆⏣ Name Bot : *${botname}*
┆⏣ Uptime : *%uptime ( %muptime )*
┆⏣ Database : 
┆⏣ Memory Used : *${(process.memoryUsage().heapUsed / 1024 / 1024).toFixed(2)}MB / ${Math.round(require('os').totalmem / 1024 / 1024)}MB* 
┗━───────⬣
%readmore`.trim(),
	header: '┌──⭓ %category',
	body: '│⭔ %cmd %islimit %isPremium',
	footer: `└───────⭓`,
	after: `${global.botname}
*𝐏𝐫𝐨𝐣𝐞𝐜𝐭 𝐢𝐧𝐢 𝐝𝐢𝐛𝐮𝐚𝐭 𝐨𝐥𝐞𝐡 ${global.ownername}
`,}

	let tags 
	let teks = `${args[0]}`.toLowerCase() 
	let array = ['all', 'info', 'main', 'tools', 'berita', 'xp', 'sticker', 'editor', 'fun', 'game', 'kerang', 'islam', 'group', 'downloader', 'absen', 'owner', 'advanced', 'database', 'rpg', 'jadian', 'quotes', 'internet', 'nulis', 'audio', 'anime', 'random']
	
	if (!array.includes(teks)) teks = '404' 
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
	}
	if (teks == 'info') tags = { 
	'info': '𝐈𝐍𝐅𝐎 𝐌𝐄𝐍𝐔', 
	}
	if (teks == 'main') tags = {
	'main': '𝐌𝐀𝐈𝐍 𝐌𝐄𝐍𝐔',
	}
	if (teks == 'tools') tags = {
	'tools': '𝐓𝐎𝐎𝐋 𝐌𝐄𝐍𝐔',
	}
	if (teks == 'berita') tags = {
	'berita': '𝐁𝐄𝐑𝐈𝐓𝐀',
	}
	if (teks == 'xp') tags = {
	'xp': '𝐗𝐏 𝐌𝐄𝐍𝐔', 
	}
	if (teks == 'sticker') tags = {
	'sticker': '𝐒𝐓𝐈𝐂𝐊𝐄𝐑 𝐌𝐄𝐍𝐔',
	}
	if (teks == 'editor') tags = {
	'editor': '𝐄𝐃𝐈𝐓𝐎𝐑 𝐌𝐄𝐍𝐔',
	}
	if (teks == 'fun') tags = {
	'fun': '𝐅𝐔𝐍 𝐌𝐄𝐍𝐔',
	}
	if (teks == 'game') tags = {
	'game': '𝐆𝐀𝐌𝐄 𝐌𝐄𝐍𝐔',
	}
	if (teks == 'kerang') tags = {
	'kerang': '𝐊𝐄𝐑𝐀𝐍𝐆 𝐌𝐄𝐍𝐔',
	}
	if (teks == 'islam') tags = {
	'islam': '𝐈𝐒𝐋𝐀𝐌 𝐌𝐄𝐍𝐔',
	}
	if (teks == 'group') tags = {
	'group': '𝐆𝐑𝐎𝐔𝐏 𝐌𝐄𝐍𝐔',
	}
	if (teks == 'downloader') tags = {
	'downloader': '𝐃𝐎𝐖𝐍𝐋𝐎𝐀𝐃 𝐌𝐄𝐍𝐔',
	}
	if (teks == 'absen') tags = {
	'absen': '𝐀𝐁𝐒𝐄𝐍 𝐌𝐄𝐍𝐔',
	}
	if (teks == 'owner') tags = {
	'owner': '𝐎𝐖𝐍𝐄𝐑 𝐌𝐄𝐍𝐔',
	}
	if (teks == 'advanced') tags = {
	'advanced': '𝐀𝐃𝐕𝐀𝐍𝐂𝐄𝐃 𝐌𝐄𝐍𝐔',
	}
	if (teks == 'database') tags = {
	'database': '𝐃𝐀𝐓𝐀𝐁𝐀𝐒𝐄 𝐌𝐄𝐍𝐔',
	}
	if (teks == 'rpg') tags = {
	'rpg': '𝐑𝐏𝐆 𝐌𝐄𝐍𝐔',
	}
	if (teks == 'jadian') tags = {
	'jadian': '𝐉𝐀𝐃𝐈𝐀𝐍 𝐌𝐄𝐍𝐔',
	}
	if (teks == 'quotes') tags = {
	'quotes': '𝐐𝐔𝐎𝐓𝐄𝐒 𝐌𝐄𝐍𝐔',
	}
	if (teks == 'internet') tags = {
	'internet': '𝐈𝐍𝐓𝐄𝐑𝐍𝐄𝐓 𝐌𝐄𝐍𝐔',
	}
	if (teks == 'nulis') tags = {
	'nulis': '𝐍𝐔𝐋𝐈𝐒 𝐌𝐄𝐍𝐔',
	}
	if (teks == 'audio') tags = {
	'audio': '𝐀𝐔𝐃𝐈𝐎 𝐌𝐄𝐍𝐔',
	}
	if (teks == 'anime') tags = {
	'anime': '𝐃𝐄𝐖𝐀𝐒𝐀 𝐌𝐄𝐍𝐔', 
	}
	if (teks == 'random') tags ={
	'random': '𝐑𝐀𝐍𝐃𝐎𝐌 𝐌𝐄𝐍𝐔',
	}
	
	try { 
	let hao = `▸ Ⓟ = for premium users.\n▸ Ⓛ = fitur berlimit.`

let who = m.mentionedJid && m.mentionedJid[0] ? m.mentionedJid[0] : m.fromMe ? conn.user.jid : m.sender

let pp = await conn.profilePictureUrl(who, 'image').catch((_) => "https://telegra.ph/file/2d06f0936842064f6b3bb.png")

let package = JSON.parse(await fs.promises.readFile(path.join(__dirname, '../package.json')).catch(_ => '{}')) 

let { exp, limit, age, money, level, role, registered } = global.db.data.users[m.sender] 

let { min, xp, max } = levelling.xpRange(level, global.multiplier) 

let name = registered ? global.db.data.users[m.sender].name : conn.getName(m.sender) 

let d = new Date(new Date + 3600000) 

let locale = 'id' 

// d.getTimeZoneOffset() 
// Offset -420 is 18.00 
// Offset    0 is  0.00 
// Offset  420 is  7.00 

let weton = ['Pahing', 'Pon', 'Wage', 'Kliwon', 'Legi'][Math.floor(d / 84600000) % 5] 

let week = d.toLocaleDateString(locale, { weekday: 'long' }) 

let date = d.toLocaleDateString(locale, { 
	day: 'numeric',
	month: 'long', 
	year: 'numeric' 
})

let dateIslamic = Intl.DateTimeFormat(locale + '-TN-u-ca-islamic', { 
	day: 'numeric', 
	month: 'long', 
	year: 'numeric' 
}).format(d) 

let time = d.toLocaleTimeString(locale, { 
	hour: 'numeric', 
	minute: 'numeric', 
	second: 'numeric' 
}) 

let wib = moment.tz('Asia/Jakarta').format('HH:mm:ss') 
let wibh = moment.tz('Asia/Jakarta').format('HH') 
let wibm = moment.tz('Asia/Jakarta').format('mm') 
let wibs = moment.tz('Asia/Jakarta').format('ss') 
let wit = moment.tz('Asia/Jayapura').format('HH:mm:ss') 
let wita = moment.tz('Asia/Makassar').format('HH:mm:ss') 
let wktuwib = `${wibh} H ${wibm} M ${wibs} S` 

let pe = '```' 
let { premium, premiumTime } = global.db.data.users[m.sender] 
let _uptime = process.uptime() * 1000 
let _muptime 
if (process.send) { 
process.send('uptime') 
_muptime = await new Promise(resolve => { 
process.once('message', resolve) 
setTimeout(resolve, 1000) 
}) * 1000 
} 

     let muptime = clockString(_muptime) 
     let uptime = clockString(_uptime) 
     global.jam = time 
     let totalreg = Object.keys(global.db.data.users).length 
     let rtotalreg = Object.values(global.db.data.users).filter(user => user.registered == true).length 
     let help = Object.values(global.plugins).filter(plugin => !plugin.disabled).map(plugin => { 
       return { 
         help: Array.isArray(plugin.help) ? plugin.help : [plugin.help], 
         tags: Array.isArray(plugin.tags) ? plugin.tags : [plugin.tags], 
         prefix: 'customPrefix' in plugin, 
         limit: plugin.limit, 
         premium: plugin.premium, 
         enabled: !plugin.disabled, 
       } 
     }) 

if (teks == '404') {
	
	return conn.send2ButtonImg(m.chat, thumb, 'Test', wm, 'allmenu', '.allmenu', 'simplemenu', '.simplemenu', m)
}


 let groups = {} 
     for (let tag in tags) { 
       groups[tag] = [] 
       for (let plugin of help) 
         if (plugin.tags && plugin.tags.includes(tag)) 
           if (plugin.help) groups[tag].push(plugin) 
     } 
     conn.menu = conn.menu ? conn.menu : {} 
     let before = conn.menu.before || defaultMenu.before 
     let header = conn.menu.header || defaultMenu.header 
     let body = conn.menu.body || defaultMenu.body 
     let footer = conn.menu.footer || defaultMenu.footer 
     let after = conn.menu.after || (conn.user.jid == global.conn.user.jid ? '' : `Dipersembahkan oleh https://wa.me/${global.conn.user.jid.split`@`[0]}`) + defaultMenu.after 
     let _text = [ 
       before, 
       ...Object.keys(tags).map(tag => { 
         return header.replace(/%category/g, tags[tag]) + '\n' + [ 
           ...help.filter(menu => menu.tags && menu.tags.includes(tag) && menu.help).map(menu => { 
             return menu.help.map(help => { 
               return body.replace(/%cmd/g, menu.prefix ? help : '%p' + help) 
                 .replace(/%islimit/g, menu.limit ? 'Ⓛ' : '')
                .replace(/%isPremium/g, menu.premium ? 'Ⓟ' : '')
                 .trim() 
             }).join('\n') 
           }), 
           footer 
         ].join('\n') 
       }), 
       after 
     ].join('\n') 
     text = typeof conn.menu == 'string' ? conn.menu : typeof conn.menu == 'object' ? _text : '' 
     let replace = { 
       '%': '%', 
       p: _p, uptime, muptime, 
       me: conn.user.name, 
       npmname: package.name, 
       npmdesc: package.description, 
       version: package.version, 
       exp: exp - min, 
       maxexp: xp, 
       totalexp: exp, 
       xp4levelup: max - exp <= 0 ? `Siap untuk  *${_p}levelup*` : `${max - exp} XP lagi untuk levelup`, 
       github: package.homepage ? package.homepage.url || package.homepage : '[unknown github url]', 
       level, limit, name, money, age, weton, week, date, dateIslamic, time, totalreg, rtotalreg, role, 
       readmore: readMore 
     } 
     text = text.replace(new RegExp(`%(${Object.keys(replace).sort((a, b) => b.length - a.length).join`|`})`, 'g'), (_, name) => '' + replace[name]) 
 
await conn.send3ButtonImg(m.chat, thumb, text.trim(), wm, 'test', 'yow', 'doank', 'yow', 'work', 'yow', 'gemge', 'yow', m)

////////////////   /////////////////   ///////////////   //////////////
} catch (e) {
conn.reply(m.chat, '𝐄𝐑𝐑𝐎𝐑\n𝐈𝐍𝐈 𝐒𝐄𝐌𝐔𝐀 𝐒𝐀𝐋𝐀𝐇 𝐎𝐖𝐍𝐄𝐑 😒', m)
throw e
}
}

handler.command = /^(menu)$/i
module.exports = handler

 const more = String.fromCharCode(8206) 
 const readMore = more.repeat(4001) 
  
 function clockString(ms) { 
   let h = isNaN(ms) ? '--' : Math.floor(ms / 3600000) 
   let m = isNaN(ms) ? '--' : Math.floor(ms / 60000) % 60 
   let s = isNaN(ms) ? '--' : Math.floor(ms / 1000) % 60 
   return [h, m, s].map(v => v.toString().padStart(2, 0)).join(':') 
 }
function pickRandom(list) {
  return list[Math.floor(list.length * Math.random())]
}*/