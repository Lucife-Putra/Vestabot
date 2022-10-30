//by AsuKidal

let fetch = require('node-fetch')
let fs = require('fs')
let handler = async(m, { conn, usedPrefix, text, command }) => {
    let res = await fetch('https://docs-jojo.herokuapp.com/api/jadwaltvnow')
    if (!res.ok) throw await `${res.status} ${res.statusText}`
    let json = await res.json()
    conn.sendBut(m.chat, `${json.result.jam} - ${json.result.jadwalTV}`, 'wm badag', 'Ok', `ok`, m)
}
handler.help = ['jadwaltvnow']
handler.tags = ['internet']
handler.command = /^jadwaltvnow$/i



module.exports = handler