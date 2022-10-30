let fetch = require('node-fetch')
let PhoneNumber = require('awesome-phonenumber')
let handler = async (m, { conn }) => {
  let pp = './src/avatar_contact.png'
  let who = m.mentionedJid && m.mentionedJid[0] ? m.mentionedJid[0] : m.fromMe ? conn.user.jid : m.sender
  try {
    pp = await conn.profilePictureUrl(who, 'image')
  } catch (e) {

  } finally {
    let { name, premium, money, role, level, limit, exp, lastclaim, registered, regTime, age } = global.DATABASE.data.users[m.sender]
    let username = conn.getName(who)
    const mt = pickRandom(['🔖','⧈','⏣','🧧', '👻','⎔', '⭔', '◉', '⬟', '▢', '⛥', '✗', '⛊', '⚜', '⚝', '♪'])
    let st = `┏━┈┈⎆ 𝐏𝐑𝐎𝐅𝐈𝐋𝐄 𝐔𝐒𝐄𝐑
┆
┆${mt} Nama : 
┆⎆ ${username} ${registered ? '(' + name + ') ': ''}
┆
┆${mt} Tag : 
┆⎆ @${who.replace(/@.+/, '')}
┆
┆${mt} Number : 
┆⎆ ${PhoneNumber('+' + who.replace('@s.whatsapp.net', '')).getNumber('international')}
┆
┆${mt} Link : 
┆⎆ https://wa.me/${who.split`@`[0]}
┆
┆${mt} Umur :
┆⎆ ${age}
┆
┗━───────⬣

┏━┈┈⎆ 𝐁𝐀𝐍𝐊 𝐔𝐒𝐄𝐑
┆
┆${mt} Money : 
┆⎆ ${money}
┆
┆${mt} Limit : 
┆⎆ ${limit}
┆
┆${mt} Exp : 
┆⎆ ${exp}
┆
┆${mt} Role:
┆⎆ ${role}
┆
┆${mt} Registered :
┆⎆ ${registered ? '✅': '❌'}
┆
┆${mt} Premium : 
┆⎆ ${premium ? "✅" :"❌"}
┆
┗━───────⬣`

    let mentionedJid = [who]
    conn.send2ButtonImg(m.chat, await(await fetch(ppnya)).buffer(), st, wm, `🔖𝐌𝐄𝐍𝐔 🔖`, `.menu`, `💫 𝐎𝐖𝐍𝐄𝐑 💫`, `.owner`, m, { contextInfo: { mentionedJid }})
}    
}
handler.help = ['profile [@user]']
handler.tags = ['tools']
handler.command = /^profile|pp$/i

handler.register = regist
handler.limit = lmt

module.exports = handler

function pickRandom(list) {
  return list[Math.floor(list.length * Math.random())]
}
