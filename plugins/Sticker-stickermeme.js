const uploadImage = require('../lib/uploadImage')
let handler = async (m, { conn, text, usedPrefix, command }) => {

    let [atas, bawah] = text.split`|`
    let q = m.quoted ? m.quoted : m
    let mime = (q.msg || q).mimetype || ''
    if (!mime) throw `balas gambar dengan perintah\n\n${usedPrefix + command} <${atas ? atas : 'teks atas'}>|<${bawah ? bawah : 'teks bawah'}>`
    if (!/image\/(jpe?g|png)/.test(mime)) throw `_*Mime ${mime} tidak didukung!*_`
    conn.fakeReply(m.chat, `Wait Process...` , '0@s.whatsapp.net', '「 𝐒𝐌𝐄𝐌𝐄 」𝐒𝐞𝐝𝐚𝐧𝐠 𝐌𝐞𝐦𝐛𝐮𝐚𝐭 𝐃𝐚𝐭𝐚...', 'status@broadcast')
    let img = await q.download()
    let url = await uploadImage(img)
    let meme = `https://api.memegen.link/images/custom/${encodeURIComponent(atas ? atas : '')}/${encodeURIComponent(bawah ? bawah : '')}.png?background=${url}`
    conn.sendStimg(m.chat, meme, m, { packname: packname, author: author })

}
handler.help = ['stickermeme <teks>|<teks>']
handler.tags = ['sticker']
handler.command = /^(s(tic?ker)?me(me)?)$/i

handler.limit = lmt

module.exports = handler
