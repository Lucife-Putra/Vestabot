let fetch = require('node-fetch')
let handler = async(m, { conn, command: _Q, usedPrefix: _p }) => {
	
//conn.fakeReply(m.chat, `${lmt3} 𝐋𝐢𝐦𝐢𝐭 𝐓𝐞𝐫𝐩𝐚𝐤𝐚𝐢` , '0@s.whatsapp.net', '「 𝐖𝐚𝐢𝐭 𝐏𝐫𝐨𝐜𝐞𝐬𝐬 」𝐃𝐚𝐬𝐚𝐫 𝐖𝐢𝐛𝐮 𝐁𝐚𝐮 𝐁𝐚𝐰𝐚𝐧𝐠🗿 ', 'status@broadcast')
	
let caption = `––––––「 𝐇𝐄𝐍𝐓𝐀𝐈 」–––––––

❖ 𝐓𝐎𝐁𝐀𝐓 𝐋𝐎𝐋𝐎𝐓🗿
❖ 𝐓𝐞𝐤𝐚𝐧 𝐁𝐮𝐭𝐭𝐨𝐧 𝐃𝐢 𝐁𝐚𝐰𝐚𝐡 𝐔𝐧𝐭𝐮𝐤 𝐍𝐞𝐱𝐭 𝐀𝐭𝐚𝐮
❖ 𝐊𝐞𝐭𝐢𝐤 ${_p + _Q} 𝐔𝐧𝐭𝐮𝐤 𝐍𝐞𝐱𝐭`

  let res = 'https://api.xteam.xyz/randomimage/hentai?apikey=ebb6251cc00f9c63'
  
conn.send3ButtonImg(m.chat, res, caption, wm, `💫 𝐍𝐄𝐗𝐓 💫`, `${_p + _Q}`, `👻 𝐌𝐀𝐊𝐀𝐒𝐈𝐇 👻`, `ok`, `🔖𝐌𝐄𝐍𝐔 🔖`,`${_p + 'menu'}`, m).catch((err) => m.reply(' ✗ 𝐄 𝐑 𝐑 𝐎 𝐑 ✗\n\nMungkin Api Mati'))
}
handler.help = ['hentai']
handler.tags = ['anime']
handler.command = /^(hentai)$/i

handler.register = regist
handler.limit = lmt2

module.exports = handler

