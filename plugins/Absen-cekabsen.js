let handler = async (m, { conn, usedPrefix: _p }) => {
    let id = m.chat
    conn.absen = conn.absen ? conn.absen : {}
    if (!(id in conn.absen)) {
        await conn.sendButton(m.chat, `𝐓𝐢𝐝𝐚𝐤 𝐀𝐝𝐚 𝐀𝐛𝐬𝐞𝐧 𝐘𝐚𝐧𝐠 𝐁𝐞𝐫𝐥𝐚𝐧𝐠𝐬𝐮𝐧𝐠!`, wm, `📍𝐌𝐔𝐋𝐀𝐈 𝐀𝐁𝐒𝐄𝐍📍`, `${_p}mulaiabsen`, m)
        throw false
    }

    let d = new Date
    let date = d.toLocaleDateString('id', {
        day: 'numeric',
        month: 'long',
        year: 'numeric'
    })
    let absen = conn.absen[id][1]
    let list = absen.map((v, i) => `┆${i + 1}. ${db.data.users[v].name}`).join('\n')
    let caption = `
𝐃𝐀𝐓𝐄 : ${date}


┏━┈┈『 𝐀𝐁𝐒𝐄𝐍 』┈┈⬣
┆🔖𝐓𝐎𝐓𝐀𝐋 : ${absen.length}
${list}
┗━───────⬣`.trim()
    await conn.send2Button(m.chat, caption, wm,  `🤙 𝐇𝐀𝐃𝐈𝐑 🤙`, `${_p}absen`, `🏷️ 𝐇𝐀𝐏𝐔𝐒 𝐒𝐄𝐒𝐈 🏷️`, `${_p}hapusabsen`, m)
}
handler.help = ['cekabsen']
handler.tags = ['absen']
handler.command = /^(cekabsen)$/i

module.exports = handler