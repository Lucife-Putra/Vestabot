// all chats ke broadcast

let handler  = async (m, { conn, text }) => {

  let chats = Object.keys(await conn.chats)

  conn.reply(m.chat, `_Mengirim pesan broadcast ke ${chats.length} chat_`, m)

  for (let id of chats) {

       let bcbg = 'https://telegra.ph/file/7f2ae1060ba637b2297d7.jpg'

       await conn.delay(1500)

       await conn.send2ButtonImg(id, bcbg, text.trim(), wm, 'Menu', '.menu', 'Owner', '.owner', ftroli)

     }

  m.reply('*Broadcast selesai*')

}

handler.help = ['broadcast','bc'].map(v => v + ' <teks>')

handler.tags = ['owner']

handler.command = /^(broadcast|bc)$/i

handler.owner = true

module.exports = handler
