let fetch = require('node-fetch')
let handler = async (m, { conn, args, text }) => {
let anu = args
if (!args[0]) throw `Masukkan Text\nContoh : .flaming1 ${conn.getName(m.sender)}`
m.reply('_Proses..._')

let res = `https://flamingtext.com/net-fu/proxy_form.cgi?&imageoutput=true&script=amped-logo&doScale=true&scaleWidth=800&scaleHeight=500&text=${anu}`

conn.sendFile(m.chat, res, 'pixelbot.jpg', 'Nih Broh\nKemren Gak?', m, false)
}
handler.help = ['flaming2'].map(v => v + ' <text>')
handler.tags = ['editor']
handler.command = /^(flaming2)$/i

module.exports = handler


