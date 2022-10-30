

let fetch = require('node-fetch')
let handler = async (m, { text }) => {
  let url = await fetch('https://masgi.herokuapp.com/api/cerpen')
  let cerpen = await url.json()
let hasil = `
*Powered By ${global.botname}*

${cerpen.data}
`.trim()

  m.reply(hasil)
}
handler.help = ['cerpen']
handler.tags = ['quotes']
handler.command = /^cerpen$/i
handler.limit = true

module.exports = handler
