let fetch = require('node-fetch');
let axios = require('axios');
let handler = async(m, { conn, command: _Q, usedPrefix: _p }) => {

m.reply(wait)

let caption = `––––––「 𝐖𝐀𝐈𝐅𝐔 」–––––––

❖ 𝐃𝐚𝐬𝐚𝐫 𝐖𝐢𝐛𝐮𝐡 𝐁𝐚𝐮 𝐁𝐚𝐰𝐚𝐧𝐡𝐡🗿
❖ 𝐓𝐞𝐤𝐚𝐧 𝐁𝐮𝐭𝐭𝐨𝐧 𝐃𝐢 𝐁𝐚𝐰𝐚𝐡 𝐔𝐧𝐭𝐮𝐤 𝐍𝐞𝐱𝐭 𝐀𝐭𝐚𝐮
❖ 𝐊𝐞𝐭𝐢𝐤 ${_p + _Q} 𝐔𝐧𝐭𝐮𝐤 𝐍𝐞𝐱𝐭`
	
let res = await fetch('https://api.waifu.pics/sfw/waifu')

  if (!res.ok) throw await res.text()
 let json = await res.json()
 if (!json.url) throw 'Error!'

await conn.send3ButtonImg(m.chat, json.url, caption, wm, `💫 𝐍𝐄𝐗𝐓 💫`, `${_p + 'waifu'}`, `👻 𝐌𝐀𝐊𝐀𝐒𝐈𝐇 👻`, `ok`, `🔖𝐌𝐄𝐍𝐔 🔖`,`${_p}menu`, m)
}
handler.help = ['waifu']
handler.tags = ['anime']
handler.command = /^(waifu)$/i
handler.limit = lmt

module.exports = handler
