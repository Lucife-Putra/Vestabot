let axios = require("axios")

let handler  = async (m, { conn, usedPrefix, command }) => {

 axios.get(`https://leyscoders-api.herokuapp.com/api/katailham?apikey=MIMINGANZ`).then((res) => {
   let hasil = `${res.data.result}\n`

    conn.sendButton(m.chat, hasil, wm, `💫 𝐍𝐄𝐗𝐓 💫`, `${usedPrefix + command}`, m)
	})
}
handler.help = ['kata'].map(v => v + 'ilham')
handler.tags = ['quotes']
handler.command = /^(katailham)$/i


module.exports = handler