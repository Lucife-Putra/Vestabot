let { webp2png } = require('../lib/webp2mp4')
let handler = async (m, { conn, usedPrefix, command }) => {
  if (!m.quoted) throw `balas stiker dengan perintah *${usedPrefix + command}*`
  conn.fakeReply(m.chat, `Wait Process...` , '0@s.whatsapp.net', '「 𝐓𝐎𝐈𝐌𝐆 」𝐒𝐞𝐝𝐚𝐧𝐠 𝐌𝐞𝐦𝐮𝐚𝐭 𝐃𝐚𝐭𝐚...', 'status@broadcast')
  let mime = m.quoted.mimetype || ''
  if (!/webp/.test(mime)) throw `balas stiker dengan perintah *${usedPrefix + command}*`
  let media = await m.quoted.download()
  let out = Buffer.alloc(0)
  if (/webp/.test(mime)) {
    out = await webp2png(media)
  }
  conn.sendFile(m.chat, out, 'Fotonya.jpg', 'Nih Kak Fotonya', m)
  
}
handler.help = ['toimg']
handler.tags = ['sticker']
handler.command = ['toimg']

module.exports = handler
