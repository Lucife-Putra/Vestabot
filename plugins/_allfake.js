let fs = require('fs')
let fetch = require('node-fetch')
const moment = require('moment-timezone')
let handler = m => m
handler.all = async function (m) {

const { V10 } = require('../src/virtex/V10')
const { ngazap } = require('../src/virtex/ngazap')
const { notif1 } = require('../src/virtex/notif1')

//========================================//

global.wait = '𝐖𝐚𝐢𝐭 𝐏𝐫𝐨𝐜𝐞𝐬𝐬...'
global.error = '𝐄 𝐑 𝐑 𝐎 𝐑\nMunkin Api Mati'

global.users = await conn.getName(m.sender) 
global.ucapWaktu = waktunya()
global.time = moment.tz('Asia/Jakarta').format("HH:mm:ss")
global.pickRandom = pickRandom

let who = m.mentionedJid && m.mentionedJid[0] ? m.mentionedJid[0] : m.fromMe ? conn.user.jid : m.sender

global.ppnya = await conn.profilePictureUrl(who, 'image').catch(_ => 'https://telegra.ph/file/0e363671f177bc9e377a6.jpg')

let pp = 'https://telegra.ph/file/2d06f0936842064f6b3bb.png'

global.dok = pickRandom(["application/vnd.ms-excel", "application/vnd.openxmlformats-officedocument.presentationml.presentation", "application/msword", "application/pdf"])

global.adReply = {
contextInfo: {
forwardingScore: 9999,
//isForwarded: true, // ini biar ada tulisannya diteruskan berkali-kali, jika ingin di hilangkan ganti true menjadi false
externalAdReply: { // Bagian ini sesuka kalian berkreasi :'v
showAdAttribution: true,
title: ucapWaktu,
body: wm,
mediaUrl: '',
description: `${botname} By ${ownername}`,
previewType: "PHOTO",
thumbnail: thumb2,
sourceUrl: "", } } }

//========================================//
// ==> Fake Biasa
global.fkontak = { key: {participant : '0@s.whatsapp.net'}, message: { 'contactMessage': { 'displayName': `${conn.getName(m.sender)}\n${wm}`, 'vcard': `BEGIN:VCARD\nVERSION:3.0\nN:XL;${wm},;;;\nFN:${wm},\nitem1.TEL;waid=${m.sender.split('@')[0]}:${m.sender.split('@')[0]}\nitem1.X-ABLabell:Ponsel\nEND:VCARD`, 'jpegThumbnail': thumb, thumbnail: thumb,sendEphemeral: true}}}

global.ftroli ={key: {fromMe: false,"participant":"0@s.whatsapp.net", "remoteJid": "6289523258649-1604595598@g.us"}, "message": {orderMessage: {itemCount: 2009,status: 200, thumbnail: thumb, surface: 200, message: `${wm}`, orderTitle: ucapWaktu, sellerJid: '0@s.whatsapp.net'}}, contextInfo: {"forwardingScore":999,"isForwarded":true},sendEphemeral: true}

global.ftoko = { key: { fromMe: false, participant: `0@s.whatsapp.net`, ...(m.chat ? { remoteJid: "6282127487538@s.whatsapp.net" } : {}) }, message: { "productMessage": { "product": { "productImage":{ "mimetype": "image/jpeg",
"jpegThumbnail": thumb }, "title": wm, "description": "Simple Bot Whatsapp", "currencyCode": "USD", "priceAmount1000": "20000000", "retailerId": "Ghost", "productImageCount": 1 }, "businessOwnerJid": `0@s.whatsapp.net`
} } }
       
//========================================//
// ==> Fake Virus

global.ftrolii = { key: { remoteJid: 'status@broadcast', participant: '0@s.whatsapp.net' }, message: { orderMessage: { itemCount: 2019, status: 1, surface: 1, message: wem, orderTitle: ucapWaktu, sellerJid: '0@s.whatsapp.net'} } }

global.fdocs = { key : { participant : '0@s.whatsapp.net' }, message: { documentMessage: { title: `${wem}\n${notif1}`, jpegThumbnail: thumb2, sendEphemeral: true } } }

global.ftroliii ={key: {fromMe: false,
"participant":"0@s.whatsapp.net", 
"remoteJid": "@g.us"},
"message": {orderMessage: 
{itemCount: 2006,
status: 200, 
thumbnail: thumb2,
surface: 200, 
message: `${wem}\n${ngazap}`,
token: "AR40+xXRlWKpdJ2ILEqtgoUFd45C8rc1CMYdYG/R2KXrSg==",
totalAmount1000: "500000000000000",
totalCurrencyCode: "IDR",
orderTitle: `${wem} ${ngazap}`,
sellerJid: '0@s.whatsapp.net'}}, 
contextInfo: {"forwardingScore":999,"isForwarded":true},
sendEphemeral: true}

global.doc = { 
key: {
fromMe: false, 
participant: `0@s.whatsapp.net`, ...(m.chat ? { remoteJid: "@s.whatsapp.net" } : {}) 
},
"message": {
"documentMessage": {
"url": "https://mmg.whatsapp.net/d/f/Aj85sbZCtNtq1cJ6JupaBUTKfgrl2zXRXGvVNWAbFnsp.enc",
"mimetype": "application/octet-stream",
"fileSha256": "TSSZu8gDEAPhp8vjdtJS/DXIECzjrSh3rmcoHN76M9k=",
"fileLength": "64455",
"pageCount": 1,
"mediaKey": "P32GszzU5piUZ5HKluLD5h/TZzubVJ7lCAd1PIz3Qb0=",
"fileName": `${wem}\n${ngazap}`,
"fileEncSha256": "ybdZlRjhY+aXtytT0G2HHN4iKWCFisG2W69AVPLg5yk="
}}}

global.fkontakk = { key: {participant : '0@s.whatsapp.net'}, message: { 'contactMessage': { 'displayName': `${wem}\n${ngazap}`, 'vcard': `BEGIN:VCARD\nVERSION:3.0\nN:XL;${wem},;;;\nFN:${wem},\nitem1.TEL;waid=${m.sender.split('@')[0]}:${m.sender.split('@')[0]}\nitem1.X-ABLabell:Ponsel\nEND:VCARD`, 'jpegThumbnail': thumb2, thumbnail: thumb2,sendEphemeral: true}}}

}
module.exports = handler

function waktunya() {
const time = moment.tz('Asia/Jakarta').format('HH')
let res = "𝐒𝐞𝐥𝐚𝐦𝐚𝐭 𝐓𝐞𝐧𝐠𝐚𝐡 𝐌𝐚𝐥𝐚𝐦 🌃"
if (time >= 4) {
res = "𝐒𝐞𝐥𝐚𝐦𝐚𝐭 𝐏𝐚𝐠𝐢 🌄"
}
if (time > 10) {
res = "𝐒𝐞𝐥𝐚𝐦𝐚𝐭 𝐒𝐢𝐚𝐧𝐠 🌤️"
}
if (time >= 15) {
res = "𝐒𝐞𝐥𝐚𝐦𝐚𝐭 𝐒𝐨𝐫𝐞 🌇"
}
if (time >= 18) {
res = "𝐒𝐞𝐥𝐚𝐦𝐚𝐭 𝐏𝐞𝐭𝐚𝐧𝐠 🏙️"
}
if (time >= 21) {
res = "𝐒𝐞𝐥𝐚𝐦𝐚𝐭 𝐓𝐞𝐧𝐠𝐚𝐡 𝐌𝐚𝐥𝐚𝐦 🌃"
}
return res
}

function pickRandom(list) {
  return list[Math.floor(list.length * Math.random())]
}

/*
 { contextInfo: { externalAdReply: { showAdAttribution: true,
    mediaUrl: 'https://instagram.com/b4c00t.dtz',
    mediaType: 2, 
    description: urlnya,
    title: "Follow Ig Gw",
    body: wm,
    thumbnail: thumb,
    sourceUrl: urlnya
     }}
  }
*/