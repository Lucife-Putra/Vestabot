let axios = require('axios');
let fetch = require('node-fetch')
let handler  = async (m, { conn, args, usedPrefix: _p, command }) => {

m.reply(wait)

json = (await axios.get('https://meme-api.herokuapp.com/gimme/ecchi')).data

let caption = `––––––「 𝐄𝐂𝐂𝐇𝐈 」–––––––

❖ 𝐓𝐎𝐁𝐀𝐓 𝐋𝐎𝐋𝐎𝐓🗿
❖ 𝐓𝐞𝐤𝐚𝐧 𝐁𝐮𝐭𝐭𝐨𝐧 𝐃𝐢 𝐁𝐚𝐰𝐚𝐡 𝐔𝐧𝐭𝐮𝐤 𝐍𝐞𝐱𝐭 𝐀𝐭𝐚𝐮
❖ 𝐊𝐞𝐭𝐢𝐤 ${_p}command 𝐔𝐧𝐭𝐮𝐤 𝐍𝐞𝐱𝐭`

await conn.send3ButtonImg(m.chat, json.url, caption, wm, `💫 𝐍𝐄𝐗𝐓 💫`, `${_p}command`, `👻 𝐌𝐀𝐊𝐀𝐒𝐈𝐇 👻`, `ok`, `🔖𝐌𝐄𝐍𝐔 🔖`,`${_p}menu`, m).catch((err) => m.reply(' ✗ 𝐄 𝐑 𝐑 𝐎 𝐑 ✗\n\nMungkin Api Mati'))

}
handler.help = ['ecchi']
handler.tags = ['anime']
handler.command = /^ecchi$/i

handler.register = regist
handler.limit = lmt2

module.exports = handler