let handler = async (m, { conn, isAdmin, isOwner , usedPrefix: _p }) => {
    if (m.isGroup) {
        if (!(isAdmin || isOwner)) {
            dfail('admin', m, conn)
            throw false
        }
    }
    let id = m.chat
    conn.absen = conn.absen ? conn.absen : {}
    if (!(id in conn.absen)) return await conn.sendButton(m.chat, `𝐓𝐢𝐝𝐚𝐤 𝐀𝐝𝐚 𝐀𝐛𝐬𝐞𝐧 𝐁𝐞𝐫𝐥𝐚𝐧𝐠𝐬𝐮𝐧𝐠!`, wm, `🧧 𝐌𝐔𝐋𝐀𝐈 𝐀𝐁𝐒𝐄𝐍🧧`, `${_p}mulaiabsen`, m)
    delete conn.absen[id]
    m.reply(`berhasil menghapus sesi absen!`)
}
handler.help = ['-absen']
handler.tags = ['absen'] 
handler.command = /^(delete|hapus|-)(attendance|absen)$/i

module.exports = handler