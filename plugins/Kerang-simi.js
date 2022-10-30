/*let fetch = require('node-fetch')
let handler = async (m, { text }) => {
  let res = await fetch(global.API('https://api.simsimi.net', '/v2/', { text: encodeURIComponent(text), lc: "id" }, ''))
  let json = await res.json()
  if (json.success) m.reply(json.success)
  else throw json
}
handler.help = ['simi'].map(v => v + ' <teks>')
handler.tags = ['kerang']
handler.command = /^((sim)?simi|simih)$/i

module.exports = handler
*/

const fetch = require('node-fetch')
let handler = async (m, { text, args }) => {
  if (!args[0]) throw `Use example .simi halo`
  let api = await fetch(`https://simsimi.info/api/?text=${text}&lc=id`)
  let res = await api.json()
  let { message } = res
  m.reply(message)
}
handler.command = ['simi']
handler.tags = ['kerang']
handler.help = ['simi']

module.exports = handler