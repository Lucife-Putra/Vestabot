let handler = async(m, { conn, text }) => {

  if (!text) throw `Prefix Tidak Boleh Kosong Kek Otak Mu:) `

  global.prefix = new RegExp('^[' + (opts['prefix'] || `${text}`) + ']')
    await m.reply(`Prefix Berhasil Diubah Menjadi *${text}*`)
}
handler.help = ['setprefix <prefix>']
handler.tags = ['owner']
handler.command = /^(setprefix)$/i

handler.owner = true

module.exports = handler
