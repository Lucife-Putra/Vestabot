let handler = async (m, { text, command, usedPrefix }) => {
    if (!text) throw `Use example ${usedPrefix}${command} i'm alien?`
    const yo = `${pickRandom(['Mungkin suatu hari',
        'Tidak juga',
        'Tidak keduanya',
        'Kurasa tidak',
        'Ya',
        'Coba tanya lagi',
        'Tidak ada'])}`

conn.reply(m.chat, yo, m)
}
handler.help = ['kerang', 'kerangajaib'].map(v => v + ' <teks>')
handler.tags = ['kerang']

handler.command = /^(kulit)?kerang(ajaib)?$/i

module.exports = handler

//function pickRandom(list) {
//  return list[Math.floor(Math.random() * list.length)]
//}