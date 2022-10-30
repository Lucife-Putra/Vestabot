let levelling = require('../lib/levelling')
let fs = require('fs')
let path = require('path')
//let jimp = require('jimp')
let fetch = require('node-fetch')
let moment = require('moment-timezone')
 
let handler = async (m, { conn, usedPrefix: _p, args, command }) => { 
	
let package = JSON.parse(await fs.promises.readFile(path.join(__dirname, '../package.json')).catch(_ => '{}'))

let { exp, limit, age, money, level, role, registered } = global.db.data.users[m.sender]
    let { min, xp, max } = levelling.xpRange(level, global.multiplier)
    
    let name = registered ? global.db.data.users[m.sender].name : conn.getName(m.sender)
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
    const wita = moment.tz('Asia/Makassar').format("HH:mm:ss")
    const wit = moment.tz('Asia/Jayapura').format("HH:mm:ss")

let pe = '```'
    let { premium, premiumTime } = global.db.data.users[m.sender]
    let _uptime = process.uptime() * 1000
    let _muptime
    if (process.send) {
      process.send('uptime')
      _muptime = await new Promise(resolve => {
        process.once('message', resolve)
        setTimeout(resolve, 1000)
      }) * 1000
    }
    let mode = global.opts['self'] ? 'Private' : 'Public'
    let muptime = clockString(_muptime)
    let uptime = clockString(_uptime)
    global.jam = time
    let totalreg = Object.keys(global.db.data.users).length
    let rtotalreg = Object.values(global.db.data.users).filter(user => user.registered == true).length
  let user = db.data.users[m.sender]
  let id = m.chat
  let who = m.mentionedJid && m.mentionedJid[0] ? m.mentionedJid[0] : m.fromMe ? conn.user.jid : m.sender
  let sender = m.sender
  let pp = await conn.profilePictureUrl(who, 'image').catch((_) => "https://telegra.ph/file/24fa902ead26340f3df2c.png")
  
const sections = [{
	"rows": [{
	"title": "Owner",
	"description": "Owner Bot",
	"rowId": ".owner"
	},{
	"title": "All Menu",
	"description": "Menampilkan Semua Menu", 
	"rowId": ".menu all"
	},{ 
	"title": "Info Menu", 
	"description": "Menampilkan Menu Info", 
	"rowId": ".menu game", 
	}]
	}]
	
    const listMessage = {
      text: `Hai Kak ${name} Pilih Menu Dibawah Ini Yah Kak`.trim(),
      footer: 'Cuma Test',
      title: 'test',
      buttonText: "Pilih Disini",
      sections 
    }
     return conn.sendMessage(m.chat, listMessage, { quoted: m, contextInfo: { forwardingScore: 99999, isForwarded: true }})
    
    }
handler.help = ['simplemenu']
handler.tags = ['main']
handler.command = /^(sm)$/i
module.exports = handler

const more = String.fromCharCode(8206) 
 const readMore = more.repeat(4001) 
  
 function clockString(ms) { 
   let h = isNaN(ms) ? '--' : Math.floor(ms / 3600000) 
   let m = isNaN(ms) ? '--' : Math.floor(ms / 60000) % 60 
   let s = isNaN(ms) ? '--' : Math.floor(ms / 1000) % 60 
   return [h, m, s].map(v => v.toString().padStart(2, 0)).join(':') 
 } 
