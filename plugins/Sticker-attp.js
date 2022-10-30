const fetch = require('node-fetch')
const FormData = require('form-data')
const { MessageType } = require('@adiwajshing/baileys')

let handler  = async (m, { conn, text }) => {
	if (!text) throw `Uhm Teks Nya Mana Kak?\nContoh .attp manusia`
  if (text) conn.sendFile(m.chat, global.API('xteam', '/attp', { file: '', text }), 'attp.webp', '', m, false, { asSticker: true })
  
}
handler.help = ['attp <teks>']
handler.tags = ['sticker']
handler.command = /^attp$/i


handler.limit = 10

module.exports = handler

