let fetch = require('node-fetch')
let handler = async(m, { conn, text }) => {
  let res = await (await fetch('https://katanime.vercel.app/api/getrandom?limit=1'))
  if (!res.ok) throw await res.text()
  let json = await res.json()
  if(!json.result[0]) throw json
  let { indo, character, anime } = json.result[0]

const y = `        𝐐 𝐔 𝐎 𝐓 𝐄 𝐒 -- 𝐀 𝐍 𝐈 𝐌 𝐄\n\n_${indo}_\n\n_${character}_\n\n_${anime}_\n`

conn.send2Button(m.chat, y, wm, '𝐍 𝐄 𝐗 𝐓', '.kataanime', '𝐌 𝐄 𝐍 𝐔', '.menu', m, { ephemeralExpiration: 84600 })
}
handler.help = ['quotesanime']
handler.tags = ['quotes']
handler.command = /^(quotesanime|animequotes|kataanime)$/i

handler.register = registt
handler.limit = lmt

module.exports = handler
