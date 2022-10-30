let fetch = require('node-fetch')
let handler = async(m, { conn, command: _Q, usedPrefix: _p }) => {
	
	//conn.fakeReply(m.chat, `${lmt1} 𝐋𝐢𝐦𝐢𝐭 𝐓𝐞𝐫𝐩𝐚𝐤𝐚𝐢` , '0@s.whatsapp.net', '「 𝐖𝐚𝐢𝐭 𝐏𝐫𝐨𝐜𝐞𝐬𝐬 」𝐃𝐚𝐬𝐚𝐫 𝐖𝐢𝐛𝐮 𝐁𝐚𝐮 𝐁𝐚𝐰𝐚𝐧𝐠🗿 ', 'status@broadcast')
	
let caption = `––––––「 𝐌𝐄𝐆𝐔𝐌𝐈𝐍 」–––––––

❖ 𝐃𝐚𝐬𝐚𝐫 𝐖𝐢𝐛𝐮𝐡 𝐁𝐚𝐮 𝐁𝐚𝐰𝐚𝐧𝐡𝐡🗿
❖ 𝐓𝐞𝐤𝐚𝐧 𝐁𝐮𝐭𝐭𝐨𝐧 𝐃𝐢 𝐁𝐚𝐰𝐚𝐡 𝐔𝐧𝐭𝐮𝐤 𝐍𝐞𝐱𝐭 𝐀𝐭𝐚𝐮
❖ 𝐊𝐞𝐭𝐢𝐤 ${_p + _Q} 𝐔𝐧𝐭𝐮𝐤 𝐍𝐞𝐱𝐭`
	
  let res = await (await fetch('https://api.waifu.pics/sfw/megumin'))
  if (!res.ok) throw await res.text()
  let json = await res.json()
  if (!json.url) throw 'Error!'

conn.send3ButtonImg(m.chat, json.url, caption, wm, `💫 𝐍𝐄𝐗𝐓 💫`, `${_p + _Q}`, `👻 𝐌𝐀𝐊𝐀𝐒𝐈𝐇 👻`, `ok`, `🔖𝐌𝐄𝐍𝐔 🔖`,`${_p + 'menu'}`, m)

}
handler.help = ['megumin']
handler.tags = ['anime']
handler.command = /^(megumin)$/i

handler.register = regist
handler.limit = lmt

module.exports = handler
