/*let { MessageType } = require('@adiwajshing/baileys')
let PhoneNumber = require('awesome-phonenumber')
let handler  = async (m, { conn, text }) => {
  
	let vcard = `
BEGIN:VCARD
VERSION:3.0
FN:${ownername}
TEL;type=CELL;type=VOICE;waid=${numb}:${PhoneNumber('+' + numb).getNumber('international')}
END:VCARD`
   conn.sendMessage(m.chat, {
            contacts: {
                displayName: ownername,
                contacts: [{ vcard }]
                
            }
        }
        )

}
handler.help = ['owner']
handler.tags = ['info']
handler.command = /^(owner|creator)$/i
handler.fail = null
module.exports = handler*/