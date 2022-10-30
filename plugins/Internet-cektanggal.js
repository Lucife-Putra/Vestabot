let axios = require("axios")
let handler = async(m, { conn, text }) => { 

  await m.reply('𝐖 𝐀 𝐈 𝐓 -- 𝐏 𝐑 𝐎 𝐒 𝐄 𝐒 ...')
let teks = text
     axios.get(`https://api.haipbis.xyz/harinasional?tanggal=${teks}`).then((res) => {
    let hasil = `➸  *Tanggal : ${res.data.tanggal}*\n\n➸ keterangan : ${res.data.keterangan}`
    
    conn.reply(m.chat, hasil, m)
    })
}
handler.help = ['cektanggal']
handler.tags = ['internet']
handler.command = /^(cektanggal)$/i

module.exports = handler
