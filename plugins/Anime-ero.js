let fetch = require('node-fetch')

let handler = async(m, { conn, command: _Q, usedPrefix: _p }) => {
	
let caption = `––––––「 𝐄𝐑𝐎 」–––––––

❖ 𝐃𝐚𝐬𝐚𝐫 𝐖𝐢𝐛𝐮 𝐁𝐚𝐮 𝐁𝐚𝐰𝐚𝐧𝐡𝐡🗿
❖ 𝐓𝐞𝐤𝐚𝐧 𝐁𝐮𝐭𝐭𝐨𝐧 𝐃𝐢 𝐁𝐚𝐰𝐚𝐡 𝐔𝐧𝐭𝐮𝐤 𝐍𝐞𝐱𝐭 𝐀𝐭𝐚𝐮
❖ 𝐊𝐞𝐭𝐢𝐤 ${_p}command 𝐔𝐧𝐭𝐮𝐤 𝐍𝐞𝐱𝐭`

  let re = 'https://api.xteam.xyz/randomimage/ero?apikey=MIMINETBOT'
  let res = await (await fetch(re))
  
conn.send3ButtonImg(m.chat, re, caption, wm, `💫 𝐍𝐄𝐗𝐓 💫`, `${_p + _Q}`, `👻 𝐌𝐀𝐊𝐀𝐒𝐈𝐇 👻`, `ok`, `🔖𝐌𝐄𝐍𝐔 🔖`,`${_p + 'menu'}`, m)
}
handler.help = ['ero']
handler.tags = ['anime']
handler.command = /^ero$/i

handler.register = false
handler.limit = lmt2

module.exports = handler

