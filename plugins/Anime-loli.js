let scrap = require("../lib/scraper_pinterest")
let fetch = require('node-fetch')

let handler = async (m, { conn, text, usedPrefix, command }) => {
	scrap.pinterest("loli","loli kawai","loli sagiri","anime loli","loli cat").then(a => a[Math.floor(Math.random() * a.length)]).then(b => conn.sendFile(m.chat,b,b,"Done",m))
   }
    
handler.help = ['loli']
handler.tags = ['anime']
handler.command = /^(loli)$/i

handler.register = regist
handler.limit = lmt

module.exports = handler