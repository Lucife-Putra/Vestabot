let handler = async(m, { conn, command: _Q, usedPrefix: _p }) => {
let rest = 'https://api.zacros.my.id/randomimg/darkjokes'
    
let caption = `––––––「 𝐃𝐀𝐑𝐊𝐉𝐎𝐊𝐄 」–––––––

❖ 𝐋𝐀𝐌𝐏𝐔𝐍𝐘𝐀 𝐌𝐀𝐍𝐀🗿
❖ 𝐓𝐞𝐤𝐚𝐧 𝐁𝐮𝐭𝐭𝐨𝐧 𝐃𝐢 𝐁𝐚𝐰𝐚𝐡 𝐔𝐧𝐭𝐮𝐤 𝐍𝐞𝐱𝐭 𝐀𝐭𝐚𝐮
❖ 𝐊𝐞𝐭𝐢𝐤 ${_p +_Q} 𝐔𝐧𝐭𝐮𝐤 𝐍𝐞𝐱𝐭`
    await conn.send3ButtonImg(m.chat, global.API('xteam', '/asupan/darkjoke', {}, 'APIKEY'), caption, wm, `💫 𝐍𝐄𝐗𝐓 💫`, `${_p + _Q}`, `👻 𝐌𝐀𝐊𝐀𝐒𝐈𝐇 👻`, `ok`, `🔖𝐌𝐄𝐍𝐔 🔖`,`.menu`, m)
}
handler.help = ['darkjokes']
handler.tags = ['fun']
handler.command = /^(dragjokes|darkjokes)$/i

module.exports = handler