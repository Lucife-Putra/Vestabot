/*
let handler = async (m, { conn, command }) => {
  try {
    let who
    if (m.isGroup) who = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted.sender
    else who = m.quoted.sender ? m.quoted.sender : m.sender
    let pp = await conn.profilePictureUrl(who, 'image').catch((_) => "https://telegra.ph/file/24fa902ead26340f3df2c.png")
    conn.sendMedia(m.chat, pp, m, { jpegThumbnail: await (await fetch(pp)).buffer() })
  } catch {
    let sender = m.sender
    let pp = await conn.profilePictureUrl(sender, 'image').catch((_) => "https://telegra.ph/file/24fa902ead26340f3df2c.png")
    await conn.sendMedia(m.chat, pp, m, { jpegThumbnail: await (await fetch(pp)).buffer() })
  }
}
handler.help = ['getpp <@tag/reply>']
handler.tags = ['tools'] 
handler.command = /^(getpp|getpic?t?)$/i

module.exports = handler

*/

let fetch = require('node-fetch')
let handler = async (m, { conn, text }) => {

  if (!text) return conn.reply(m.chat, 'Tag Orang yang mau diambil ppnya!', m)

  let pp = await (await fetch('https://telegra.ph/file/24fa902ead26340f3df2c.png').buffer())
  let who = m.mentionedJid && m.mentionedJid[0] ? m.mentionedJid[0] : m.fromMe ? conn.user.jid : m.sender
  try {
    pp = await conn.getProfilePicture(who)
  } catch (e) {

  } finally {
    let username = conn.getName(who)
    let str = `Nihh PPnya @${who.replace(/@.+/, '')}`
    let mentionedJid = [who]

    conn.sendFile(m.chat, pp, 'pp.jpg', str, m, false, { contextInfo: { mentionedJid }})
  }
}
handler.help = ['getpp @user']
handler.tags = ['group', 'tools']
handler.command = /^getpp$/i

handler.group = true

module.exports = handler
