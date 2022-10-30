const { sticker } = require('../lib/sticker.js')
const fs = require('fs')
const path = require('path')
const fetch = require('node-fetch')

let handler = async (m, { conn, command }) => {

let who = m.mentionedJid && m.mentionedJid[0] ? m.mentionedJid[0] : m.fromMe ? conn.user.jid : m.sender

let pp = await conn.profilePictureUrl(who).catch(_ => waifu)

let name = await conn.getName(who)

let stiker = await sticker(null, global.API(`https://telegra.ph/file/d34b2ab2cb233c749776c.png`), global.packname, global.author)
  
conn.sendFile(m.chat, stiker, 'sticker.webp', '', m, null, { fileLength: 100, contextInfo: { externalAdReply : { showAdAttribution: true,
    mediaUrl: ig,
    mediaType: 2,
    description: ucapWaktu,
    title: `${command} Sedang Di Proses`,
    body: wm,
    thumbnail: await(await fetch(pp)).buffer(),
    sourceUrl: urlnya
} } } )

let audio = `https://raw.githubusercontent.com/aisyah-rest/mangkane/main/Mangkanenya/${command}.mp3`

await conn.sendFile(m.chat, audio, 'error.mp3', null, m, true, {
type: 'audioMessage', 
ptt: false, seconds: 0,contextInfo: { externalAdReply: { showAdAttribution: true,
	mediaUrl: ig,
    mediaType: 2, 
    description: ig,
    title: "Now Playing",
    body: wm,
    thumbnail: await (await fetch('https://telegra.ph/file/c317ad504efff0b84cd8d.jpg')).buffer(),
    sourceUrl: ig,
} } } )

}
handler.help = ['mangkane25','mangkane26','mangkane27','mangkane28','mangkane29','mangkane30','mangkane31','mangkane32','mangkane33','mangkane34','mangkane35','mangkane36','mangkane37','mangkane38','mangkane39','mangkane40','mangkane41','mangkane42','mangkane43','mangkane44','mangkane45','mangkane46','mangkane47','mangkane48','mangkane49','mangkane50','mangkane51','mangkane52','mangkane53','mangkane54']
handler.tags = ['sound']
handler.command = /^(mangkane25|mangkane26|mangkane27|mangkane28|mangkane29|mangkane30|mangkane31|mangkane32|mangkane33|mangkane34|mangkane35|mangkane36|mangkane37|mangkane38|mangkane39|mangkane40|mangkane41|mangkane42|mangkane43|mangkane44|mangkane45|mangkane46|mangkane47|mangkane48|mangkane49|mangkane50|mangkane51|mangkane52|mangkane53|mangkane54)$/i
handler.owner = false
 
handler.register = registt
handler.limit = false

module.exports = handler


