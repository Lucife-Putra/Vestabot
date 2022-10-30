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
    conn.menfess = conn.menfess ? conn.menfess : {}
    if (!text) throw `*Cara penggunaan :*\n\n${usedPrefix + command} nomor|nama pengirim|pesan\n\n*Note:* nama pengirim boleh nama samaran atau anonymous.\n\n*Contoh:* ${usedPrefix + command} ${m.sender.split`@`[0]}|Wajan|Halo.`;
    let [jid, name, pesan] = text.split('|');
    if ((!jid || !name || !pesan)) throw `*Cara penggunaan :*\n\n${usedPrefix + command} nomor|nama pengirim|pesan\n\n*Note:* nama pengirim boleh nama samaran atau anonymous.\n\n*Contoh:* ${usedPrefix + command} ${m.sender.split`@`[0]}|Wajan|Halo.`;
    jid = jid.replace(/[^0-9]/g, '') + '@s.whatsapp.net';
    let data = (await conn.onWhatsApp(jid))[0] || {};
    if (!data.exists) throw 'Nomer tidak terdaftar di whatsapp.';
    if (jid == m.sender) throw 'tidak bisa mengirim pesan menfess ke diri sendiri.'
    let mf = Object.values(conn.menfess).find(mf => mf.status === true)
    if (mf) return !0
    try {
    	let id = + new Date
     const anu = `⬡──⬡─────────⬡──⬡`
  	  var nomor = m.sender
        let chat = `Hi @${data.jid.split('@')[0]}, Saya Bot Ada Yang Kirim Pesan Ke Kamu,\n
Seseorang Temanmu
(Pengirim Rahasia)

${anu}

💌 Pesan : ${pesan}

${anu}

Mau Balas Pesan Ini Kak?\nBisa Kak. Kakak Tinggal Ketik Pesan,\nNanti Saya Sampaikan Ke *${name}*`
.trim();
		let chat1 = `Sukses Mengirim Pesan
👥 Dari : wa.me/${nomor.split("@s.whatsapp.net")[0]}

${anu}

Isi Pesan : ${pesan}

${anu}`.trim();
        
        await conn.sendButtonImg(data.jid, 'https://telegra.ph/file/cefb0d297b51cfd4864cf.jpg', chat, wm, 'Balas Pesan', '.balasmenfess', null)
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
        m.reply('eror');
    }
}
handler.tags = ['Menfess']
handler.help = ['tools'].map(v => v + ' <nomor|nama pengirim|pesan>')
handler.command = /^(mfs|menfess|menfes|chat)$/i
handler.private = false

module.exports = handler
