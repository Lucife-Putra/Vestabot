let fetch = require('node-fetch')
let handler = async(m, { conn, text }) => {
    if (!text) throw `Masukan nama apj nya !`
    let res = await fetch(`https://x-restapi.herokuapp.com/api/moddroid-search?q=${text}&apikey=BETA`)
    if (!res.ok) throw await res.text()
    let json = await res.json()
    let keqing = json.data.map((v, i) => `#${i + 1}. \n*Title:* ${v.title}\n*Logonya:* ${v.img}\n*Link Url:* ${v.url}\n==============\n`).join('\n') 
    if (json.status) m.reply(keqing)
    else throw json
}
handler.help = ['moddroid <query>']
handler.tags = ['internet']
handler.command = /^(moddroid)$/i

handler.limit = lmt1

module.exports = handler