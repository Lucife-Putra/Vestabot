let fs = require('fs')
let fetch = require('node-fetch')
let timeout = 120000
let poin = 59999
let handler = async (m, { conn, usedPrefix }) => {
    conn.caklontong = conn.caklontong ? conn.caklontong : {}
    let id = m.chat
    if (id in conn.caklontong) {
        conn.reply(m.chat, 'Masih ada soal belum terjawab di chat ini', conn.caklontong[id][0])
        throw false
    }
    let res = JSON.parse(fs.readFileSync('./scrap/caklontong.json'))
    let random = Math.floor(Math.random() * res.length)
    let json = res[random]
    let caption = `
${json.soal}

Timeout *${(timeout / 1000).toFixed(2)} detik*
Ketik ${usedPrefix}calo untuk bantuan
Bonus: ${poin} Money
`.trim()
    conn.caklontong[id] = [
        await conn.sendButtonLoc(m.chat, await (await fetch(fla + 'Cak Lontong')).buffer(), caption.trim(), wm, 'BANTUAN', usedPrefix + 'calo', m),
        json,
        poin,
        setTimeout(() => {
            if (conn.caklontong[id]) conn.sendButton(m.chat, `Waktu habis!\nJawabannya adalah *${json.jawaban}*\n${json.deskripsi}`, wm, 'Cak Lontong', usedPrefix + 'caklontong', conn.caklontong[id][0])
            delete conn.caklontong[id]
        }, timeout)
    ]
}
handler.help = ['caklontong']
handler.tags = ['game']
handler.command = /^caklontong/i

handler.register = regist
handler.limit = lmt 

module.exports = handler