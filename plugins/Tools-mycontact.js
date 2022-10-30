let { MessageType } = require('@adiwajshing/baileys')
let PhoneNumber = require('awesome-phonenumber')
let handler  = async (m, { conn, text }) => {
  var name
  if (text) name = text
  else name = conn.getName(m.sender)
	var number = m.sender.split('@')[0]
	let vcard = `
BEGIN:VCARD
VERSION:3.0
FN:${name.replace(/\n/g, '\\n')}
TEL;type=CELL;type=VOICE;waid=${number}:${PhoneNumber('+' + number).getNumber('international')}
END:VCARD`
   conn.sendMessage(m.chat, {
            contacts: {
                displayName: name,
                contacts: [{ vcard }]
            }
        })

}
handler.help = ['mycontact']
handler.tags = ['tools']
handler.command = /^(me|save|saveme|mycontact)$/i

handler.register = registt
handler.group = true
handler.fail = null
module.exports = handler