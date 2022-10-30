let axios = require('axios')
let cheerio = require('cheerio')
let fetch = require('node-fetch')

let handler = async (m, { conn, args, text, usedPrefix, command }) => {
  if (!text) throw `*Perintah ini untuk mengunduh postingan instagram story*\n\nContoh:\n${usedPrefix + command} alinursetiawan24`
  let res = await fetch(`https://megayaa.herokuapp.com/api/igstori?username=${text}`)
   if (!res.ok) return m.reply('Error')
   let json = await res.json()
   if (!json.status) throw json
    await m.reply('Sedang di proses..')
    for (let { url, type } of json.data) {
      await conn.delay(1500)
      conn.sendFile(m.chat, url, 'ig' + (type == 'image' ? '.jpg' : '.mp4'), '', m)
    }
}
handler.help = ['igstory'].map(v => v + ' <username>')
handler.tags = ['downloader']
handler.command = /^(igs(tory)?)$/i
handler.limit = lmt
handler.group = false

module.exports = handler