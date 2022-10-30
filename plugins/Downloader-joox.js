const { joox } = require('../lib/scrape')
let handler = async (m, { conn, text, usedPrefix, command }) => {
    if (!text) throw `*Perintah ini untuk mencari lagu joox berdasarkan pencarian*\n\ncontoh:\n${usedPrefix + command} akad`
    if (isUrl(text)) throw `*Perintah ini untuk mencari lagu joox berdasarkan pencarian bukan link*\n\ncontoh:\n${usedPrefix + command} akad`

    joox(text).then(res => {
        let joox = JSON.stringify(res)
        let jjson = JSON.parse(joox)
        let random = Math.floor(Math.random() * jjson.data.length)
        let hasil = jjson.data[random]
        let json = hasil
        let pesan = `
*Penyanyi:* ${json.penyanyi}
*Judul:* ${json.lagu}
*Album:* ${json.album}
*Diterbitkan:* ${json.publish}
*Link:* ${json.mp3}
*Made by* ❤️`.trim()
        conn.sendFile(m.chat, json.img, 'error.jpg', pesan, m, false, { thumbnail: Buffer.alloc(0) })
        conn.sendFile(m.chat, json.mp3, 'error.mp3', '', m, false, { mimetype: 'audio/mp4' })
    })
}

handler.help = ['joox'].map(v => v + ' <judul>')
handler.tags = ['downloader']
handler.command = /^joox$/i
handler.limit = lmt
handler.premium = false
module.exports = handler

const isUrl = (text) => {
    return text.match(new RegExp(/https?:\/\/(www\.)?[-a-zA-Z0-9@:%._+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b([-a-zA-Z0-9()@:%_+.~#?&/=]*)/, 'gi'))
}

async function shortlink(url) {
isurl = /https?:\/\//.test(url)
return isurl ? (await require('axios').get('https://tinyurl.com/api-create.php?url='+encodeURIComponent(url))).data : ''
}