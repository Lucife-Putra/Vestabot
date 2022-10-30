let fetch = require('node-fetch')
let handler = async(m, { conn, command: _Q, usedPrefix: _p }) => {
    let url = global.API('xteam', '/randomimage/meme', {}, 'APIKEY')
    let caption = `––––––「 𝐌𝐄𝐌𝐄」–––––––

❖ 𝐍𝐈𝐇 𝐁𝐆 𝐌𝐄𝐌𝐄𝐍𝐘𝐀🗿
❖ 𝐓𝐞𝐤𝐚𝐧 𝐁𝐮𝐭𝐭𝐨𝐧 𝐃𝐢 𝐁𝐚𝐰𝐚𝐡 𝐔𝐧𝐭𝐮𝐤 𝐍𝐞𝐱𝐭 𝐀𝐭𝐚𝐮
❖ 𝐊𝐞𝐭𝐢𝐤 ${_p + _Q} 𝐔𝐧𝐭𝐮𝐤 𝐍𝐞𝐱𝐭`

    await conn.send3ButtonImg(m.chat, url, caption, wm, `💫 𝐍𝐄𝐗𝐓 💫`, `${_p + _Q}`, `👻 𝐌𝐀𝐊𝐀𝐒𝐈𝐇 👻`, `ok`, `🔖𝐌𝐄𝐍𝐔 🔖`,`.menu`, m)
}
handler.help = ['meme']
handler.tags = ['fun']
handler.command = /^(meme)$/i
handler.limit = lmt

module.exports = handler
//await conn.sendButtonImg(m.chat, url, '*Meme*', wm, 'Gambar Selanjutnya', '.meme',m, 0, { thumbnail: await (await fetch(url)).buffer() })