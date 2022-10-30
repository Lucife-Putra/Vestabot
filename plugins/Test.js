
let handler = async(m, { conn, text, command, args }) => {
	//conn.sendFile(m.chat,  thumb, 'rawrr', 'yo', m, { contextInfo: {externalAdReply: { title: wm, body: wm, sourceUrl: '', thumbnail: thumb}}})
const { V2 } = require('../src/virtex/V2')
conn.reply(m.chat, 'Penggunaan .chat nomor|pesan untuknya\nContoh : .chat 628xxxxxxxxxx|hai owner', m, {quoted: m, thumbnail: await (await fetch('https://telegra.ph/file/b9a32ee41970d7a71b476.jpg')).buffer(),
        contextInfo: { forwardingScore: 999, isForwarded: true, externalAdReply: {title: 'Gunakan Dengan Bijak Yah Kak', sourceUrl: 'http://wa.me/6282181825945?text=.chat 6285158866902|Hi Jarot Hehehe 🌹', body: 'Oscarbot By Jarot', thumbnail: await (await fetch('https://telegra.ph/file/345dfdd724db22d617ed3.jpg')).buffer(),}}})
}
handler.command = /^(anjay)$/i
module.exports = handler
 