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

m.reply(`   ć š š š š š š š -- š š š š ć\n\nā³ Wait Processing...\n\nā Harap Tunggu Beberapa Saat`)

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
 
  
  const ty = `   ā£  š š š š š š š -- š š š š  ā£

ā§ *Judul* : _${title}_
ā§ *Ukuran File Aud* : _${filesizeF}_
ā§ *Ukuran File Vid* : _${yt2.filesizeF}_
ā§ *Server y2mate* : _${usedServer}_`
  
await conn.send2ButtonImg(m.chat, await (await fetch(thumb)).buffer(), ty, wm, `šµ š š š š š ${filesizeF}`,`${_p}yta ${vid.url}`, `š½ļø š š š š š${yt2.filesizeF}`,`${_p}yt ${vid.url}`, m)

}
  //šµš½ļøā³ā
handler.help = ['play'].map(v => v + ' <pencarian>')
handler.tags = ['downloader']
handler.command = /^(dj|musik|song|lagu|p(lay)?)$/i

handler.exp = 3
handler.limit = lmt
handler.register = registt

module.exports = handler

