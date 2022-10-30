let fetch = require('node-fetch')
let handler = async(m, { conn, text }) => {

const tks =`     ❏  𝐈 𝐍 𝐅 𝐎 -- 𝐒 𝐂 𝐑 𝐈 𝐏 𝐓  ❏

Bot Ini Menggunakan Sc :
Youtube : 
_Gada_

Github : 
_https://github.com/DeathBack-uhuy_

Whatsapp : 
_wa.me/6289530291942_

Instagram : 
_https://instagram.com/marmarsandi_

Uhm, Mau Scnya? Chat Aja Kak OwnerNya, Trus Bilang\nBang Bagi Sc Bot Ini Donk, Klo Gk Dikasih, Ajak Barter Ama Bok*p Aja, Mungkin Di Kasih:v\n
Note : Fitur - Fitur Yang Ada Di Bot Ini Adalah Hasil Copas Si *_${ownername}_* ( Kang Copas )
Jangan Bully Saiya Om\nSaiya Masih Pemula`.trim()

await conn.send2ButtonImg(m.chat, await (await fetch('https://telegra.ph/file/554cc6bea28e0709a3aae.jpg')).buffer(),tks, wm, '𝐎 𝐖 𝐍 𝐄 𝐑', '.owner', '𝐌 𝐄 𝐍 𝐔', '.menu', m)

}
handler.help = ['sc']
handler.tags = ['info']
handler.command =  /^(script|sc)$/i

module.exports = handler
