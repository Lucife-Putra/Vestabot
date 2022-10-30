const fetch = require('node-fetch')
const { createHash } = require('crypto')
let Reg = /\|?(.*)([.|] *?)([0-9]*)$/i

let handler = async(m, { conn, usedPrefix: _p, command: _q, text }) => {

let user = global.db.data.users[m.sender]

if (user.registered === true) throw `Kamu sudah terdaftar\nMau daftar ulang? ${_p}unreg <SERIAL NUMBER>`

if (!Reg.test(text)) throw `contoh:\n*${_p + _q} manusia.16*\nAtau Ketik ${_p + verify}`

let [_, name, splitter, age] = text.match(Reg)

if (!name) throw 'Nama tidak boleh kosong (Alphanumeric)'

if (!age) throw 'Umur tidak boleh kosong (Angka)'
age = parseInt(age)

if (age > 101) throw 'Umur terlalu tua'

if (age < 5) throw 'Bayi bisa ngetik sesuai format bjir ._., tapi gatau juga bocil skrg epic² pasti anak ngep ngep:v'

user.name = name.trim()
user.age = age
user.regTime = + new Date
user.registered = true

let sn = createHash('md5').update(m.sender).digest('hex')

let emot = `${pickRandom(['', '', '', '', '', '', '', '', '', '»', '', '', '', '', '', '', '', '', ''])}`

const y = `Hai Kak ${name}, ${ucapWaktu}`
const yy = `
${hki}  ${hka}
${hdi} ${emot} Status : Terverifikasi 
${hdi} ${emot} Nama : ${name}
${hdi} ${emot} Umur : ${age}
${hdi} ${emot} Sn : ${sn}
${hbw}

${hki}  ${hka}
${hdi} ${emot} Money : 
${hdi} ${emot} Limit : 
${hdi} ${emot} Xp :
${hdi} ${emot} Sedang Di Proses...
${hbw}`.trim()

await conn.send2ButtonImg(m.chat, await (await fetch(ppnya)).buffer(), y, yy, '   ', '.anu', '    ', '.owner', m)

}
handler.help = ['daftar'].map(v => v + ' <name>.<age>')
handler.tags = ['info']
handler.command = /^(daftar|reg(is(ter))?)$/i

module.exports = handler

function pickRandom(list) {
  return list[Math.floor(list.length * Math.random())]
}