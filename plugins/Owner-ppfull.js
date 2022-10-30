// ==> Recode By Marsandi
const { BufferJSON, WA_DEFAULT_EPHEMERAL, generateWAMessageFromContent, proto, generateWAMessageContent, generateWAMessage, prepareWAMessageMedia, areJidsSameUser, getContentType } = require('@adiwajshing/baileys')
//========================================//
let handler = async(m, { conn, args}) => {
	//========================================//
	    //let bot = conn.user.jid // Bot
	let bot = await conn.decodeJid(conn.user.id)
    let q = m.quoted ? m.quoted : m
    let mime = (q.msg || q).mimetype || ''
    if (/image/.test(mime)) {
	let img = await q.download()
	if (!img) throw `Foto tidak ditemukan`

const { generateProfilePicture } = require("../lib/myfunc")
var { iya } = await generateProfilePicture(img)
await conn.query({ tag: 'iq',  attrs: { to: bot, type: 'set', xmlns: 'w:profile:picture'}, content: [{ tag: 'picture', attrs: { type: 'jpg' }, content: iya }]})
} else { await conn.updateProfilePicture(bot, img )}

m.reply('Sukses')




}
handler.command = /^(pep)$/i
handler.owner = true
module.exports = handler