let fetch = require('node-fetch')
let handler = async (m, { conn, args, text }) => {
let anu = args
if (!args[0]) throw `Masukkan Text\nContoh : .flaming1 ${conn.getName(m.sender)}`
m.reply('_Proses..._')

let res = `https://www6.flamingtext.com/net-fu/proxy_form.cgi?&imageoutput=true&script=sketch-name&doScale=true&scaleWidth=800&scaleHeight=500&fontsize=100&fillTextType=1&fillTextPattern=Warning!&fillColor1Color=%23f2aa4c&fillColor2Color=%23f2aa4c&fillColor3Color=%23f2aa4c&fillColor4Color=%23f2aa4c&fillColor5Color=%23f2aa4c&fillColor6Color=%23f2aa4c&fillColor7Color=%23f2aa4c&fillColor8Color=%23f2aa4c&fillColor9Color=%23f2aa4c&fillColor10Color=%23f2aa4c&fillOutlineColor=%23f2aa4c&fillOutline2Color=%23f2aa4c&backgroundColor=%23101820&text=${anu}`

conn.sendFile(m.chat, res, 'pixelbot.jpg', 'Nih Broh\nKemren Gak?', m, false)
}
handler.help = ['flaming3'].map(v => v + ' <text>')
handler.tags = ['editor']
handler.command = /^(flaming3)$/i

module.exports = handler