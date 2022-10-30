//by AsuKidal

let fetch = require('node-fetch')
let fs = require('fs')
let handler = async(m, { conn, usedPrefix, text, command }) => {
    if (!text) throw `Harap masukkan URL sebagai teks \n\nContoh : .pinterestvideo https://id.pinterest.com/pin/361906520063070744`
    let res = await fetch('https://api.zacros.my.id/downloader/pindl?link=${text}')
    if (!res.ok) throw await `${res.status} ${res.statusText}`
    let json = await res.json()
    conn.sendFile(m.chat, json.result, 'pin.mp4', `Nih Kak`, m)
}
handler.help = ['pinterestvideo *link*']
handler.tags = ['downloader']
handler.command = /^pinterestvideo$/i

handler.limit = true

module.exports = handler