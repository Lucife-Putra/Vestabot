const { kbbi } = require('../lib/kbbi')
let handler = async (m, { conn, text }) => {
  if (!text) throw 'Contoh penggunaan\n#kbbi hai'
  kbbi(text).then(res => {
  let kbbi = JSON.stringify(res)
  let jjson = JSON.parse(kbbi)
  let json = jjson
  let pesan = `${json.lema}\n\n${json.arti.join(', ')}`.trim()
  m.reply(pesan)
  })
}
handler.help = ['kbbi <kata>']
handler.tags = ['internet']
handler.command = /^(kbbi)$/i

module.exports = handler