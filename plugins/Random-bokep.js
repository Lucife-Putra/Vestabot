let handler = async (m, { conn, usedPrefix: _p, command }) => {
conn.fakeReply(m.chat, `50 𝐋𝐢𝐦𝐢𝐭 𝐓𝐞𝐫𝐩𝐚𝐤𝐚𝐢` , '0@s.whatsapp.net', '「 𝐖𝐚𝐢𝐭 𝐏𝐫𝐨𝐜𝐞𝐬𝐬 」𝐓𝐨𝐛𝐚𝐭 𝐍𝐠𝐞𝐧𝐭*𝐝', 'status@broadcast')
	conn.send3ButtonVid(m.chat, 'https://yog-apikey.herokuapp.com/api/bokep?apikey=YogGanz', `Makan Tuh Bok*p`, wm, `💫 𝐍𝐄𝐗𝐓 💫`, `${_p}command`, `👻 𝐌𝐀𝐊𝐀𝐒𝐈𝐇 👻`, `ok`, `🔖𝐌𝐄𝐍𝐔 🔖`,`.menu`, m)
}
handler.help = ['bkp']
handler.tags = ['random']

handler.command = /^(bkp)$/i
handler.limit = 50
module.exports = handler


