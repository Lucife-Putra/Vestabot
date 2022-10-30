
const { sticker } = require('../lib/sticker.js')
const fs = require('fs')
const path = require('path')
const fetch = require('node-fetch')

let handler = async (m, { conn, command }) => {

//m.reply(`Wait ${command} sedang proses🐦`)
let who = m.mentionedJid && m.mentionedJid[0] ? m.mentionedJid[0] : m.fromMe ? conn.user.jid : m.sender
//let pp = await conn.profilePictureUrl(who).catch(_ => waifu)
let name = await conn.getName(who)

let stiker = await sticker(null, global.API(`https://telegra.ph/file/d34b2ab2cb233c749776c.png`), global.packname, global.author)

conn.sendFile(m.chat, stiker, 'sticker.webp', '', m, null, { fileLength: 100, contextInfo: { externalAdReply : { showAdAttribution: true,
    mediaUrl: ig,
    mediaType: 2,
    description: ucapWaktu,
    title: `${command} Sedang Di Proses`,
    body: wm,
    thumbnail: await (await fetch(ppnya)).buffer(),
    sourceUrl: urlnya
     }}
  })

 
// conn.sendFile(m.chat, stiker, 'sticker.webp', '', m)
 
let audio = `https://raw.githubusercontent.com/hyuura/Rest-Sound/main/HyuuraKane/${command}.mp3`

await conn.sendFile(m.chat, audio, 'error.mp3', null, m, true, {
type: 'audioMessage', 
ptt: false, seconds: 0,contextInfo: { externalAdReply: { showAdAttribution: true,
	mediaUrl: ig,
    mediaType: 2, 
    description: ig,
    title: "Now Playing...",
    body: wm,
    thumbnail: await (await fetch('https://telegra.ph/file/c317ad504efff0b84cd8d.jpg')).buffer(),
    sourceUrl: ig,
} } } )

}
handler.help = ['mangkane1','mangkane2','mangkane3','mangkane4','mangkane5','mangkane6','mangkane7','mangkane8','mangkane9','mangkane10','mangkane11','mangkane12','mangkane13','mangkane14','mangkane15','mangkane16','mangkane17','mangkane18','mangkane19','mangkane20','mangkane21','mangkane22','mangkane23','mangkane24']
handler.tags = ['sound']
handler.command = /^(mangkane1|mangkane2|mangkane3|mangkane4|mangkane5|mangkane6|mangkane7|mangkane8|mangkane9|mangkane10|mangkane11|mangkane12|mangkane13|mangkane14|mangkane15|mangkane16|mangkane17|mangkane18|mangkane19|mangkane20|mangkane21|mangkane22|mangkane23|mangkane24)$/i
handler.owner = false

handler.register = registt
handler.limit = false

module.exports = handler
