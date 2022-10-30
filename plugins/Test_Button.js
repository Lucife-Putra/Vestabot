
let moment = require('moment-timezone')
let path = require('path')
let fetch = require('node-fetch')
let handler = async(m, { conn }) => {
	

	
    let totalfeatures = Object.values(global.plugins).filter(
    (v) => v.help && v.tags
  ).length;
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
    
    
    
	let who = m.mentionedJid && m.mentionedJid[0] ? m.mentionedJid[0] : m.fromMe ? conn.user.jid : m.sender
	let { name, premium, money, role, level, limit, exp, lastclaim, registered, regTime, age } = global.DATABASE.data.users[m.sender]
	let teks = `Uji Coba
${muptime}
${uptime}
${premium}
${money}
${limit}
${role}
${level}
${exp}
${lastclaim}
${registered}
${regTime}
${age}

`
/**Hai Kak ${name}

*Tanggal:* ${week}, ${date}
*Waktu:* ${time}
*Bot Online:* ${uptime} (${muptime})
*Pengguna:* 
*Lib:* Baileys-Md
*Language:* Javascript,Ts-Node
*Fitur:* ${totalfeatures} command
`*/
let buttonMessage= {
'document': {'url': url},
'mimetype': "application/pdf",
'fileName': '𝐒𝐢𝐦𝐩𝐥𝐞 𝐌𝐞𝐧𝐮 𝐁𝐨𝐭.',
'fileLength': 9999999999,
'pageCount': 2022,
'contextInfo': {
'externalAdReply': {
'showAdAttribution': true,
'mediaUrl': "https://www.instagram.com/marmarsandi",
'mediaType': 2,
'previewType': 'pdf',
'title': `👋 𝐇𝐚𝐢 𝐊𝐚𝐤, ${name} ${ucapan()}`,
'body': 'Yo',
'thumbnail': thumb,
'sourceUrl': url}},
'caption': teks,
'footer': wm,
'buttons': [
{'buttonId': '.allmenu','buttonText': {'displayText': `All Menu`},'type': 1},
{'buttonId': '.menulist','buttonText': {'displayText': `List Menu`},'type': 1}
],
'headerType': 6}
await conn.sendMessage(m.chat, buttonMessage, fkontak, { contextInfo: { externalAdReply: { title: ucapan(), body: wm, sourceUrl: '', thumbnail: thumb }}})
   
   
conn.send2Button(m.chat, 'test', wm, 'test', 'test', '', '', m)
}
handler.command = /^(butt)$/i 
module.exports = handler 
function ucapan() {
    const time = moment.tz('Asia/Jakarta').format('HH')
    let res = "𝐒𝐞𝐥𝐚𝐦𝐚𝐭 𝐓𝐞𝐧𝐠𝐚𝐡 𝐌𝐚𝐥𝐚𝐦 🌃"
    if (time >= 4) {
        res = "𝐒𝐞𝐥𝐚𝐦𝐚𝐭 𝐏𝐚𝐠𝐢 🌄"
	    }
    if (time > 10) {
        res = "𝐒𝐞𝐥𝐚𝐦𝐚𝐭 𝐒𝐢𝐚𝐧𝐠 🌤️"
    }
    if (time >= 15) {
        res = "𝐒𝐞𝐥𝐚𝐦𝐚𝐭 𝐒𝐨𝐫𝐞 🌇"
    }
    if (time >= 18) {
        res = "𝐒𝐞𝐥𝐚𝐦𝐚𝐭 𝐏𝐞𝐭𝐚𝐧𝐠 🏙️"
    }
    if (time >= 21) {
    	res = "𝐒𝐞𝐥𝐚𝐦𝐚𝐭 𝐓𝐞𝐧𝐠𝐚𝐡 𝐌𝐚𝐥𝐚𝐦 🌃"
    }
    return res
}

function clockString(ms) {
  let h = isNaN(ms) ? '--' : Math.floor(ms / 3600000)
  let m = isNaN(ms) ? '--' : Math.floor(ms / 60000) % 60
  let s = isNaN(ms) ? '--' : Math.floor(ms / 1000) % 60
  return [h, m, s].map(v => v.toString().padStart(2, 0)).join(':')
}
