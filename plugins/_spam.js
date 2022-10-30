let handler = async(m, { conn }) => {
let [number, jumlah] = text.split `|`

for (let i = 0; i < jumlah; i++) {
conn.reply(number + '@s.whatsapp.net', 'yow', ftrolii)
}
}
handler.command = /^(spams)$/i
module.exports = handler 