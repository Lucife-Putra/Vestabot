/*
let levelling = require('../lib/levelling')
let fs = require('fs')
let path = require('path')
let fetch = require('node-fetch')
let moment = require('moment-timezone')
////////////////////  ////////////////////  ////////////////////

////////////////////  ////////////////////  ////////////////////

	//conn.fakeReply(m.chat, 'Wait Process...', '0@s.whatsapp.net', 'ใ ๐๐๐๐ ใ๐๐๐ง๐๐ฆ๐ฉ๐ข๐ฅ๐ค๐๐ง ๐๐ฅ๐ฅ ๐๐๐ง๐ฎ', 'status@broadcast')
	
//conn.sendText(m.chat, 'wait', ftroli, { "contextInfo": { "externalAdReply": { "title": ucapWaktu, "body": wm, "sourceUrl": '', "thumbnail": thumb3, sendEphemeral: true }}})

	//โซนโซบ %ucapWaktu @${who.replace(/@.+/, '')}\nโซนโซบ Semoga Hari Mu Menyenangkan๐
const defaultMenu = {
  before: `โโโโโ ๐๐๐๐ ๐๐๐๐
โโ ๐๐๐ฆ๐ : *%name*
โโ ๐๐๐ซ๐ฌ๐ข๐ฌ๐ : *%limit* ๐๐ข๐ฆ๐ข๐ญ
โโ ๐๐จ๐ฅ๐ : *%role*
โโ ๐๐๐ฏ๐๐ฅ : *%level ( %exp / %maxexp )*
โโ ๐๐จ๐ญ๐๐ฅ : *%totalexp ๐๐ฑ๐ฉ*
โโโโโโโโโโฌฃ
โโโโโ ๐๐๐๐๐
โโง ๐๐๐ง๐ ๐ ๐๐ฅ :ย  *%weekย %weton,ย %date* 
โโง ๐๐๐ง๐ ๐ ๐๐ฅ ๐๐ฌ๐ฅ๐๐ฆ :ย  *%dateIslamic* 
โโง ๐๐๐ค๐ญ๐ฎ :ย  *%time* 
โโโโโโโโโโฌฃ
โโโโโ ๐๐๐๐ ๐๐๐
โโฃ ๐๐๐ฆ๐ ๐๐จ๐ญ : *${botname}*
โโฃ ๐๐ฎ๐ง๐ญ๐ข๐ฆ๐ : *%uptime ( %muptime )*
โโฃ ๐๐๐ญ๐๐๐๐ฌ๐ : %rtotalregย ๐๐๐ซ๐ข %totalreg 
โโฃ ๐๐๐ฆ๐จ๐ซ๐ฒ ๐๐ฌ๐๐ : *${(process.memoryUsage().heapUsedย /ย 1024ย /ย 1024).toFixed(2)}MBย /ย ${Math.round(require('os').totalmemย /ย 1024ย /ย 1024)}MB* 
โโโโโโโโโโโโฌฃ
%readmore`.trim(),
	header: 'โโโโญ %category',
	body: 'โโญ %cmd %islimit %isPremium',
	footer: `โโโโโโโโโญ`,
	after: `${global.botname}
*๐๐ซ๐จ๐ฃ๐๐๐ญ ๐ข๐ง๐ข ๐๐ข๐๐ฎ๐๐ญ ๐จ๐ฅ๐๐ก ${global.ownername}
`,}
let handler = async (m, { conn, usedPrefix: _p, args, command }) => {
	let who = m.mentionedJid && m.mentionedJid[0] ? m.mentionedJid[0] : m.fromMe ? conn.user.jid : m.sender
	letย tags 
	letย teksย =ย `${args[0]}`.toLowerCase() 
	let array = ['all', 'sinfo', 'main', 'tools', 'berita', 'xp', 'sticker', 'editor', 'fun', 'game', 'kerang', 'islam', 'group', 'downloader', 'absen', 'owner', 'advanced', 'database', 'rpg', 'jadian', 'quotes', 'internet', 'nulis', 'audio', 'anime', 'random']
	
	ifย (!array.includes(teks))ย teksย =ย '404' 
	ifย (teksย ==ย 'all')ย tagsย =ย { 
	'info': '๐๐๐๐ ๐๐๐๐',
	'main': '๐๐๐๐ ๐๐๐๐',
	'tools': '๐๐๐๐ ๐๐๐๐',
	'berita': '๐๐๐๐๐๐',
	'xp': '๐๐ ๐๐๐๐',
	'sticker': '๐๐๐๐๐๐๐ ๐๐๐๐',
	'editor': '๐๐๐๐๐๐ ๐๐๐๐',
	'fun': '๐๐๐ ๐๐๐๐',
	'game': '๐๐๐๐ ๐๐๐๐',
	'kerang': '๐๐๐๐๐๐ ๐๐๐๐',
	'islam': '๐๐๐๐๐ ๐๐๐๐',
	'group': '๐๐๐๐๐ ๐๐๐๐',
	'downloader': '๐๐๐๐๐๐๐๐ ๐๐๐๐',
	'absen': '๐๐๐๐๐ ๐๐๐๐',
	'owner': '๐๐๐๐๐ ๐๐๐๐',
	'advanced': '๐๐๐๐๐๐๐๐ ๐๐๐๐',
	'database': '๐๐๐๐๐๐๐๐ ๐๐๐๐',
	'rpg': '๐๐๐ ๐๐๐๐',
	'jadian': '๐๐๐๐๐๐ ๐๐๐๐',
	'quotes': '๐๐๐๐๐๐ ๐๐๐๐',
	'internet': '๐๐๐๐๐๐๐๐ ๐๐๐๐',
	'nulis': '๐๐๐๐๐ ๐๐๐๐',
	'audio': '๐๐๐๐๐ ๐๐๐๐',
	'anime': '๐๐๐๐๐๐ ๐๐๐๐', 
	'random': '๐๐๐๐๐๐ ๐๐๐๐',
	}
	ifย (teksย ==ย 'sinfo')ย tagsย =ย { 
	'info':ย '๐๐๐๐ ๐๐๐๐', 
	}
	if (teks == 'smain') tags = {
	'main': '๐๐๐๐ ๐๐๐๐',
	}
	if (teks == 'tools') tags = {
	'tools': '๐๐๐๐ ๐๐๐๐',
	}
	if (teks == 'berita') tags = {
	'berita': '๐๐๐๐๐๐',
	}
	if (teks == 'xp') tags = {
	'xp': '๐๐ ๐๐๐๐', 
	}
	if (teks == 'sticker') tags = {
	'sticker': '๐๐๐๐๐๐๐ ๐๐๐๐',
	}
	if (teks == 'editor') tags = {
	'editor': '๐๐๐๐๐๐ ๐๐๐๐',
	}
	if (teks == 'fun') tags = {
	'fun': '๐๐๐ ๐๐๐๐',
	}
	if (teks == 'game') tags = {
	'game': '๐๐๐๐ ๐๐๐๐',
	}
	if (teks == 'kerang') tags = {
	'kerang': '๐๐๐๐๐๐ ๐๐๐๐',
	}
	if (teks == 'islam') tags = {
	'islam': '๐๐๐๐๐ ๐๐๐๐',
	}
	if (teks == 'group') tags = {
	'group': '๐๐๐๐๐ ๐๐๐๐',
	}
	if (teks == 'downloader') tags = {
	'downloader': '๐๐๐๐๐๐๐๐ ๐๐๐๐',
	}
	if (teks == 'absen') tags = {
	'absen': '๐๐๐๐๐ ๐๐๐๐',
	}
	if (teks == 'owner') tags = {
	'owner': '๐๐๐๐๐ ๐๐๐๐',
	}
	if (teks == 'advanced') tags = {
	'advanced': '๐๐๐๐๐๐๐๐ ๐๐๐๐',
	}
	if (teks == 'database') tags = {
	'database': '๐๐๐๐๐๐๐๐ ๐๐๐๐',
	}
	if (teks == 'rpg') tags = {
	'rpg': '๐๐๐ ๐๐๐๐',
	}
	if (teks == 'jadian') tags = {
	'jadian': '๐๐๐๐๐๐ ๐๐๐๐',
	}
	if (teks == 'quotes') tags = {
	'quotes': '๐๐๐๐๐๐ ๐๐๐๐',
	}
	if (teks == 'internet') tags = {
	'internet': '๐๐๐๐๐๐๐๐ ๐๐๐๐',
	}
	if (teks == 'nulis') tags = {
	'nulis': '๐๐๐๐๐ ๐๐๐๐',
	}
	if (teks == 'audio') tags = {
	'audio': '๐๐๐๐๐ ๐๐๐๐',
	}
	if (teks == 'anime') tags = {
	'anime': '๐๐๐๐๐๐ ๐๐๐๐', 
	}
	if (teks == 'random') tags ={
	'random': '๐๐๐๐๐๐ ๐๐๐๐',
	}
////////////////////  ////////////////////  ////////////////////

try {
    let package = JSON.parse(await fs.promises.readFile(path.join(__dirname, '../package.json')).catch(_ => '{}'))
    let { exp, limit, money, level, role } = global.db.data.users[m.sender]
    let { min, xp, max } = levelling.xpRange(level, global.multiplier)
    let name = await conn.getName(m.sender)
    let d = new Date(new Date + 3600000)
    let locale = 'id'
    // d.getTimeZoneOffset()
    // Offset -420 is 18.00
    // Offset    0 is  0.00
    // Offset  420 is  7.00
    const wib = moment.tz('Asia/Jakarta').format("HH:mm:ss")
    const wita = moment.tz('Asia/Makassar').format("HH:mm:ss")
    const wit = moment.tz('Asia/Jayapura').format("HH:mm:ss")
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
    let totalreg = Object.keys(global.db.data.users).length
    let rtotalreg = Object.values(global.db.data.users).filter(user => user.registered == true).length
    let help = Object.values(global.plugins).filter(plugin => !plugin.disabled).map(plugin => {
      return {
        help: Array.isArray(plugin.tags) ? plugin.help : [plugin.help],
        tags: Array.isArray(plugin.tags) ? plugin.tags : [plugin.tags],
        prefix: 'customPrefix' in plugin,
        limit: plugin.limit,
        premium: plugin.premium,
        enabled: !plugin.disabled,
      }
    })
  
    ifย (teksย ==ย '404')ย {
	
	return conn.send2ButtonImg(m.chat, thumb, 'Test', wm, 'allmenu', '.menu all', 'simplemenu', '.sm', m)
}

    for (let plugin of help)
      if (plugin && 'tags' in plugin)
        for (let tag of plugin.tags)
          if (!(tag in tags) && tag) tags[tag] = tag
    conn.menu = conn.menu ? conn.menu : {}
    let before = conn.menu.before || defaultMenu.before
    let header = conn.menu.header || defaultMenu.header
    let body = conn.menu.body || defaultMenu.body
    let footer = conn.menu.footer || defaultMenu.footer
    let after = conn.menu.after || (conn.user.jid == global.conn.user.jid ? '' : `Powered by https://wa.me/${global.conn.user.jid.split`@`[0]}`) + defaultMenu.after
    let _text = [
      before,
      ...Object.keys(tags).map(tag => {
        return header.replace(/%category/g, tags[tag]) + '\n' + [
          ...help.filter(menu => menu.tags && menu.tags.includes(tag) && menu.help).map(menu => {
            return menu.help.map(help => {
              return body.replace(/%cmd/g, menu.prefix ? help : '%p' + help)
                .replace(/%islimit/g, menu.limit ? '(โ)' : '')
                .replace(/%isPremium/g, menu.premium ? '(โ)' : '')
                .trim()
            }).join('\n')
          }),
          footer
        ].join('\n')
      }),
      after
    ].join('\n')
////////////////  ////////////////  ////////////////  ////////////////
text = typeof conn.menu == 'string' ? conn.menu : typeof conn.menu == 'object' ? _text : ''
    let replace = {
      '%': '%',
      p: _p, uptime, muptime,
      me: conn.getName(conn.user.jid),
      ucapan: ucapWaktu,
      npmname: package.name,
      npmdesc: package.description,
      version: package.version,
      exp: exp - min,
      maxexp: xp,
      totalexp: exp,
      xp4levelup: max - exp,
      github: package.homepage ? package.homepage.url || package.homepage : '[unknown github url]',
      level, limit, name, money, weton, week, date, dateIslamic, wib, wit, wita, time, totalreg, rtotalreg, role,
      readmore: readMore
}
////////////////////  ////////////////////  ////////////////////
text = text.replace(new RegExp(`%(${Object.keys(replace).sort((a, b) => b.length - a.length).join`|`})`, 'g'), (_, name) => '' + replace[name])
////////////////////  ///MENUNYA///  ////////////////////


let fdoc = {quoted:{key : {participant : '0@s.whatsapp.net'},message: {documentMessage: {title: `${command}`}}}} 



//conn.send3ButtonImg(m.chat, thumb2, text.trim(), wm, 'Owner', '.owner', 'Speed Bot', '.ping', 'Info Bot', '.infosc', fkontak, { contextInfo: {externalAdReply: { title: `${ucapWaktu} Kak ${name}`, body: wm, sourceUrl: '', thumbnail: thumb3 }}})
//conn.send3ButtonImgDoc(m.chat, buffer, text, wm2, 'Owner', '.owner', 'Speed Bot', '.ping', 'Verify', '.verify', fdoc, { contextInfo: { externalAdReply: { title: botdate, body: wm, sourceUrl: '', thumbnail: buffer }}})

/*conn.sendFile(m.chat, snd, 'motivasi.mp3', null, m, true, {
type: 'audioMessage', // paksa tanpa convert di ffmpeg
ptt: true, { contextInfo: { title: botdate, body: wm3, sourceUrl: '', thumbnail: buffer }}})*/
/*
let buttonMessage= {
'image': thumb,
'document': thumb,
'mimetype': dok,
'fileName': `๐๐ข๐ฆ๐ฉ๐ฅ๐ ๐๐๐ง๐ฎ ๐๐จ๐ญ | By ${ownername}`,
'fileLength': 9999999999,
'pageCount': 2022,
'contextInfo': {
'externalAdReply': {
'showAdAttribution': true,
'mediaUrl': "https://www.instagram.com/marmarsandi",
'mediaType': 2,
'previewType': '',
'title': `๐๐๐ข ๐๐๐ค, ${name} ${ucapWaktu}\n๐๐๐๐๐ : ${time} WIB`,
'body': `๐๐๐๐๐๐๐ : ${uptime}`,
'thumbnail': thumb,
'sourceUrl': urlnya}},
'caption': text.trim(),
'footer': wm,
'buttons': [
{ 'buttonId': '.owner','buttonText': { 'displayText': `Owner`}, 'type': 1},
{ 'buttonId': '.ping', 'buttonText': { 'displayText': 'Ping'}, 'type': 1}
],
'headerType': 6}
await conn.sendMessage(m.chat, buttonMessage, { quoted: m, ephemeralExpiration: 84600})

/*let buttonMessage2 = {
document: thumb2,
mimetype: doc,
jpegThumbnail: thumb2,
mentions: '',
fileName: `๐๐ข๐ฆ๐ฉ๐ฅ๐ ๐๐๐ง๐ฎ ๐๐จ๐ญ | By ${ownername}`,
fileLength: 99999999999999,
caption: text.trim(),
footer: wm,
buttons: [
{ 'buttonId': '.owner','buttonText': { 'displayText': `Owner`}, 'type': 1}
],
headerType: 4,
contextInfo:{externalAdReply:{
title: `๐๐๐ข ๐๐๐ค, ${name} ${ucapWaktu}\n๐๐๐๐๐ : ${time} WIB`,
body: `๐๐๐๐๐๐๐ : ${uptime}`,
mediaType:2,
thumbnail: thumb2,
sourceUrl: '',
mediaUrl: ''
}}
}
conn.sendMessage(m.chat, buttonMessage2, {quoted:m})*/
//conn.send3ButtonImgDoc(m.chat, b


/*
////////////////   /////////////////   ///////////////   //////////////
} catch (e) {
conn.reply(m.chat, '๐๐๐๐๐\n๐๐๐ ๐๐๐๐๐ ๐๐๐๐๐ ๐๐๐๐๐ ๐', m)
throw e
}
}
handler.help = ['menu']
handler.tags = ['main']
handler.command = /^menu$/i
//await (await fetch(thumb)).buffer()
module.exports = handler

const more = String.fromCharCode(8206)
const readMore = more.repeat(4001)

function clockString(ms) {
  let h = isNaN(ms) ? '--' : Math.floor(ms / 3600000)
  let m = isNaN(ms) ? '--' : Math.floor(ms / 60000) % 60
  let s = isNaN(ms) ? '--' : Math.floor(ms / 1000) % 60
  return [h, m, s].map(v => v.toString().padStart(2, 0)).join(':')
}
*/

let levelling = require('../lib/levelling')
let fs = require('fs')
let path = require('path')
let fetch = require('node-fetch')
let moment = require('moment-timezone')
////////////////////  ////////////////////  ////////////////////
let tags = {
	'info': '๐๐๐๐ ๐๐๐๐',
	'main': '๐๐๐๐ ๐๐๐๐',
	'tools': '๐๐๐๐ ๐๐๐๐',
	'berita': '๐๐๐๐๐๐',
	'xp': '๐๐ ๐๐๐๐',
	'sticker': '๐๐๐๐๐๐๐ ๐๐๐๐',
	'editor': '๐๐๐๐๐๐ ๐๐๐๐',
	'fun': '๐๐๐ ๐๐๐๐',
	'game': '๐๐๐๐ ๐๐๐๐',
	'kerang': '๐๐๐๐๐๐ ๐๐๐๐',
	'islam': '๐๐๐๐๐ ๐๐๐๐',
	'group': '๐๐๐๐๐ ๐๐๐๐',
	'downloader': '๐๐๐๐๐๐๐๐ ๐๐๐๐',
	'absen': '๐๐๐๐๐ ๐๐๐๐',
	'owner': '๐๐๐๐๐ ๐๐๐๐',
	'advanced': '๐๐๐๐๐๐๐๐ ๐๐๐๐',
	'database': '๐๐๐๐๐๐๐๐ ๐๐๐๐',
	'rpg': '๐๐๐ ๐๐๐๐',
	'jadian': '๐๐๐๐๐๐ ๐๐๐๐',
	'quotes': '๐๐๐๐๐๐ ๐๐๐๐',
	'internet': '๐๐๐๐๐๐๐๐ ๐๐๐๐',
	'nulis': '๐๐๐๐๐ ๐๐๐๐',
	'audio': '๐๐๐๐๐ ๐๐๐๐',
	'anime': '๐๐๐๐๐๐ ๐๐๐๐',
	'random': '๐๐๐๐๐๐ ๐๐๐๐',
}
////////////////////  ////////////////////  ////////////////////
let handler = async (m, { conn, usedPrefix: _p, args, command }) => {
	let who = m.mentionedJid && m.mentionedJid[0] ? m.mentionedJid[0] : m.fromMe ? conn.user.jid : m.sender
	//conn.fakeReply(m.chat, 'Wait Process...', '0@s.whatsapp.net', 'ใ ๐๐๐๐ ใ๐๐๐ง๐๐ฆ๐ฉ๐ข๐ฅ๐ค๐๐ง ๐๐ฅ๐ฅ ๐๐๐ง๐ฎ', 'status@broadcast')
	
//conn.sendText(m.chat, 'wait', ftroli, { "contextInfo": { "externalAdReply": { "title": ucapWaktu, "body": wm, "sourceUrl": '', "thumbnail": thumb3, sendEphemeral: true }}})

	//โซนโซบ %ucapWaktu @${who.replace(/@.+/, '')}\nโซนโซบ Semoga Hari Mu Menyenangkan๐
const defaultMenu = {
  before: `โโโโโ ๐๐๐๐ ๐๐๐๐
โโ ๐๐๐ฆ๐ : *%name*
โโ ๐๐๐ซ๐ฌ๐ข๐ฌ๐ : *%limit* ๐๐ข๐ฆ๐ข๐ญ
โโ ๐๐จ๐ฅ๐ : *%role*
โโ ๐๐๐ฏ๐๐ฅ : *%level ( %exp / %maxexp )*
โโ ๐๐จ๐ญ๐๐ฅ : *%totalexp ๐๐ฑ๐ฉ*
โโโโโโโโโโฌฃ
โโโโโ ๐๐๐๐๐
โโง ๐๐๐ง๐ ๐ ๐๐ฅ :ย  *%weekย %weton,ย %date* 
โโง ๐๐๐ง๐ ๐ ๐๐ฅ ๐๐ฌ๐ฅ๐๐ฆ :ย  *%dateIslamic* 
โโง ๐๐๐ค๐ญ๐ฎ :ย  *%time* 
โโโโโโโโโโฌฃ
โโโโโ ๐๐๐๐ ๐๐๐
โโฃ ๐๐๐ฆ๐ ๐๐จ๐ญ : *${botname}*
โโฃ ๐๐ฎ๐ง๐ญ๐ข๐ฆ๐ : *%uptime ( %muptime )*
โโฃ ๐๐๐ญ๐๐๐๐ฌ๐ : %rtotalregย ๐๐๐ซ๐ข %totalreg 
โโฃ ๐๐๐ฆ๐จ๐ซ๐ฒ ๐๐ฌ๐๐ : *${(process.memoryUsage().heapUsedย /ย 1024ย /ย 1024).toFixed(2)}MBย /ย ${Math.round(require('os').totalmemย /ย 1024ย /ย 1024)}MB* 
โโโโโโโโโโโโฌฃ
%readmore`.trim(),
	header: 'โโโโญ %category',
	body: 'โโญ %cmd %islimit %isPremium',
	footer: `โโโโโโโโโญ`,
	after: `${global.botname}
*๐๐ซ๐จ๐ฃ๐๐๐ญ ๐ข๐ง๐ข ๐๐ข๐๐ฎ๐๐ญ ๐จ๐ฅ๐๐ก ${global.ownername}
`,}
////////////////////  ////////////////////  ////////////////////

try {
    let package = JSON.parse(await fs.promises.readFile(path.join(__dirname, '../package.json')).catch(_ => '{}'))
    let { exp, limit, money, level, role } = global.db.data.users[m.sender]
    let { min, xp, max } = levelling.xpRange(level, global.multiplier)
    let name = await conn.getName(m.sender)
    let d = new Date(new Date + 3600000)
    let locale = 'id'
    // d.getTimeZoneOffset()
    // Offset -420 is 18.00
    // Offset    0 is  0.00
    // Offset  420 is  7.00
    const wib = moment.tz('Asia/Jakarta').format("HH:mm:ss")
    const wita = moment.tz('Asia/Makassar').format("HH:mm:ss")
    const wit = moment.tz('Asia/Jayapura').format("HH:mm:ss")
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
    let totalreg = Object.keys(global.db.data.users).length
    let rtotalreg = Object.values(global.db.data.users).filter(user => user.registered == true).length
    let help = Object.values(global.plugins).filter(plugin => !plugin.disabled).map(plugin => {
      return {
        help: Array.isArray(plugin.tags) ? plugin.help : [plugin.help],
        tags: Array.isArray(plugin.tags) ? plugin.tags : [plugin.tags],
        prefix: 'customPrefix' in plugin,
        limit: plugin.limit,
        premium: plugin.premium,
        enabled: !plugin.disabled,
      }
    })
    for (let plugin of help)
      if (plugin && 'tags' in plugin)
        for (let tag of plugin.tags)
          if (!(tag in tags) && tag) tags[tag] = tag
    conn.menu = conn.menu ? conn.menu : {}
    let before = conn.menu.before || defaultMenu.before
    let header = conn.menu.header || defaultMenu.header
    let body = conn.menu.body || defaultMenu.body
    let footer = conn.menu.footer || defaultMenu.footer
    let after = conn.menu.after || (conn.user.jid == global.conn.user.jid ? '' : `Powered by https://wa.me/${global.conn.user.jid.split`@`[0]}`) + defaultMenu.after
    let _text = [
      before,
      ...Object.keys(tags).map(tag => {
        return header.replace(/%category/g, tags[tag]) + '\n' + [
          ...help.filter(menu => menu.tags && menu.tags.includes(tag) && menu.help).map(menu => {
            return menu.help.map(help => {
              return body.replace(/%cmd/g, menu.prefix ? help : '%p' + help)
                .replace(/%islimit/g, menu.limit ? '(โ)' : '')
                .replace(/%isPremium/g, menu.premium ? '(โ)' : '')
                .trim()
            }).join('\n')
          }),
          footer
        ].join('\n')
      }),
      after
    ].join('\n')
////////////////  ////////////////  ////////////////  ////////////////
text = typeof conn.menu == 'string' ? conn.menu : typeof conn.menu == 'object' ? _text : ''
    let replace = {
      '%': '%',
      p: _p, uptime, muptime,
      me: conn.getName(conn.user.jid),
      ucapan: ucapWaktu,
      npmname: package.name,
      npmdesc: package.description,
      version: package.version,
      exp: exp - min,
      maxexp: xp,
      totalexp: exp,
      xp4levelup: max - exp,
      github: package.homepage ? package.homepage.url || package.homepage : '[unknown github url]',
      level, limit, name, money, weton, week, date, dateIslamic, wib, wit, wita, time, totalreg, rtotalreg, role,
      readmore: readMore
}
////////////////////  ////////////////////  ////////////////////
text = text.replace(new RegExp(`%(${Object.keys(replace).sort((a, b) => b.length - a.length).join`|`})`, 'g'), (_, name) => '' + replace[name])
////////////////////  ///MENUNYA///  ////////////////////


let fdoc = {quoted:{key : {participant : '0@s.whatsapp.net'},message: {documentMessage: {title: `${command}`}}}} 



//conn.send3ButtonImg(m.chat, thumb2, text.trim(), wm, 'Owner', '.owner', 'Speed Bot', '.ping', 'Info Bot', '.infosc', fkontak, { contextInfo: {externalAdReply: { title: `${ucapWaktu} Kak ${name}`, body: wm, sourceUrl: '', thumbnail: thumb3 }}})
//conn.send3ButtonImgDoc(m.chat, buffer, text, wm2, 'Owner', '.owner', 'Speed Bot', '.ping', 'Verify', '.verify', fdoc, { contextInfo: { externalAdReply: { title: botdate, body: wm, sourceUrl: '', thumbnail: buffer }}})

/*conn.sendFile(m.chat, snd, 'motivasi.mp3', null, m, true, {
type: 'audioMessage', // paksa tanpa convert di ffmpeg
ptt: true, { contextInfo: { title: botdate, body: wm3, sourceUrl: '', thumbnail: buffer }}})*/

let buttonMessage= {
'image': thumb3,
'document': thumb2,
'mimetype': dok,
'fileName': `๐๐ข๐ฆ๐ฉ๐ฅ๐ ๐๐๐ง๐ฎ ๐๐จ๐ญ | By ${ownername}`,
'fileLength': 9999999999,
'pageCount': 2022,
'contextInfo': {
'externalAdReply': {
'showAdAttribution': true,
'mediaUrl': "https://www.instagram.com/marmarsandi",
'mediaType': 2,
'previewType': '',
'title': `๐๐๐ข ๐๐๐ค, ${name} ${ucapWaktu}\n๐๐๐๐๐ : ${time} WIB`,
'body': `๐๐๐๐๐๐๐ : ${uptime}`,
'thumbnail': thumb2,
'sourceUrl': urlnya}},
'caption': text.trim(),
'footer': wm,
'buttons': [
{ 'buttonId': '.owner','buttonText': { 'displayText': `Owner`}, 'type': 1},
{ 'buttonId': '.ping', 'buttonText': { 'displayText': 'Ping'}, 'type': 1}
],
'headerType': 6}
conn.sendMessage(m.chat, buttonMessage, { quoted: m, ephemeralExpiration: 84600 })

/*let buttonMessage2 = {
document: thumb2,
mimetype: doc,
jpegThumbnail: thumb2,
mentions: '',
fileName: `๐๐ข๐ฆ๐ฉ๐ฅ๐ ๐๐๐ง๐ฎ ๐๐จ๐ญ | By ${ownername}`,
fileLength: 99999999999999,
caption: text.trim(),
footer: wm,
buttons: [
{ 'buttonId': '.owner','buttonText': { 'displayText': `Owner`}, 'type': 1}
],
headerType: 4,
contextInfo:{externalAdReply:{
title: `๐๐๐ข ๐๐๐ค, ${name} ${ucapWaktu}\n๐๐๐๐๐ : ${time} WIB`,
body: `๐๐๐๐๐๐๐ : ${uptime}`,
mediaType:2,
thumbnail: thumb2,
sourceUrl: '',
mediaUrl: ''
}}
}
conn.sendMessage(m.chat, buttonMessage2, {quoted:m})*/
//conn.send3ButtonImgDoc(m.chat, b




////////////////   /////////////////   ///////////////   //////////////
} catch (e) {
conn.reply(m.chat, '๐๐๐๐๐\n๐๐๐ ๐๐๐๐๐ ๐๐๐๐๐ ๐๐๐๐๐ ๐', m)
throw e
}
}
handler.help = ['menu']
handler.tags = ['main']
handler.command = /^(menu)$/i
//await (await fetch(thumb)).buffer()
module.exports = handler

const more = String.fromCharCode(8206)
const readMore = more.repeat(4001)

function clockString(ms) {
  let h = isNaN(ms) ? '--' : Math.floor(ms / 3600000)
  let m = isNaN(ms) ? '--' : Math.floor(ms / 60000) % 60
  let s = isNaN(ms) ? '--' : Math.floor(ms / 1000) % 60
  return [h, m, s].map(v => v.toString().padStart(2, 0)).join(':')
}