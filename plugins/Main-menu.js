const fetch = require('node-fetch')
let handler = async (m, { conn, usedPrefix: _p }) => {

//let ppnya = await conn.profilePictureUrl(m.sender).catch(_ => 'https://telegra.ph/file/0e363671f177bc9e377a6.jpg')

let y = `Yow Kak ${users} ${ucapWaktu}`
let yo = `Waktu : ${time} Wib\nJangan Lupa Makan Kak`
let yoo = `Welcome, Hai Kak ${users} ${ucapWaktu}\nSelamat Datang Di Dunia Yang Penuh Dengan KeAjaiban\nSemoga Hari Mu Penuh Dengan Keceriaan 🤤\nPencet Button Menunya Kak\nUntuk Melihat List Menu\nJangan Lupa Tersenyum｡^‿^｡`

await conn.send3ButtonImg(m.chat, ppnya, y, yoo, '𝐌𝐄𝐍𝐔𝐍𝐘𝐀', '.anu', '𝐎𝐖𝐍𝐄𝐑', '.owner', '𝐒𝐂𝐑𝐈𝐏𝐓', '.sc', m, { contextInfo: { externalAdReply: { showAdAttribution: true,
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
