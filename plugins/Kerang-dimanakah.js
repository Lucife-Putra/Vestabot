let handler = async (m, { conn, command, text }) => {

conn.reply(m.chat, `
*Pertanyaan:* ${command} ${text}
*Jawaban:* ${pickRandom(['di neraka','di surga','di mars','di tengah laut','di dada :v','di hatimu >///<'])}
`.trim(), m, m.mentionedJid ? {
contextInfo: {
mentionedJid: m.mentionedJid
}
} : {})
}
handler.help = ['dimanakah <pertanyaan>']
handler.tags = ['kerang']
handler.command = /^dimanakah$/i

handler.register = registt
handler.owner = false

module.exports = handler
