/*let handler = async (m, { conn, text, participants, usedPrefix }) => {
    if (!text) throw `Example:\n${usedPrefix}paling cantik`
    let member = participants.map(u => u.jid)
    let tagged = member[Math.floor(Math.random() * member.length)]
    let jawab = `Yang paling ${text} disini adalah @${tagged.replace(/@.+/, '')}`.trim()
    let mentionedJid = [tagged]
    conn.reply(m.chat, jawab, m, { contextInfo: { mentionedJid } })
}
handler.help = ['paling <teks>']
handler.tags = ['kerang']
handler.command = /^(paling)$/i

handler.limit = false
handler.register = false

module.exports = handler
*/

let handler = async (m, { conn, command, usedPrefix, text, groupMetadata }) => {

if (!text) throw `Contoh:
${usedPrefix + command} Yang terserah`
let em = ['😀','😂','😃','🗿','🤤','😁','😐','🙂','☹️']

    let toM = a => '@' + a.split('@')[0]
    let ps = groupMetadata.participants.map(v => v.id)
    let a = pickRandom(ps)
    let am = pickRandom(em)
    
    await conn.reply(m.chat, `Yang Paling *${text}* Disini Adalah ${a} ${am}`, m)
  
//  conn.sendButton(m.chat, `Yang Paling *${text}* Adalah ${toM(a)} ${am}`, author, null, [['Cari lagi', '.yang ' + text]], m,{mentions: [a]})
    
}
handler.help = ['paling'].map(v => v + ' <teks>')
handler.tags = ['fun']
handler.command = ['paling']

handler.group = true

module.exports = handler

function pickRandom(list) {
  return list[Math.floor(list.length * Math.random())]
}
