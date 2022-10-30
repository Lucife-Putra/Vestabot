//let ty = `Hallo Kak , ${ucapWaktu}\nSaya Adalah Bot Whatsapp, Bot Yang Di Buat Dari Hasil Gabut ${ownername}, Apa Ada Yang Bisa Saya Bantu?\nSilahkan Click Button Di Bawah Ya Kak\nJangan Lupa Mandi Kak 😉`
let handler = async (m, { conn, usedPrefix, command, args, isOwner, isAdmin, isROwner }) => {
	const sections = [
   {
	title: ` List Options`,
	rows: [
	    {title: "✨ | Welcome", rowId: `${usedPrefix + command} welcome`},
	    {title: "🌎 | Public", rowId: `${usedPrefix + command} public`},
	{title: "🗣️ | Simi", rowId: `${usedPrefix + command} simi`},
	{title: "🎮 | Game", rowld: `${usedPrefix + command} game` },
	{title: "⏏️ | Autolevelup", rowId: `${usedPrefix + command} autolevelup`},
	{title: "🔎 | Detect", rowId: `${usedPrefix + command} detect`},
	{title: "👤 | WhiteListMyContact", rowId: `${usedPrefix + command} whitelistmycontact`},
	{title: "❗ | Restrict", rowId: `${usedPrefix + command} restrict`},
	{title: "😐 | Nyimak", rowId: `${usedPrefix + command} nyimak`},
	{title: "☑️ | Autoread", rowId: `${usedPrefix + command} autoread`},
	{title: "💬 | PcOnly", rowId: `${usedPrefix + command} pconly`},
	{title: "🏢 | GcOnly", rowId: `${usedPrefix + command} gconly`},
	{title: "📷 | SwOnly", rowId: `${usedPrefix + command} swonly`},
	]
    },
]

const listMessage = {
  text: ' ',
  footer: ucapWaktu,
  title: `*OPTIONS*`,
  buttonText: "Click Here!",
  sections
}

  let isEnable = /true|enable|(turn)?on|1/i.test(command)
  let chat = global.db.data.chats[m.chat]
  let user = global.db.data.users[m.sender]
  let bot = global.db.data.settings[conn.user.jid] || {}
  let type = (args[0] || '').toLowerCase()
  let isAll = false, isUser = false
  switch (type) {
    case 'welcome':
      if (!m.isGroup) {
        if (!isOwner) {
          global.dfail('group', m, conn)
          throw false
        }
      } else if (!isAdmin) {
        global.dfail('admin', m, conn)
        throw false
      }
      chat.welcome = isEnable
      break
     case 'detect':
       if (!m.isGroup) {
         if (!isOwner) {
           global.dfail('group', m, conn)
           throw false
         }
       } else if (!isAdmin) {
         global.dfail('admin', m, conn)
         throw false
       }
       chat.detect = isEnable
       break
    case 'delete':
      if (m.isGroup) {
        if (!(isAdmin || isOwner)) {
          global.dfail('admin', m, conn)
          throw false
        }
      }
      chat.delete = isEnable
      break
    case 'antidelete':
      if (m.isGroup) {
        if (!(isAdmin || isOwner)) {
          global.dfail('admin', m, conn)
          throw false
        }
      }
      chat.delete = !isEnable
      break
    case 'self':
      isAll = true 
      if (!isROwner) {
         global.dfail('rowner', m, conn)
         throw false 
      }
      global.opts['self'] = !isEnable
       break 
    case 'public':
      isAll = true
      if (!isROwner) {
        global.dfail('rowner', m, conn)
        throw false
      }
      global.opts['self'] = !isEnable
      break
      case 'simi':
        if (!isROwner) {
          global.dfail('rowner', m, conn)
          throw false
        }
      chat.simi = isEnable
      break
      case 'game':
        if (m.isGroup) {
        if (!(isAdmin || isOwner)) {
          global.dfail('admin', m, conn)
          throw false
        }}
      chat.game = isEnable
      break
     case 'autolevelup':
       isUser = true
       user.autolevelup = isEnable
       break
     case 'mycontact':
     case 'mycontacts':
     case 'whitelistcontact':
     case 'whitelistcontacts':
     case 'whitelistmycontact':
     case 'whitelistmycontacts':
       if (!isOwner) {
         global.dfail('owner', m, conn)
         throw false
       }
       conn.callWhitelistMode = isEnable
       break
    case 'restrict':
      isAll = true
      if (!isOwner) {
        global.dfail('owner', m, conn)
        throw false
      }
      bot.restrict = isEnable
      break
    case 'nyimak':
      isAll = true
      if (!isROwner) {
        global.dfail('rowner', m, conn)
        throw false
      }
      global.opts['nyimak'] = isEnable
      break
    case 'autoread':
      isAll = true
      if (!isROwner) {
        global.dfail('rowner', m, conn)
        throw false
      }
      global.opts['autoread'] = isEnable
      break
    case 'pconly':
    case 'privateonly':
      isAll = true
      if (!isROwner) {
        global.dfail('rowner', m, conn)
        throw false
      }
      global.opts['pconly'] = isEnable
      break
    case 'gconly':
    case 'grouponly':
      isAll = true
      if (!isROwner) {
        global.dfail('rowner', m, conn)
        throw false
      }
      global.opts['gconly'] = isEnable
      break
    case 'swonly':
    case 'statusonly':
      isAll = true
      if (!isROwner) {
        global.dfail('rowner', m, conn)
        throw false
      }
      global.opts['swonly'] = isEnable
      break
    default:
      if (!/[01]/.test(command)) return await conn.sendMessage(m.chat, listMessage)
      throw false
  }
  conn.reply(m.chat, `*${type}* berhasil Di *${isEnable ? 'Nyalakan' : 'Matikan'}* ${isAll ? 'Untuk Bot Ini' : isUser ? '' : 'Untuk Chat Ini'}`, fkontak)
} 
handler.help = ['en', 'dis'].map(v => v + 'able <option>')
handler.tags = ['group', 'owner']
handler.command = /^((en|dis)able|(tru|fals)e|(turn)?o(n|ff)|[01])$/i

module.exports = handler
