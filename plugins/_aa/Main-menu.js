
let levelling = require('../lib/levelling')
let fs = require('fs')
let path = require('path')
let fetch = require('node-fetch')
let moment = require('moment-timezone')
////////////////////  ////////////////////  ////////////////////
let tags = {
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
////////////////////  ////////////////////  ////////////////////
let handler = async (m, { conn, usedPrefix: _p, args, command }) => {
	let who = m.mentionedJid && m.mentionedJid[0] ? m.mentionedJid[0] : m.fromMe ? conn.user.jid : m.sender
	//conn.fakeReply(m.chat, 'Wait Process...', '0@s.whatsapp.net', '「 𝐌𝐀𝐈𝐍 」𝐌𝐞𝐧𝐚𝐦𝐩𝐢𝐥𝐤𝐚𝐧 𝐀𝐥𝐥 𝐌𝐞𝐧𝐮', 'status@broadcast')
	
//conn.sendText(m.chat, 'wait', ftroli, { "contextInfo": { "externalAdReply": { "title": ucapWaktu, "body": wm, "sourceUrl": '', "thumbnail": thumb3, sendEphemeral: true }}})

	//⫹⫺ %ucapWaktu @${who.replace(/@.+/, '')}\n⫹⫺ Semoga Hari Mu Menyenangkan😁
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
┆⏣ 𝐌𝐞𝐦𝐨𝐫𝐲 𝐔𝐬𝐞𝐝 : *${(process.memoryUsage().heapUsed / 1024 / 1024).toFixed(2)}MB / ${Math.round(require('os').totalmem / 1024 / 1024)}MB* 
┗━─────────⬣
%readmore`.trim(),
	header: '┌──⭓ %category',
	body: '│⭔ %cmd %islimit %isPremium',
	footer: `└───────⭓`,
	after: `${global.botname}
*𝐏𝐫𝐨𝐣𝐞𝐜𝐭 𝐢𝐧𝐢 𝐝𝐢𝐛𝐮𝐚𝐭 𝐨𝐥𝐞𝐡 ${global.ownername}
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
'image': thumb,
'document': thumb,
'mimetype': dok,
'fileName': `𝐒𝐢𝐦𝐩𝐥𝐞 𝐌𝐞𝐧𝐮 𝐁𝐨𝐭 | By ${ownername}`,
'fileLength': 9999999999,
'pageCount': 2022,
'contextInfo': {
'externalAdReply': {
'showAdAttribution': true,
'mediaUrl': "https://www.instagram.com/marmarsandi",
'mediaType': 2, 
'previewType': '',
'title': `𝐇𝐚𝐢 𝐊𝐚𝐤, ${name} ${ucapWaktu}\n𝐖𝐀𝐊𝐓𝐔 : ${time} WIB`,
'body': `𝐑𝐔𝐍𝐓𝐈𝐌𝐄 : ${uptime}`,
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
fileName: `𝐒𝐢𝐦𝐩𝐥𝐞 𝐌𝐞𝐧𝐮 𝐁𝐨𝐭 | By ${ownername}`,
fileLength: 99999999999999,
caption: text.trim(),
footer: wm,
buttons: [
{ 'buttonId': '.owner','buttonText': { 'displayText': `Owner`}, 'type': 1}
],
headerType: 4,
contextInfo:{externalAdReply:{
title: `𝐇𝐚𝐢 𝐊𝐚𝐤, ${name} ${ucapWaktu}\n𝐖𝐀𝐊𝐓𝐔 : ${time} WIB`,
body: `𝐑𝐔𝐍𝐓𝐈𝐌𝐄 : ${uptime}`,
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
conn.reply(m.chat, '𝐄𝐑𝐑𝐎𝐑\n𝐈𝐍𝐈 𝐒𝐄𝐌𝐔𝐀 𝐒𝐀𝐋𝐀𝐇 𝐎𝐖𝐍𝐄𝐑 😒', m)
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
