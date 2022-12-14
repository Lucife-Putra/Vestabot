let fs = require('fs')
let fetch = require('node-fetch')
let winScore = 49999
async function handler(m) {
    this.game = this.game ? this.game : {}
    let id = 'family100_' + m.chat
    if (id in this.game) {
        this.sendButton(m.chat, 'Masih ada kuis yang belum terjawab di chat ini', wm, 'NYERAH', 'surrender', this.game[id].msg)
        throw false
    }
    let src = JSON.parse(fs.readFileSync(`./scrap/family.json`))
    let json = src[Math.floor(Math.random() * src.length)]
    let caption = `
*Soal:* ${json.soal}

Terdapat *${json.jawaban.length}* jawaban${json.jawaban.find(v => v.includes(' ')) ? `
(beberapa jawaban terdapat spasi)
`: ''}

+${winScore} Money tiap jawaban benar
    `.trim()
    this.game[id] = {
        id,
        msg: await this.sendButtonImg(m.chat, await (await fetch(fla + 'Family 100')).buffer(), caption, wm, 'NYERAH', 'surrender', m),
        ...json,
        terjawab: Array.from(json.jawaban, () => false),
        winScore,
    }
}
handler.help = ['family100']
handler.tags = ['game']
handler.command = /^family100$/i

handler.register = regist
handler.limit = lmt

module.exports = handler