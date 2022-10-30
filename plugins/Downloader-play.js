let yts = require('yt-search')

let fetch = require('node-fetch')

const { servers, yta, ytv } = require('../lib/y2mate')

let handler = async (m, { conn, command, usedPrefix: _p, text, isPrems, isOwner }) => {

if (!text) throw `uhm.. cari apa?\n\ncontoh:\n${usedPrefix + command} i see your monster`

let chat = global.db.data.chats[m.chat]

let results = await yts(text)

let vid = results.all.find(video => video.seconds < 3600)

if (!vid) throw 'Video/Audio Tidak ditemukan'

let isVideo = /2$/.test(command)

let yt = false

let usedServer = servers[0]

m.reply(`   【 𝐘 𝐎 𝐔 𝐓 𝐔 𝐁 𝐄 -- 𝐏 𝐋 𝐀 𝐘 】\n\n⏳ Wait Processing...\n\n⌛ Harap Tunggu Beberapa Saat`)

for (let i in servers) {
let server = servers[i]

try {
yt = await yta(vid.url, server)
yt2 = await ytv(vid.url, server)
usedServer = server
break
} catch (e) {
m.reply(`Server ${server} error!${servers.length >= i + 1 ? '' : '\nmencoba server lain...'}`)
}
}

if (yt === false) throw 'semua server gagal'

if (yt2 === false) throw 'semua server gagal'

let { dl_link, thumb, title, filesize, filesizeF } = yt
 
  
  const ty = `   ▣  𝐘 𝐎 𝐔 𝐓 𝐔 𝐁 𝐄 -- 𝐏 𝐋 𝐀 𝐘  ▣

⧈ *Judul* : _${title}_
⧈ *Ukuran File Aud* : _${filesizeF}_
⧈ *Ukuran File Vid* : _${yt2.filesizeF}_
⧈ *Server y2mate* : _${usedServer}_`
  
await conn.send2ButtonImg(m.chat, await (await fetch(thumb)).buffer(), ty, wm, `🎵 𝐀 𝐔 𝐃 𝐈 𝐎 ${filesizeF}`,`${_p}yta ${vid.url}`, `📽️ 𝐕 𝐈 𝐃 𝐄 𝐎${yt2.filesizeF}`,`${_p}yt ${vid.url}`, m)

}
  //🎵📽️⏳⌛
handler.help = ['play'].map(v => v + ' <pencarian>')
handler.tags = ['downloader']
handler.command = /^(dj|musik|song|lagu|p(lay)?)$/i

handler.exp = 3
handler.limit = lmt
handler.register = registt

module.exports = handler

