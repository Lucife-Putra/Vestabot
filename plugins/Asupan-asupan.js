let fetch = require('node-fetch')
let fs = require('fs')
let handler = async(m, { conn, usedPrefix, text, command }) => {
conn.reply(m.chat, wait, ftroli)
  let res = await (await fetch(`https://raw.githubusercontent.com/Z-zxQ/Asupan/main/cecan/${command}.json`)).json()
  let json = res[Math.floor(Math.random() * res.length)]
  await conn.sendButtonImg(m.chat, json.url, `Cwe gw nih boss!!`, wm, 'Get Again', `${usedPrefix + command}`, m, false)
}
handler.help = [ 'indonesia', 'malaysia', 'thailand', 'vietnam', 'china', 'korea', 'japan']
handler.tags = ['asupan']
handler.command = /^(Indonesia|malaysia|thailand|vietnam|china|korea|japan)$/i

module.exports = handler
