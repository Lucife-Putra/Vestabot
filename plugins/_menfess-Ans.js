/**
 * Jangan Di Hapus!!
 * 
 * Ingin bikin fitur tapi tidak bisa coding?
 * hubungi: https://wa.me/6288279268363
 * 
 */

let handler = m => m

handler.all = async function (m) {

const fti = {key: {fromMe: false,"participant":"0@s.whatsapp.net", "remoteJid": "6289523258649-1604595598@g.us"}, "message": {orderMessage: {itemCount: 2009,status: 200, thumbnail: thumb, surface: 200, message: `⎙ 𝐁𝐚𝐥𝐚𝐬𝐚𝐧 𝐌𝐞𝐧𝐟𝐞𝐞𝐬𝐬`, orderTitle: ucapWaktu, sellerJid: '0@s.whatsapp.net'}}, contextInfo: {"forwardingScore":999,"isForwarded":true},sendEphemeral: true}

if (!m.chat.endsWith('@s.whatsapp.net')) return !0

this.menfess = this.menfess ? this.menfess : {}

let mf = Object.values(this.menfess).find(v => v.status === false && v.penerima == m.sender)
if (!mf) return !0
console.log(m)
if (m.text === 'Balas Pesan' && m.quoted.mtype == 'buttonsMessage') return m.reply("Silahkan kirim pesan balasan kamu.")

const anu = `⬡──⬡─────────⬡──⬡`
const t = `⧈`

let chat =`     ⧈  𝐏 𝐄 𝐒 𝐀 𝐍 -- 𝐁 𝐀 𝐋 𝐀 𝐒 𝐀 𝐍  ⧈\n\nHai Kak @${mf.dari.split('@')[0]},\nKamu Menerima Balasan Nih.

${anu}

Pesan Balasannya : ${m.text}

${anu}`.trim()

//let txt = `Hai kak @${mf.dari.split('@')[0]}, kamu menerima balasan nih.\n\nPesan balasannya:\n${m.text}\n`.trim();

await conn.send2ButtonImg(mf.dari, 'https://telegra.ph/file/cefb0d297b51cfd4864cf.jpg', chat, wm, '𝐌 𝐀 𝐊 𝐀 𝐒 𝐈 𝐇', 'Oke', '𝐌 𝐄 𝐍 𝐔', '.menu', fti)
.then(() => {
m.reply('Berhasil mengirim balasan.')
this.delay(1000)
delete this.menfess[mf.id]
return !0
})
}

module.exports = handler