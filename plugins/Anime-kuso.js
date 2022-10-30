let fetch = require('node-fetch')
let handler = async(m, { conn, text, command, usedPrefix }) => {
    if (!text) throw `Harap masukan Judulnya \n\n\nContoh : ${usedPrefix + command} naruto ngaji`
    let res = await fetch(`http://kocakz.herokuapp.com/api/anime/kusonime/search?query=${text}`)
    if (!res.ok) throw await res.text()
    let json = await res.json()
    let keqing = json.result.map((v, i) => `#${i + 1}. \n*Judul:* ${v.title}\n*Logo:* ${v.thumb}\n*Genre:* ${v.genre}\n*Link:* ${v.link}\n==============\n`).join('\n') 
    if (json.status) m.reply(keqing)
    else throw json
}
handler.help = ['kusonimesearch <judul>']
handler.tags = ['anime']
handler.command = /^(kusonimesearch)$/i

handler.register = registt
handler.limit = lmt

module.exports = handler