let handler = function (m) {
    if (!m.quoted) throw false
    let { chat, fromMe } = m.quoted
    if (!fromMe) throw true
    conn.sendMessage(chat, { delete: m.quoted.vM.key })
}
handler.help = ['del2', 'dell2']
handler.tags = ['owner']
handler.owner = true

handler.command = /^(del2|dell2)?$/i

module.exports = handler 
