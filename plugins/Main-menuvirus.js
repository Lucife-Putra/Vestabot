let handler = async(m, { conn, usedPrefix: _p, command: _q }) => {
let name = await conn.getName(m.sender) 
/*
const sections = [{
	title: `𝐋𝐈𝐒𝐓 𝐕𝐈𝐑𝐔𝐒 𝐁𝐘 ${botname}`,
	rows: [
	{ title: '🌀𝐁𝐔𝐆𝐒𝐓𝐈𝐊🌀', rowId: `${_p + 'bugstik 1'}`, description: `🎗️ 𝐅𝐈𝐓𝐔𝐑 𝐁𝐔𝐆𝐒𝐓𝐈𝐊 𝐁𝐘 ${botname}`},
	{ title: '🌀𝐒𝐀𝐍𝐓𝐄𝐓🌀', rowId: `${_p + 'santet 1'}`, description: `🎗️ 𝐅𝐈𝐓𝐔𝐑 𝐒𝐀𝐍𝐓𝐄𝐓 𝐁𝐘 ${botname}`},
	{ title: '🌀𝐒𝐄𝐍𝐃𝐂𝐑𝐀𝐒𝐇🌀', rowId: `${_p + 'sendcrash 1'}`, description: `🎗️ 𝐅𝐈𝐓𝐔𝐑 𝐒𝐄𝐍𝐃𝐂𝐑𝐀𝐒𝐇 𝐁𝐘 ${botname}`},
	{ title: '🌀𝐒𝐄𝐍𝐃𝐂𝐑𝐀𝐒𝐇2🌀', rowId: `${_p + 'sendcrash2 1'}`, description: `🎗️ 𝐅𝐈𝐓𝐔𝐑 𝐒𝐄𝐍𝐃𝐂𝐑𝐀𝐒𝐇2 𝐁𝐘 ${botname}`},
	{ title: '🌀𝐒𝐄𝐍𝐃𝐂𝐑𝐀𝐒𝐇3🌀', rowId: `${_p + 'sendcrash3 1'}`, description: `🎗️ 𝐅𝐈𝐓𝐔𝐑 𝐒𝐄𝐍𝐃𝐂𝐑𝐀𝐒𝐇3 𝐁𝐘 ${botname}`},
	{ title: '🌀𝐁𝐔𝐆𝐃𝐎𝐂🌀', rowId: `${_p + 'bugdoc 1'}`, description: `🎗️ 𝐅𝐈𝐓𝐔𝐑 𝐁𝐔𝐆𝐃𝐎𝐂 𝐁𝐘 ${botname}`}
]
}
]
	
let kelazz = {
	text: 'Kang Copas Nih\nAda Lawan?',
	footer: `\n\n${wm}`,
	mentions: await conn.parseMention('gada'),
	title: 'Nih Broh Fitur Fiturnya',
	buttonText: "Klik Bruh", 
	sections
	}
conn.sendMessage(m.chat, kelazz, { quoted: ftroli }, { contextInfo: { externalAdReply: { title: 'tang', body: 'kis', sourceUrl: '', thumbnail: thumb2 }}})
*/

capt = `
┏━┈┈『 𝐁𝐔𝐆 𝐌𝐄𝐍𝐔 』┈┈⬣
┆
┆⬡ ${_p}santet 
┆⬡ ${_p}bugstik
┆⬡ ${_p}bugstik2
┆⬡ ${_p}poll
┆⬡ ${_p}bugdoc
┆⬡ ${_p}sendcrash
┆⬡ ${_p}catalog
┆⬡ ${_p}catalogc
┆⬡ ${_p}tocatalogc
┆⬡ ${_p}catalogs
┆⬡ ${_p}tocatalogs
┆⬡ ${_p}buglokas
┆⬡ ${_p}dokcrash
┆⬡ ${_p}bugpc
┆⬡ ${_p}bugpcto
┆⬡ ${_p}bugbutton
┆⬡ ${_p}bugtmp
┆⬡ ${_p}troli
┆⬡ ${_p}vncrash
┆⬡ ${_p}bug1
┆⬡ ${_p}bug2
┆⬡ ${_p}bug2to
┆
┗━───────⬣
`.trim()

conn.send2ButtonImg(m.chat, thumb2, capt.trim(), wm, `🔖𝐌𝐄𝐍𝐔 🔖`,`.menu`, `💫 𝐎𝐖𝐍𝐄𝐑💫`, `.owner`, ftrolii, { contextInfo: { externalAdReply: { title: `Hi ${name}, ${ucapWaktu}`, body: `${wem}  `, sourceUrl: '', thumbnail: thumb3 }}}) 

}
handler.help = ['menubug']
handler.tags = ['main']
handler.command = /^(listbug|listwar|bugmenu|menubug)$/i
module.exports = handler 


