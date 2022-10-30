const fetch = require('node-fetch')
const path = require('path')
const fs = require('fs')
const { sticker } = require('../lib/sticker.js')

let handler = async(m, { conn, command: _q }) => {

let who = m.mentionedJid && m.mentionedJid[0] ? m.mentionedJid[0] : m.fromMe ? conn.user.jid : m.sender

const anunya = await conn.profilePictureUrl(who, 'image').catch(_ => 'https://telegra.ph/file/0e363671f177bc9e377a6.jpg')

let name = await conn.getName(who)

conn.sendImageAsSticker(m.chat, 'https://telegra.ph/file/d34b2ab2cb233c749776c.png', m, { packname: packname, author: author, contextInfo: { externalAdReply: { showAdAttribution: true,
	mediaUrl: ig,
	mediaType: 2,
	description: ucapWaktu, 
	title: `${_q} Sedang Di Proses`,
	body: wm,
	thumbnail: await (await fetch(anunya)).buffer(),
	sourceUrl: ig
	}}})

let audio = `https://raw.githubusercontent.com/hyuura/Rest-Sound/main/HyuuraKane/${_q}.mp3`

await conn.sendFile(m.chat, audio, 'error.mp3', null, m, true, {
type: 'audioMessage', 
ptt: false, seconds: 0,contextInfo: { externalAdReply: { showAdAttribution: true,
	mediaUrl: ig,
    mediaType: 2, 
    description: ig,
    title: "Now Playing...",
    body: wm,
	thumbnail: await (await fetch('https://telegra.ph/file/c317ad504efff0b84cd8d.jpg')).buffer(),
    sourceUrl: ig,
} } } )

}
handler.help = ['mangkane1','mangkane2','mangkane3','mangkane4','mangkane5','mangkane6','mangkane7','mangkane8','mangkane9','mangkane10','mangkane11','mangkane12','mangkane13','mangkane14','mangkane15','mangkane16','mangkane17','mangkane18','mangkane19','mangkane20','mangkane21','mangkane22','mangkane23','mangkane24']
handler.tags = ['sound']
handler.command = /^(mangkane1|mangkane2|mangkane3|mangkane4|mangkane5|mangkane6|mangkane7|mangkane8|mangkane9|mangkane10|mangkane11|mangkane12|mangkane13|mangkane14|mangkane15|mangkane16|mangkane17|mangkane18|mangkane19|mangkane20|mangkane21|mangkane22|mangkane23|mangkane24)$/i

handler.register = registt
handler.limit = false

module.exports = handler
