const { MessageType } = require('@adiwajshing/baileys')

let handler = async(m, { conn, text }) => {

if (!text) return conn.reply(m.chat, 'Silahkan masukkan laporan', m)

if (text > 300) return conn.reply(m.chat, 'Maaf Teks Terlalu Panjang, Maksimal 300 Teks', m)

var nomor = m.sender

const teks1 = `*[ REPORT ]*\nNomor : wa.me/${nomor.split("@s.whatsapp.net")[0]}\n\nPesan : ${text}`

await conn.reply(6289530291942 + '@s.whatsapp.net', teks1, m)

conn.reply(m.chat, '✔️Masalah telah di laporkan ke owner BOT, laporan palsu/main2 tidak akan ditanggapi.', m)

}
handler.help = ['bug <laporan>', 'report <laporan>']
handler.tags = ['info']
handler.command = /^(bug|report)$/i
handler.owner = false
handler.mods = false
handler.premium = false
handler.group = false
handler.private = false

handler.admin = false
handler.botAdmin = false

handler.fail = null

module.exports = handler
