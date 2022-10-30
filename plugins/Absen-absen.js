let handler = async (m, { conn, usedPrefix: _p }) => {
    let id = m.chat
    conn.absen = conn.absen ? conn.absen : {}
    if (!(id in conn.absen)) {
        await conn.sendButton(m.chat, `𝐓𝐢𝐝𝐚𝐤 𝐀𝐝𝐚 𝐀𝐛𝐬𝐞𝐧 𝐘𝐚𝐧𝐠 𝐁𝐞𝐫𝐥𝐚𝐧𝐠𝐬𝐮𝐧𝐠!\n`, wm, `📍𝐌𝐔𝐋𝐀𝐈 𝐀𝐁𝐒𝐄𝐍📍`, `${_p + 'mulaiabsen'}`, m)
        throw 0
    }

    let absen = conn.absen[id][1]
    const wasVote = absen.includes(m.sender)
    if (wasVote) throw '𝐔𝐝𝐚𝐡 𝐀𝐛𝐬𝐞𝐧 😑'
    absen.push(m.sender)
    let d = new Date
    let date = d.toLocaleDateString('id', {
        day: 'numeric',
        month: 'long',
        year: 'numeric'
    })
    let list = absen.map((v, i) => `┆ ${i + 1}. ${db.data.users[v].name}`).join('\n')
    let caption = `
${date}
${conn.absen[id][2]}

┏━┈┈『 𝐀𝐁𝐒𝐄𝐍 』┈┈⬣
┆🔖𝐓𝐎𝐓𝐀𝐋 : ${absen.length}
${list}
┗━───────⬣\n`.trim()
    await conn.send2Button(m.chat, caption, wm, '🤙 𝐇𝐀𝐃𝐈𝐑 🤙', `${_p + 'absen'}`, '📍𝐂𝐄𝐊📍', `${_p + 'cekabsen'}`, m, { mentions: [m.sender] })
}
handler.help = ['absen']
handler.tags = ['absen']
handler.command = /^(absen|hadir|presence)$/i

module.exports = handler