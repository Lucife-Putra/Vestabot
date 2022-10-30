let handler = async (m, { conn, text, command }) => {
  conn.reply(m.chat, `
*Pertanyaan:* ${command} ${text}
*Jawaban:* ${Math.floor(Math.random() * 10)} ${pickRandom(['detik', 'menit', 'jam', 'hari', 'minggu', 'bulan', 'tahun', 'dekade', 'abad'])} lagi ...
`.trim(), m)
}
handler.help = ['', 'kah'].map(v => 'kapan' + v + ' <text>?')
handler.tags = ['kerang']
handler.command = /^kapan(kah)?/i

handler.group = true

module.exports = handler

function pickRandom(list) {
  return list[Math.floor(Math.random() * list.length)]
}

