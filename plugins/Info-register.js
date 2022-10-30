const { createHash } = require('crypto')
let Reg = /\|?(.*)([.|] *?)([0-9]*)$/i

let handler = async(m, { conn, usedPrefix: _p, command: _q, text }) => {

let emot = `${pickRandom(['⎔', '✦', '⭑', 'ᯬ', '⭔', '◉', '⬟', '▢', '᭻', '»', '〆', '々', '⛥', '✗', '⛊', '⚜', '⚝', '♪'])}`

let user = global.db.data.users[m.sender]
if (user.registered === true) throw `Kamu sudah terdaftar\nMau daftar ulang? ${_p}unreg <SERIAL NUMBER>`

let [_, name, splitter, age] = text.match(Reg)

if (!Reg.test(text)) return conn.reply(m.chat, `  ✗ 𝐏 𝐄 𝐍 𝐆 𝐆 𝐔 𝐍 𝐀 𝐀 𝐍 -- 𝐒 𝐀 𝐋 𝐀 𝐇 ✗\nContoh : ${_p + _q} Manusia.16\nAtau Ketik ${_p + verify}`, m)

if (!name) throw `Nama tidak boleh kosong (Alphanumeric)`

if (!age) throw `Umur tidak boleh kosong (Angka)`

age = parseInt(age)

if (age > 101) throw `Umur terlalu tua`

if (age < 5) throw `Bayi bisa ngetik sesuai format bjir ._., tapi gatau juga bocil skrg epic² pasti anak ngep ngep:v`

user.name = name.trim()
user.age = age
user.regTime = + new Date
user.registered = true

let mney = global.db.data.users[m.sender].money += 100000
let lmit = global.db.data.users[m.sender].limit += 1000
let expnye = global.db.data.users[m.sender].exp += 1000


let sn = createHash('md5').update(m.sender).digest('hex')

const y = `Hai Kak @${m.sender.split('@')[0]}, ${ucapWaktu}`
const yy = `
▣═━–〈 𝐑𝐄𝐆𝐈𝐒𝐓𝐄𝐑 〉–━═▣
┊
┊${emot} Status : Terverifikasi ✅
┊${emot} Nama : ${name}
┊${emot} Umur : ${age}
┊${emot} Sn : ${sn}
┊
┗–––––––––––━═▣

▣═━–〈 𝐇𝐀𝐃𝐈𝐀𝐇 〉–━═▣
┊
┊${emot} Money : 100.000
┊${emot} Limit : 1000
┊${emot} Xp : 1000
┊
┗–––––––––––━═▣`

await conn.send2ButtonImg(m.chat, ppnya, y, yy, '𝐌 𝐄 𝐍 𝐔', '.anu', '𝐎 𝐖 𝐍 𝐄 𝐑', '.owner', m)

}
handler.help = ['daftar'].map(v => v + ' <name>.<age>')
handler.tags = ['info']
handler.command = /^(daftar|reg(is(ter))?)$/i

module.exports = handler

function pickRandom(list) {
  return list[Math.floor(list.length * Math.random())]
}