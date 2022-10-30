const fetch = require('node-fetch')
let handler = async (m, { conn, args }) => {
let response = args.join(' ').split('|')

if (!args[0]) return conn.reply(m.chat, `Uhm...\nTeksnya Manaaa?\nContoh : .logorem Vesta|Bot`, m)

m.reply('proses..')

  let res = `https://ziy.herokuapp.com/api/maker/rem?nama=${response[0]}&apikey=xZiyy`
  
  conn.sendFile(m.chat, res, 'rem.jpg', `Nih kak`, m, false)
}
handler.help = ['logorem'].map(v => v + ' <text|text>')
handler.tags = ['editor']
handler.command = /^(logorem)$/i

handler.register = regist

handler.limit = lmt

module.exports = handler
