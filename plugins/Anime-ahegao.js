let fetch = require('node-fetch')
let handler = async(m, { conn, command, usedPrefix: _p }) => {
	
	
let caption = `––––––「 𝐀𝐇𝐄𝐆𝐀𝐎 」–––––––

❖ 𝐃𝐚𝐬𝐚𝐫 𝐖𝐢𝐛𝐮𝐡 𝐁𝐚𝐮 𝐁𝐚𝐰𝐚𝐧𝐡𝐡🗿
❖ 𝐓𝐞𝐤𝐚𝐧 𝐁𝐮𝐭𝐭𝐨𝐧 𝐃𝐢 𝐁𝐚𝐰𝐚𝐡 𝐔𝐧𝐭𝐮𝐤 𝐍𝐞𝐱𝐭 𝐀𝐭𝐚𝐮
❖ 𝐊𝐞𝐭𝐢𝐤 ${_p}ahegao 𝐔𝐧𝐭𝐮𝐤 𝐍𝐞𝐱𝐭`
	
  let res = `https://api.xteam.xyz/randomimage/ahegao?apikey=${apixteam}'
  

conn.send3ButtonImg(m.chat, res, caption, wm, `💫 𝐍𝐄𝐗𝐓 💫`, `${_p}ahegao`, `👻 𝐌𝐀𝐊𝐀𝐒𝐈𝐇 👻`, `ok`, `🔖𝐌𝐄𝐍𝐔 🔖`,`${_p}menu`, m)
}
handler.help = ['ahegao']
handler.tags = ['anime']
handler.command = /^(ahegao)$/i

handler.register = regist
handler.limit = lmt3

module.exports = handler
