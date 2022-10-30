let fetch = require('node-fetch')
let handler = async(m, { conn, command, usedPrefix: _p }) => {
	
let caption = `––––––「 𝐁𝐋𝐎𝐖𝐉𝐎𝐁 」–––––––

❖ 𝐃𝐚𝐬𝐚𝐫 𝐖𝐢𝐛𝐮𝐡 𝐁𝐚𝐮 𝐁𝐚𝐰𝐚𝐧𝐡𝐡🗿
❖ 𝐓𝐞𝐤𝐚𝐧 𝐁𝐮𝐭𝐭𝐨𝐧 𝐃𝐢 𝐁𝐚𝐰𝐚𝐡 𝐔𝐧𝐭𝐮𝐤 𝐍𝐞𝐱𝐭 𝐀𝐭𝐚𝐮
❖ 𝐊𝐞𝐭𝐢𝐤 ${_p}blowjob 𝐔𝐧𝐭𝐮𝐤 𝐍𝐞𝐱𝐭`
	
  let res = 'https://api.xteam.xyz/randomimage/blowjob?apikey=MIMINETBOT'
  
conn.send3ButtonImg(m.chat, res, caption, wm, `💫 𝐍𝐄𝐗𝐓 💫`, `${_p}blowjob`, `👻 𝐌𝐀𝐊𝐀𝐒𝐈𝐇 👻`, `ok`, `🔖𝐌𝐄𝐍𝐔 🔖`,`${_p}menu`, m)
}
handler.help = ['blowjob']
handler.tags = ['anime']
handler.command = /^(blowjob)$/i

handler.register = regist
handler.limit = lmt2

module.exports = handler
