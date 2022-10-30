const fetch = require('node-fetch')

let bpink = []
fetch('https://raw.githubusercontent.com/arivpn/dbase/master/kpop/blekping.txt')
    .then(res => res.text())
    .then(txt => bpink = txt.split('\n'))

let handler = async (m, { conn }) => {
let img = bpink[Math.floor(Math.random() * bpink.length)]
if (!img) throw img

await conn.send2ButtonImg(m.chat, img, 'Nih Kak BlackPinknya\n', wm, '𝐍 𝐄 𝐗 𝐓', '.bpink', '𝐌 𝐄 𝐍 𝐔', '.menu', m)

}
handler.help = ['blackpink']
handler.tags = ['internet']

handler.register = registt
handler.limit = lmt
handler.command = /^(bpink|bp|blackpink)$/i

module.exports = handler
