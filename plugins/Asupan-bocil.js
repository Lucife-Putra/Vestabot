let fetch = require('node-fetch')
let handler = async(m, { conn }) => {
  let res = await fetch('https://docs-jojoapi.herokuapp.com/api/asupan/bocil?apikey=Syaa')
  if (!res.ok) throw await res.text()
  let json = await res.json()
  if (!json.result.url) throw 'Error!'
  conn.sendFile(m.chat, json.result.url, '', 'Dih Pedo', m)
}
handler.help = ['bocil']
handler.tags = ['asupan']
handler.command = /^(bocil)$/i
//MADE IN ERPAN 1140 BERKOLABORASI DENGAN BTS
module.exports = handler
