const fetch = require('node-fetch')
let handler = async (m, { conn, args, text }) => {

let response = args.join(' ').split('|')

if (!args[0]) return conn.reply(m.chat, `Uhm...\nTeksnya Manaaa?\nContoh : .logoneko Vesta|Bot`, m)
  
  m.reply('Proses...')
  let res = `https://ziy.herokuapp.com/api/maker/girlneko?text1=${response[0]}&text2=${response[1]}&apikey=xZiyy`
  conn.sendFile(m.chat, res, 'neko.jpg', `Sudah Jadi`, m, false)
}
handler.help = ['logoneko'].map(v => v + ' <text|text>')
handler.tags = ['maker']
handler.command = /^(logoneko)$/i

handler.register = regist
handler.limit = lmt

module.exports = handler
