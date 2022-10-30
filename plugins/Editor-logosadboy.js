const fetch = require('node-fetch')
let handler = async (m, { conn, args }) => {

let response = args.join(' ').split('|')

if (!args[0]) return conn.reply(m.chat, `Uhm...\nTeksnya Manaaa?\nContoh : .logosadboy Vesta|Bot`, m)

m.reply('proses..')

let res = `https://ziy.herokuapp.com/api/maker/sadboy?text1=${response[0]}&text2=${response[1]}&apikey=xZiyy`

conn.sendFile(m.chat, res, 'sadboy.jpg', `Nih kak`, m, false)
}

handler.help = ['logosadboy'].map(v => v + ' <text|text>')
handler.tags = ['editor']
handler.command = /^(logosadboy)$/i

handler.register = regist
handler.limit = lmt

module.exports = handler
