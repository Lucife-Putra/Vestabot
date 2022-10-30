const delay = time => new Promise(res => setTimeout(res, time))
let handler = async(m, { conn }) => {
	conn.p = conn.p ? conn.p : {}
	let id = m.chat
	conn.p[id] = [
	await conn.sendKontak(m.chat, owner, fkontak, { contexInfo: { forwardingScore: 99999, isForwarded: true } })
	]
	await delay(100)
  return conn.sendMessage(m.chat, { text: `𝙃𝙖𝙮 𝙠𝙖𝙠 @${await m.sender.split('@')[0]}, 𝙞𝙩𝙪 𝙣𝙤𝙢𝙚𝙧 𝙤𝙬𝙣𝙚𝙧𝙠𝙪 𝙟𝙖𝙣𝙜𝙖𝙣 𝙙𝙞𝙨𝙥𝙖𝙢 𝙮𝙖𝙝, 𝙘𝙝𝙖𝙩 𝙥 𝙩𝙞𝙙𝙖𝙠 𝙖𝙠𝙖𝙣 𝙙𝙞𝙗𝙖𝙡𝙖𝙨`, mentions: [m.sender] }, { quoted: conn.p[id][0] })
  await delay(100)
  return delete conn.p[id]
}

handler.help = ['owner'] 
handler.tags = ['info']
handler.command = /^(owner|creator)$/i

module.exports = handler 
