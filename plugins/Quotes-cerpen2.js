let axios = require("axios");
let handler = async(m, { conn, text }) => {

  await m.reply('Searching...')
	axios.get(`https://leyscoders-api.herokuapp.com/api/cerpen?apikey=MIMINGANZ`).then ((res) => {
	 	let hasil = `*Judul :${res.data.result.title}*
*Pengarang*: ${res.data.result.pengarang}
*Kategori*: ${res.data.result.kategori}
*Story*:
${res.data.result.story}`

    conn.reply(m.chat, hasil, m)
	})
}
handler.help = ['cerpen']
handler.tags = ['quotes']
handler.command = /^(cerpen2)$/i

handler.fail = null
handler.exp = 0
handler.limit = false

module.exports = handler
