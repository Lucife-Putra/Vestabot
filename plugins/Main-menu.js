const fetch = require('node-fetch')
let handler = async (m, { conn, usedPrefix: _p }) => {

//let ppnya = await conn.profilePictureUrl(m.sender).catch(_ => 'https://telegra.ph/file/0e363671f177bc9e377a6.jpg')

let y = `Yow Kak ${users} ${ucapWaktu}`
let yo = `Waktu : ${time} Wib\nJangan Lupa Makan Kak`
let yoo = `Welcome, Hai Kak ${users} ${ucapWaktu}\nSelamat Datang Di Dunia Yang Penuh Dengan KeAjaiban\nSemoga Hari Mu Penuh Dengan Keceriaan π€€\nPencet Button Menunya Kak\nUntuk Melihat List Menu\nJangan Lupa Tersenyumο½‘^βΏ^ο½‘`

await conn.send3ButtonImg(m.chat, ppnya, y, yoo, 'πππππππ', '.anu', 'πππππ', '.owner', 'ππππππ', '.sc', m, { contextInfo: { externalAdReply: { showAdAttribution: true,
	mediaUrl: 'https://instagram.com/marmarsandi',
	mediaType: 2,
	description: urlnya,
	title: yo,
	body: wm,
	thumbnail: thumb,
	sourceUrl: urlnya }}})
}

handler.help = ['menu']
handler.tags = ['main']
handler.command =  /^(menu|help)$/i

handler.register = regist
module.exports = handler
