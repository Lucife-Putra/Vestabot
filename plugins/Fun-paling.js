let handler = async (m, { conn, text, participants, usedPrefix, replace }) => {
    if (!text) throw `contoh:\n${usedPrefix}paling cantik`
    let member = participants.map(a => a.jid)
    let cakep = member[Math.floor(Math.random() * member.length)]
    let jawab = `Yang paling ${text} disini adalah @${cakep}`.trim()
    let mentionedJid = [cakep]
    conn.reply(m.chat, jawab, m, { contextInfo: { mentionedJid } })
}
handler.help = ['paling <teks>']
handler.tags = ['fun']
handler.command = /^(paling)$/i

handler.group = true

module.exports = handler