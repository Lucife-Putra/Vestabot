let { webp2png } = require('../lib/webp2mp4')
let handler = async (m, { conn, usedPrefix, command, participants }) => {
  let q = m.quoted ? m.quoted : m
  let mime = (q.msg || q).mimetype || ''
  if (!/webp/.test(mime)) throw 'stiker invalid'
  let media = await q.download()
  let out = Buffer.alloc(0)
  if (/webp/.test(mime)) {
    out = await webp2png(media)
  }

  conn.sendImageAsSticker(m.chat, out, m, { packname: packname, author: author, mentions: participants.map(a => a.id)})

}
handler.help = ['stickertag', 'sticktag']
handler.tags = ['group']
handler.command = /^(stickertag|sticktag)$/i
module.exports = handler