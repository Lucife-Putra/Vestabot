/*let moment = require('moment-timezone')
let fs = require('fs')
let fetch = require('node-fetch')
let handler = async(m, { conn, text, command: _Q, usedPrefix: _p }) => {
if (!text) return conn.reply(m.chat, 'Harap Masukan nama nabi\n\nContoh: .kisahnabi muhammad', m)
  let res = await fetch(`https://leyscoders-api.herokuapp.com/api/nabi?q=${text}&apikey=MIMINGANZ`)
  if (!res.ok) throw await res.text()
  let json = await res.json()
  if (!json.result.image) throw json    
  let more = String.fromCharCode(8206)
  let readMore = more.repeat(4001)
  let anu = `*── 「 KISAH NABI 」 ──*
▢ *Nabi*: ${json.result.nabi}
${readMore}
${json.result.kisah}`    
  await conn.send3ButtonImg(m.chat, json.result.image, anu, wm2, `💫 𝐍𝐄𝐗𝐓 💫`, `${_p + _Q}`, `👻 𝐌𝐀𝐊𝐀𝐒𝐈𝐇 👻`, `ok`, `🔖𝐌𝐄𝐍𝐔 🔖`,`.menu`, m)
}
handler.help = ['kisahnabi'].map(v => v + ' <nama nabi>')
handler.tags = ['islam']
handler.command = /^(kisahnabi)$/i

module.exports = handler*/