let uploadFile = require('../lib/uploadFile.js')
let uploadImage = require( '../lib/uploadImage.js')

let handler = async (m) => {
  let q = m.quoted ? m.quoted : m
  let mime = (q.msg || q).mimetype || ''
  if (!mime) throw 'No media found'
  let media = await q.download()
  let isTele = /image\/(png|jpe?g|gif)|video\/mp4/.test(mime)
  let link = await (isTele ? uploadImage : uploadFile)(media)
  m.reply(`ðŸ“® *L I N K :*
${link}
ðŸ“Š *S I Z E :* ${media.length} Byte
ðŸ“› *E x p i r e d :* ${isTele ? 'No Expiry Date' : 'Unknown'}`)
}
handler.help = ['upload (reply media)', 'tourl (reply media)']
handler.tags = ['tools']
handler.command = /^(tourl|upload)$/i

handler.limit = true

module.exports = handler