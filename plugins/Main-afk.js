let handler = async(m, { conn, usedPrefix, text }) => {
    let user = global.db.data.users[m.sender]
    user.afk = + new Date
    user.afkReason = text
    conn.sendText(m.chat, `${conn.getName(m.sender)} Sekarang AFK\nDengan Alasan : ${text ? ': ' + text : ''}`, fkontak)
}
handler.help = ['afk <reason>']
handler.tags = ['main']
handler.command = /^afk$/i

module.exports = handler
