let axios = require("axios")
let handler = async(m, { conn, text }) => { 

  await m.reply('š š š š -- š š š š š š ...')
let teks = text
     axios.get(`https://api.haipbis.xyz/harinasional?tanggal=${teks}`).then((res) => {
    let hasil = `āø  *Tanggal : ${res.data.tanggal}*\n\nāø keterangan : ${res.data.keterangan}`
    
    conn.reply(m.chat, hasil, m)
    })
}
handler.help = ['cektanggal']
handler.tags = ['internet']
handler.command = /^(cektanggal)$/i

module.exports = handler
