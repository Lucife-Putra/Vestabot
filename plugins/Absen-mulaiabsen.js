let handler = async (m, { conn, text, isAdmin, isOwner, usedPrefix: _p }) => {
    if (m.isGroup) {
        if (!(isAdmin || isOwner)) {
            dfail('admin', m, conn)
            throw 0
        }
    }
    conn.absen = conn.absen ? conn.absen : {}
    let id = m.chat
    if (id in conn.absen) {
        await conn.send2Button(m.chat, `𝐌𝐚𝐬𝐢𝐡 𝐀𝐝𝐚 𝐒𝐞𝐬𝐢 𝐀𝐛𝐬𝐞𝐧 𝐁𝐞𝐫𝐥𝐚𝐧𝐠𝐬𝐮𝐧𝐠\n`, wm, `🏷️ 𝐇𝐀𝐏𝐔𝐒 𝐒𝐄𝐒𝐈 🏷️`, `${_p + 'hapusabsen'}`, `📍𝐂𝐄𝐊 𝐀𝐁𝐒𝐄𝐍📍`, `${_p + 'cekabsen'}`, m)
        throw false
    }
    conn.absen[id] = [
        await conn.sendButton(m.chat, `🤙𝐒𝐞𝐬𝐢 𝐀𝐛𝐬𝐞𝐧 𝐃𝐢 𝐌𝐮𝐥𝐚𝐢🤙`, wm,`🔖𝐀𝐁𝐒𝐄𝐍 🔖`, `${_p + 'absen'}`, m),
        [],
        text
    ]
}
handler.help = ['+absen [teks]']
handler.tags = ['absen']
handler.command = /^(start|mulai|\+)(attendance|absen)$/i

module.exports = handler