/*let handler = async(m, { isOwner, isAdmin, conn, text, participants }) => {
  if (!(isAdmin || isOwner)) {
                global.dfail('admin', m, conn)
                throw false
                }
  let teks = `${text ? text : ''}\n\n┌─「 Tag All 」\n`
  for (let mem of participants) {
  teks += `├ @${mem.id.split('@')[0]}\n`}
  teks += `└────\n`
  conn.sendMessage(m.chat, { text: teks, mentions: participants.map(a => a.id) }, )
}
handler.help = ['tagall <message>']
handler.tags = ['group']
handler.command = /^(t(agall)?)$/i

handler.group = true

module.exports = handler



const cooldown = 1800000
let handler = async(m, { conn, usedPrefix, text, participants }) => {
    let user = global.db.data.users[m.sender]
    let timers = (cooldown - (new Date - user.lastlimit))
    if (new Date - user.lastlimit <= cooldown) return conn.sendButton(m.chat, 
'*–––––『 COOLDOWN 』–––––*',
`*ᴛᴀɢ-ᴀʟʟ* ʀᴇᴄᴇɴᴛʟʏ ᴜsᴇᴅ, ᴩʟᴇᴀsᴇ ᴡᴀɪᴛ ᴛɪʟʟ ᴄᴏᴏʟᴅᴏᴡɴ ғɪɴɪsʜ.

⏱️ ${timers.toTimeString()}`.trim(), './media/cooldown.jpg', [[`ᴍᴇɴᴜ`, `${usedPrefix}valor`]], m, {asLocation: true})
  let teks = `${text ? text : '*––––––『 TAG All 』––––––*'}\n\n${readMore}`
		      	for (let mem of participants) {
		            teks += `\n@${mem.id.split('@')[0]}`
				}
            await conn.sendMessage(m.chat, { text: teks, mentions: participants.map(a => a.id) }, )
    user.lastlimit = new Date * 1
}
handler.help = ['tagall <message>']
handler.tags = ['group']
handler.command = /^(tagall|all)$/i

handler.group = true
handler.limit = true
handler.cooldown = cooldown

module.exports = handler

const more = String.fromCharCode(8206)
const readMore = more.repeat(4001)
*/

let handler = async(m, { conn, text, participants }) => {
  let teks = `*––––––『 TAG All 』––––––*\n*PESAN* : ${text ? text : ' '}\n\n`
		      	for (let mem of participants) {
		            teks += `🎭 @${mem.id.split('@')[0]}\n`
				}
                conn.sendMessage(m.chat, { text: teks, mentions: participants.map(a => a.id) }, )
}
handler.help = ['tagall <pesan>'] 
handler.tags = ['group']
handler.command = /^(tagall)$/i

handler.group = true

module.exports = handler


