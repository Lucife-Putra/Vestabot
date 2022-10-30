/**
 * Jangan Di Hapus!!
 * 
 * Buatan @SaipulAnuar (ᴹᴿ᭄ King Of Bear ×፝֟͜×)
 * Youtube: https://youtu.be/pwLZpdfO8AU
 * 
 * Ingin bikin fitur tapi tidak bisa coding?
 * hubungi: https://wa.me/6288279268363
 * 
 */

let handler = async (m, { conn, text, usedPrefix, command }) => {

const ftr ={key: {fromMe: false,"participant":"0@s.whatsapp.net", "remoteJid": "6289523258649-1604595598@g.us"}, "message": {orderMessage: {itemCount: 2009,status: 200, thumbnail: thumb, surface: 200, message: `⎘ 𝐏𝐞𝐬𝐚𝐧 𝐌𝐞𝐧𝐟𝐞𝐞𝐬𝐬`, orderTitle: ucapWaktu, sellerJid: '0@s.whatsapp.net'}}, contextInfo: {"forwardingScore":999,"isForwarded":true},sendEphemeral: true}

conn.menfess = conn.menfess ? conn.menfess : {}

if (!text) return conn.reply(m.chat, `  ❐  𝐏 𝐄 𝐑 𝐈 𝐍 𝐓 𝐀 𝐇 -- 𝐒 𝐀 𝐋 𝐀 𝐇  ❐\n\nCara Penggunaan: \n\n${usedPrefix + command} Nomor|Nama Pengirim|Pesan Untuknya\n\nNote Nama Pengirim Boleh Nama Samaran Atau Anonymous.\n\nContoh ${usedPrefix + command} ${m.sender.split`@`[0]}|Tomat|Hallo`, m)

let [jid, name, pesan] = text.split('|')

if ((!jid || !name || !pesan)) return conn.reply(m.chat, `  ⚝ 𝐏 𝐄 𝐑 𝐈 𝐍 𝐓 𝐀 𝐇 -- 𝐒 𝐀 𝐋 𝐀 𝐇 ⚝\n\nContoh: ${usedPrefix + command} Nomor|Nama Pengirim|Pesan Untuknya\n\nNote: Nama Pengirim Boleh Nama Samaran Atau Anonymous.\n\nContoh: ${usedPrefix + command} ${m.sender.split`@`[0]}|Tomat|Hallo`, m)

jid = jid.replace(/[^0-9]/g, '') + '@s.whatsapp.net'

let data = (await conn.onWhatsApp(jid))[0] || {}

if (!data.exists) throw 'Nomer tidak terdaftar di whatsapp.'

if (jid == m.sender) throw 'tidak bisa mengirim pesan menfess ke diri sendiri.'
    
let mf = Object.values(conn.menfess).find(mf => mf.status === true)
    
if (mf) return !0
    
try {
let id = + new Date
const anu = `⬡──⬡─────────⬡──⬡`
var nomor = m.sender

let chat = `Hi @${data.jid.split('@')[0]}, Saya Bot, Ada Yang Kirim Pesan Ke Kamu,\n
Seseorang Temanmu
(Pengirim Rahasia)

${anu}

💌 Isi Pesan : ${pesan}

${anu}

Mau Balas Pesan Ini Kak?\nBisa Kak. Kakak Tinggal Ketik Pesannya,\nNanti Saya Sampaikan Ke *${name}*`
.trim()

let chat1 = `  ⧈  𝐏 𝐄 𝐒 𝐀𝐍 --  𝐓 𝐄 𝐑 𝐊 𝐈 𝐑 𝐈 𝐌  ⧈\n\n👥 Dari : wa.me/${nomor.split("@s.whatsapp.net")[0]}

${anu}

Isi Pesan : ${pesan}

${anu}`.trim()
        
await conn.sendButtonImg(data.jid, 'https://telegra.ph/file/cefb0d297b51cfd4864cf.jpg', chat, wm, 'Balas Pesan', '.balasmenfess', ftr)
.then(() => {
m.reply(chat1)
conn.menfess[id] = {
id,
dari: m.sender,
nama: name,
penerima: data.jid,
pesan: pesan,
status: false
}
return !0
})
} catch (e) {
console.log(e)
m.reply('eror')
}

}
handler.tags = ['Menfess']
handler.help = ['tools'].map(v => v + ' <nomor|nama pengirim|pesan>')
handler.command = /^(mfs|menfess|menfes|chat)$/i

handler.register = regist
handler.limit = lmt

handler.private = false

module.exports = handler
