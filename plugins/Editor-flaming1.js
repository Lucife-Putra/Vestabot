let fetch = require('node-fetch')
let handler = async (m, { conn, args, text }) => {
   let anu = args
  if (!args[0]) throw `Masukkan Text\nContoh : .flaming1 ${conn.getName(m.sender)}`
  m.reply('_Proses..._')
  let res = `https://flamingtext.com/net-fu/proxy_form.cgi?&imageoutput=true&script=fluffy-logo&script=fluffy-logo&fontsize=90&doScale=true&scaleWidth=800&scaleHeight=500&fontsize=100&fillTextColor=%23000&shadowGlowColor=%23000&backgroundColor=%23000&text=${anu}`

conn.sendFile(m.chat, res, 'pixelbot.jpg', wm, m, false)
}
handler.help = ['flaming1'].map(v => v + ' <text>')
handler.tags = ['editor']
handler.command = /^(flaming1)$/i

module.exports = handler