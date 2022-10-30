//=======================================//
// ==> Module
const {
    default: makeWASocket,
    makeWALegacySocket,
    extractMessageContent,
    makeInMemoryStore,
    proto,
    prepareWAMessageMedia,
    downloadContentFromMessage,
    getBinaryNodeChild,
    jidDecode,
    areJidsSameUser,
    generateForwardMessageContent,
    generateWAMessageFromContent,
    WAMessageStubType,
    WA_DEFAULT_EPHEMERAL,
} = require('@adiwajshing/baileys')
const chalk = require('chalk')
const fetch = require('node-fetch')
const FileType = require('file-type')
const PhoneNumber = require('awesome-phonenumber')
const fs = require('fs')
const path = require('path')
const pino = require('pino')
const Jimp = require('jimp')
const moment = require("moment-timezone")
const time = moment.tz('Asia/Jakarta').format("HH:mm:ss")
//=======================================//
// ==> Jalur Bot
const { toAudio, toPTT, toVideo } = require('./converter')
const { imageToWebp, videoToWebp, writeExifImg, writeExifVid } = require('./exif')
const store = makeInMemoryStore({ logger: pino().child({ level: 'silent', stream: 'store' }) })
//=======================================//
// ==> Anunya
	exports.makeWASocket = (connectionOptions, options = {}) => {
let conn = (global.opts['legacy'] ? makeWALegacySocket : makeWASocket)(connectionOptions)

	conn.loadMessage = (messageID) => {
return Object.entries(conn.chats)
.filter(([_, { messages }]) => typeof messages === 'object')
.find(([_, { messages }]) => Object.entries(messages)
.find(([k, v]) => (k === messageID || v.key?.id === messageID)))
?.[1].messages?.[messageID]
}

	conn.decodeJid = (jid) => {
if (!jid) return jid
if (/:\d+@/gi.test(jid)) {
let decode = jidDecode(jid) || {}
return decode.user && decode.server && decode.user + '@' + decode.server || jid
} else return jid
}

if (conn.user && conn.user.id) conn.user.jid = conn.decodeJid(conn.user.id)
conn.chats = {}
conn.contacts = {}

function updateNameToDb(contacts) {
if (!contacts) return
for (let contact of contacts) {
let id = conn.decodeJid(contact.id)
if (!id) continue
let chats = conn.contacts[id]
if (!chats) chats = { id }
let chat = {
...chats,
...({
...contact, id, ...(id.endsWith('@g.us') ?
{ subject: contact.subject || chats.subject || '' } :
{ name: contact.notify || chats.name || chats.notify || '' })
} || {})
}
conn.contacts[id] = chat
}
}

conn.ev.on('contacts.upsert', updateNameToDb)
conn.ev.on('groups.update', updateNameToDb)
conn.ev.on('group-participants.update', async function updateParticipantsToDb({ id, participants, action }) {
id = conn.decodeJid(id)
if (!(id in conn.contacts)) conn.contacts[id] = { id }

let groupMetadata = Object.assign((conn.contacts[id].metadata || {}), await conn.groupMetadata(id))
for (let participant of participants) {
participant = conn.decodeJid(participant)

switch (action) {
case 'add': {
if (participant == conn.user.jid) groupMetadata.readOnly = false
let same = (groupMetadata.participants || []).find(user => user && user.id == participant)
if (!same) groupMetadata.participants.push({ id, admin: null })
}
break
case 'remove': {
if (participant == conn.user.jid) groupMetadata.readOnly = true
let same = (groupMetadata.participants || []).find(user => user && user.id == participant)
if (same) {
let index = groupMetadata.participants.indexOf(same)
if (index !== -1) groupMetadata.participants.splice(index, 1)
}
}
break
}
}
    
conn.contacts[id] = {
...conn.contacts[id],
subject: groupMetadata.subject,
desc: groupMetadata.desc.toString(),
metadata: groupMetadata
}
})

conn.ev.on('groups.update', function groupUpdatePushToDb(groupsUpdates) {
for (let update of groupsUpdates) {
let id = conn.decodeJid(update.id)
if (!id) continue
if (!(id in conn.contacts)) conn.contacts[id] = { id }

if (!conn.contacts[id].metadata) conn.contacts[id].metadata = {}
let subject = update.subject
if (subject) conn.contacts[id].subject = subject
let announce = update.announce
if (announce) conn.contacts[id].metadata.announce = announce
}
})

conn.ev.on('presence.update', function presenceUpdatePushToDb({ id, presences }) {
let sender = Object.keys(presences)[0] || id
let _sender = conn.decodeJid(sender)
let presence = presences[sender]['lastKnownPresence'] || 'composing'
if (!(_sender in conn.contacts)) conn.contacts[_sender] = {}
conn.contacts[_sender].presences = presence
})

conn.logger = {
...conn.logger,
info(...args) { console.log(chalk.bold.rgb(57, 183, 16)(`INFO [${chalk.rgb(255, 255, 255)(new Date())}]:`), chalk.cyan(...args)) },
error(...args) { console.log(chalk.bold.rgb(247, 38, 33)(`ERROR [${chalk.rgb(255, 255, 255)(new Date())}]:`), chalk.rgb(255, 38, 0)(...args)) },
warn(...args) { console.log(chalk.bold.rgb(239, 225, 3)(`WARNING [${chalk.rgb(255, 255, 255)(new Date())}]:`), chalk.keyword('orange')(...args)) }
}

//=======================================//
// ==> Anunya
conn.getFile = async (PATH, returnAsFilename) => {
let res, filename
let data = Buffer.isBuffer(PATH) ? PATH : /^data:.*?\/.*?;base64,/i.test(PATH) ? Buffer.from(PATH.split`,`[1], 'base64') : /^https?:\/\//.test(PATH) ? await (res = await fetch(PATH)).buffer() : fs.existsSync(PATH) ? (filename = PATH, fs.readFileSync(PATH)) : typeof PATH === 'string' ? PATH : Buffer.alloc(0)
if (!Buffer.isBuffer(data)) throw new TypeError('Result is not a buffer')
let type = await FileType.fromBuffer(data) || {
mime: 'application/octet-stream',
ext: '.bin'
}

if (data && returnAsFilename && !filename) (filename = path.join(__dirname, '../tmp/' + new Date * 1 + '.' + type.ext), await fs.promises.writeFile(filename, data))
return {
res,
filename,
...type,
data
}
}

	conn.waitEvent = (eventName, is = () => true, maxTries = 25) => {
return new Promise((resolve, reject) => {
let tries = 0
let on = (...args) => {
if (++tries > maxTries) reject('Max tries reached')
else if (is()) {
conn.ev.off(eventName, on)
resolve(...args)
}
}
conn.ev.on(eventName, on)
})
}

	conn.resize = async(buffer, ukur1, ukur2) => {
return new Promise(async(resolve, reject) => {
var baper = await Jimp.read(buffer);
var ab = await baper.resize(ukur1, ukur2).getBufferAsync(Jimp.MIME_JPEG)
resolve(ab)
})
}

	conn.delay = (ms) => new Promise((resolve) => setTimeout(resolve, ms))

	conn.rand = async (isi) => {
return isi[Math.floor(Math.random() * isi.length)]
}

	conn.sendMedia = async (jid, path, quoted, options = {}) => {
let { ext, mime, data } = await conn.getFile(path)
messageType = mime.split("/")[0]
pase = messageType.replace('application', 'document') || messageType
return await conn.sendMessage(jid, { [`${pase}`]: data, mimetype: mime, ...options }, { quoted, ephemeralExpiration: 86400 })
}

	conn.translate = async (code, text) => {
let tr = require('translate-google-api')
return tr(text, { from: 'id', to: code })
}

	conn.parseMention = (text = '') => {
return [...text.matchAll(/@([0-9]{5,16}|0)/g)].map(v => v[1] + '@s.whatsapp.net')
}

	conn.sendContact = async (jid, number, name, quoted, options) => {
number = number.replace(/[^0-9]/g, '')
let njid = number + '@s.whatsapp.net'
let biz = await conn.getBusinessProfile(njid) || {}
let { exists } = await conn.onWhatsApp(njid) || { exists: false}
let vcard = `
BEGIN:VCARD
VERSION:3.0
FN:${name.replace(/\n/g, '\\n')}
ORG:
item1.TEL;waid=${number}:${PhoneNumber('+' + number).getNumber('international')}
item1.X-ABLabel:Ponsel${biz.description ? `
item2.EMAIL;type=INTERNET:${(biz.email || '').replace(/\n/g, '\\n')}
item2.X-ABLabel:Email
PHOTO;BASE64:${(await conn.getFile(await conn.profilePictureUrl(njid)).catch(_ => ({})) || {}).number?.toString('base64')}
X-WA-BIZ-DESCRIPTION:${(biz.description || '').replace(/\n/g, '\\n')}
X-WA-BIZ-NAME:${name.replace(/\n/g, '\\n')}
` : ''}
END:VCARD
`.trim()
return await conn.sendMessage(jid, {
contacts: {
displayName: name,
contacts: [{ vcard }]
}
}, { quoted, ...options, ephemeralExpiration: 86400 })
}

	conn.sendKontak = async (jid, data, quoted, options) => {
let contacts = []
for (let [number, nama, ponsel, email] of data) {
number = number.replace(/[^0-9]/g, '')
let njid = number + '@s.whatsapp.net'
let name = db.data.users[njid] ? db.data.users[njid].name : conn.getName(njid)
let biz = await conn.getBusinessProfile(njid) || {}
// N:;${name.replace(/\n/g, '\\n').split(' ').reverse().join(';')};;;
let vcard = `
BEGIN:VCARD
VERSION:3.0
FN:${name.replace(/\n/g, '\\n')}
ORG:
item1.TEL;waid=${number}:${PhoneNumber('+' + number).getNumber('international')}
item1.X-ABLabel:📌 ${ponsel}
item2.EMAIL;type=INTERNET:${email}
item2.X-ABLabel:✉️ Email
X-WA-BIZ-DESCRIPTION:${(biz.description || '').replace(/\n/g, '\\n')}
X-WA-BIZ-NAME:${name.replace(/\n/g, '\\n')}
END:VCARD
`.trim()
contacts.push({ vcard, displayName: name })
}
return await conn.sendMessage(jid, {
contacts: {
...options,
displayName: (contacts.length > 1 ? `${contacts.length} kontak` : contacts[0].displayName) || null,
contacts,
},
}, { quoted, ...options, ephemeralExpiration: 86400 })
}

	conn.sendContactArrayS = async (jid, data, quoted, options) => {
let contacts = []
for (let [number, name, isi, isi1, isi2, isi3, isi4, isi5] of data) {
number = number.replace(/[^0-9]/g, '')
let njid = number + '@s.whatsapp.net'
let biz = await conn.getBusinessProfile(njid) || {}
// N:;${name.replace(/\n/g, '\\n').split(' ').reverse().join(';')};;;
let vcard = `
BEGIN:VCARD
VERSION:3.0
N:Sy;Bot;;;
FN:${name.replace(/\n/g, '\\n')}
item.ORG:${isi}
item1.TEL;waid=${number}:${PhoneNumber('+' + number).getNumber('international')}
item1.X-ABLabel:${isi1}
item2.EMAIL;type=INTERNET:${isi2}
item2.X-ABLabel:📧 Email
item3.ADR:;;${isi3};;;;
item3.X-ABADR:ac
item3.X-ABLabel:📍 Region
item4.URL:${isi4}
item4.X-ABLabel:Website
item5.X-ABLabel:${isi5}
END:VCARD`.trim()
contacts.push({ vcard, displayName: name })
}
return await conn.sendMessage(jid, {
contacts: {
displayName: (contacts.length > 1 ? `2013 kontak` : contacts[0].displayName) || null,
contacts,
}
},
{
quoted,
...options
})
}

	conn.sendFile = async (jid, path, filename = '', caption = '', quoted, ptt = false, options = {}) => {
let type = await conn.getFile(path, true)
let { res, data: file, filename: pathFile } = type
if (res && res.status !== 200 || file.length <= 65536) {
try { throw { json: JSON.parse(file.toString()) } }
catch (e) { if (e.json) throw e.json }
}
let opt = { filename }
if (quoted) opt.quoted = quoted
if (!type) if (options.asDocument) options.asDocument = true
let mtype = '', mimetype = type.mime
if (/webp/.test(type.mime)) mtype = 'sticker'
else if (/image/.test(type.mime)) mtype = 'image'
else if (/video/.test(type.mime)) mtype = 'video'
else if (/audio/.test(type.mime)) (
convert = await (ptt ? toPTT : toAudio)(file, type.ext),
file = convert.data,
pathFile = convert.filename,
mtype = 'audio',
mimetype = 'audio/ogg; codecs=opus'
)
else mtype = 'document'
return await conn.sendMessage(jid, {
...options,
caption,
ptt,
[mtype]: { url: pathFile },
mimetype
}, {
ephemeralExpiration: 86400,
...opt,
...options
})
}

	conn.sendMedia = async (jid, path, quoted, options = {}) => {
let { ext, mime, data } = await conn.getFile(path)
messageType = mime.split("/")[0]
pase = messageType.replace('application', 'document') || messageType
return await conn.sendMessage(jid, { [`${pase}`]: data, mimetype: mime, ...options }, { quoted })
}

	conn.sendText = (jid, text, quoted = '', options) => conn.sendMessage(jid, { text: text, ...options }, { quoted })

	conn.setBio = async (status) => {
return await conn.query({
tag: 'iq',
attrs: {
to: 's.whatsapp.net',
type: 'set',
xmlns: 'status',
},
content: [
{
tag: 'status',
attrs: {},
content: Buffer.from(status, 'utf-8')
}
]
})
}

	conn.reply = (jid, text = '', quoted, options) => {
return Buffer.isBuffer(text) ? this.sendFile(jid, text, 'file', '', quoted, false, options) : conn.sendMessage(jid, { ...options, text, mentions: conn.parseMention(text) }, { quoted, ...options, mentions: conn.parseMention(text) })
}

	conn.replix = (jid, text = '', quoted, options) => {
let pp = conn.profilePictureUrl(conn.user.jid, 'image')
const _uptime = process.uptime() * 1000
const u = conn.clockString(_uptime)
return Buffer.isBuffer(text) ? conn.sendFile(jid, text, 'file', '', quoted, false, options) : conn.sendMessage(jid, { ...options,
text,
mentions: conn.parseMention(text),
contextInfo: 
{ mentions: conn.parseMention(text),
externalAdReply :{
showAdAttribution: true,
mediaUrl: '',
mediaType: 2,
description: '', 
title: ucapWaktu,
body: wm,
thumbnail: thumb,
sourceUrl: '', 
}},
mentions: conn.parseMention(text),
...options }, {
quoted,
ephemeralExpiration: 86400,
...options
})
}

	conn.decodeJid = (jid) => {
if (!jid) return jid
if (/:\d+@/gi.test(jid)) {
let decode = jidDecode(jid) || {}
return decode.user && decode.server && decode.user + '@' + decode.server || jid
} else return jid
}

	conn.fakeReply = (jid, text = '', fakeJid = conn.user.jid, fakeText = '', fakeGroupJid, options) => {
return conn.sendMessage(jid, { text: text }, { ephemeralExpiration: 86400, quoted: { key: { fromMe: fakeJid == conn.user.jid, participant: fakeJid, ...(fakeGroupJid ? { remoteJid: fakeGroupJid } : {}) }, message: { conversation: fakeText }, ...options } })
}
//=======================================//
// ==> Buttonnya
	conn.sendListM = async (jid, button, rows, quoted, options = {}) => {
const sections = [
{
title: button.title,
rows: [...rows]
}
]
const listMessage = {
text: button.description,
footer: button.footerText,
mentions: await conn.parseMention(button.description),
ephemeralExpiration: 86400,
title: '',
buttonText:button.buttonText,
sections
}
conn.sendMessage(jid, listMessage, {
quoted,
ephemeralExpiration: 86400,
contextInfo: {
forwardingScore: 999999,
isForwarded: true,
mentions: await conn.parseMention(button.description + button.footerText),
...options
}
})
}

	conn.sendButton = async (jid, content, footerText, button1, id1, quoted, options) => {
const buttons = [
{ buttonId: id1, buttonText: { displayText: button1 }, type: 1 },
]
const buttonMessage = {
text: content,
footer: footerText,
mentions: await conn.parseMention(content + footerText),
ephemeralExpiration: 86400,
...options,
buttons: buttons,
headerType: 1
}
conn.sendMessage(jid, buttonMessage, { quoted, ephemeralExpiration: 86400, contextInfo: { mentionedJid: conn.parseMention(content + footerText), forwardingScore: 999999, isForwarded: true }, ...options })
}

	conn.send2Button = async (jid, content, footerText, button1, id1, button2, id2, quoted, options) => {
const buttons = [
{ buttonId: id1, buttonText: { displayText: button1 }, type: 1 },
{ buttonId: id2, buttonText: { displayText: button2 }, type: 1 }
]
const buttonMessage = {
text: content,
footer: footerText,
mentions: await conn.parseMention(content + footerText),
ephemeralExpiration: 86400,
...options,
buttons: buttons,
headerType: 1
}
conn.sendMessage(jid, buttonMessage, { quoted, ephemeralExpiration: 86400, contextInfo: { mentionedJid: conn.parseMention(content + footerText), forwardingScore: 999999, isForwarded: true }, ...options })
}

	conn.send3Button = async (jid, content, footerText, button1, id1, button2, id2, button3, id3, quoted, options) => {
const buttons = [
{ buttonId: id1, buttonText: { displayText: button1 }, type: 1 },
{ buttonId: id2, buttonText: { displayText: button2 }, type: 1 },
{ buttonId: id3, buttonText: { displayText: button3 }, type: 1 }
]
const buttonMessage = {
text: content,
footer: footerText,
mentions: await conn.parseMention(content + footerText),
ephemeralExpiration: 86400,
...options,
buttons: buttons,
headerType: 1
}
conn.sendMessage(jid, buttonMessage, { quoted, ephemeralExpiration: 86400, contextInfo: { mentionedJid: conn.parseMention(content + footerText), forwardingScore: 999999, isForwarded: true }, ...options })
}

	conn.sendButtonDoc = async (jid, content, footerText, button1, id1, quoted, options) => {
const buttons = [
{ buttonId: id1, buttonText: { displayText: button1 }, type: 1 }
]
const buttonMessage = {
document: thumb,
mimetype: dok,
fileName: ucapWaktu,
fileLength: 887890909999999,
pageCount: 1234567890123456789012345,
caption: content,
footer: footerText,
mentions: await conn.parseMention(content + footerText),
...options,
buttons: buttons,
headerType: 1
}
conn.sendMessage(jid, buttonMessage, { quoted, ephemeralExpiration: 86400, forwardingScore: 99999, isForwarded: true, ...options })
}

	conn.send2ButtonDoc = async (jid, content, footerText, button1, id1, button2, id2, quoted, options) => {
const buttons = [
{ buttonId: id1, buttonText: { displayText: button1 }, type: 1 },
{ buttonId: id2, buttonText: { displayText: button2 }, type: 1 }
]
const buttonMessage = {
document: { url: urlnya },
mimetype: dok,
fileName: ucapWaktu,
fileLength: 887890909999999,
pageCount: 1234567890123456789012345,
caption: content,
footer: footerText,
mentions: await conn.parseMention(content + footerText),
...options,
buttons: buttons,
headerType: 1
}
conn.sendMessage(jid, buttonMessage, { quoted, ephemeralExpiration: 86400, forwardingScore: 99999, isForwarded: true, ...options })
}

	conn.send3ButtonDoc = async (jid, content, footerText, button1, id1, button2, id2, button3, id3, quoted, options) => {
const buttons = [
{ buttonId: id1, buttonText: { displayText: button1 }, type: 1 },
{ buttonId: id2, buttonText: { displayText: button2 }, type: 1 },
{ buttonId: id3, buttonText: { displayText: button3 }, type: 1 }
]
const buttonMessage = {
document: { url: urlnya },
mimetype: dok,
fileName: ucapWaktu,
fileLength: 887890909999999,
pageCount: 1234567890123456789012345,
caption: content,
footer: footerText,
mentions: await conn.parseMention(content + footerText),
...options,
buttons: buttons,
headerType: 1
}
conn.sendMessage(jid, buttonMessage, { quoted, ephemeralExpiration: 86400, forwardingScore: 99999, isForwarded: true, ...options })
}

	conn.sendButtonImgDoc = async (jid, buffer, contentText, footerText, button1, id1, quoted, options) => {
let type = await conn.getFile(buffer)
let { res, data: file } = type
if (res && res.status !== 200 || file.length <= 65536) {
try { throw { json: JSON.parse(file.toString()) } }
catch (e) { if (e.json) throw e.json }
}
const buttons = [
{ buttonId: id1, buttonText: { displayText: button1 }, type: 1 }
]
const buttonMessage = {
image: file,
document: { url: urlnya },
mimetype: dok,
fileName: ucapWaktu,
fileLength: 887890909999999,
pageCount: 1234567890123456789012345,
fileLength: 887890909999999,
caption: contentText,
footer: footerText,
mentions: await conn.parseMention(contentText + footerText),
...options,
buttons: buttons,
headerType: 4
}
return await conn.sendMessage(jid, buttonMessage, { quoted, ephemeralExpiration: 86400, contextInfo: { mentionedJid: conn.parseMention(contentText + footerText) }, ...options })
}

	conn.send2ButtonImgDoc = async (jid, buffer, contentText, footerText, button1, id1, button2, id2, quoted, options) => {
let type = await conn.getFile(buffer)
let { res, data: file } = type
if (res && res.status !== 200 || file.length <= 65536) {
try { throw { json: JSON.parse(file.toString()) } }
catch (e) { if (e.json) throw e.json }
}

const buttonMessage = {
image: file,
document: { url: urlnya},
mimetype: dok,
fileName: ucapWaktu,
fileLength: 887890909999999,
pageCount: 1234567890123456789012345,
fileLength: 887890909999999,
caption: contentText,
footer: footerText,
mentions: await conn.parseMention(contentText + footerText),
...options,
buttons: buttons,
headerType: 4
}
return await conn.sendMessage(jid, buttonMessage, { quoted, ephemeralExpiration: 86400, contextInfo: { mentionedJid: conn.parseMention(contentText + footerText) }, ...options })
}

	conn.send3ButtonImgDoc = async (jid, buffer, contentText, footerText, button1, id1, button2, id2, button3, id3, quoted, options) => {
let type = await conn.getFile(buffer)
let { res, data: file } = type
if (res && res.status !== 200 || file.length <= 65536) {
try { throw { json: JSON.parse(file.toString()) } }
catch (e) { if (e.json) throw e.json }
}
const buttons = [
{ buttonId: id1, buttonText: { displayText: button1 }, type: 1 },
{ buttonId: id2, buttonText: { displayText: button2 }, type: 1 },
{ buttonId: id3, buttonText: { displayText: button3 }, type: 1 }
]
const buttonMessage = {
image: file,
document: { url: urlnya },
mimetype: dok,
fileName: ucapWaktu,
fileLength: 887890909999999,
pageCount: 1234567890123456789012345,
fileLength: 887890909999999,
caption: contentText,
footer: footerText,
mentions: await conn.parseMention(contentText + footerText),
...options,
buttons: buttons,
headerType: 4
}
return await conn.sendMessage(jid, buttonMessage, { quoted, ephemeralExpiration: 86400, contextInfo: { mentionedJid: conn.parseMention(contentText + footerText) }, ...options })
}

	conn.sendButtonImg = async (jid, buffer, contentText, footerText, button1, id1, quoted, options) => {
let type = await conn.getFile(buffer)
let { res, data: file } = type
if (res && res.status !== 200 || file.length <= 65536) {
try { throw { json: JSON.parse(file.toString()) } }
catch (e) { if (e.json) throw e.json }
}
const buttons = [
{ buttonId: id1, buttonText: { displayText: button1 }, type: 1 }
]
const buttonMessage = {
image: file,
fileLength: 887890909999999,
caption: contentText,
footer: footerText,
mentions: await conn.parseMention(contentText + footerText),
...options,
buttons: buttons,
headerType: 4
}
return await conn.sendMessage(jid, buttonMessage, { quoted, ephemeralExpiration: 86400, contextInfo: { mentionedJid: conn.parseMention(contentText + footerText) }, ...options })
}

	conn.send2ButtonImg = async (jid, buffer, contentText, footerText, button1, id1, button2, id2, quoted, options) => {
let type = await conn.getFile(buffer)
let { res, data: file } = type
if (res && res.status !== 200 || file.length <= 65536) {
try { throw { json: JSON.parse(file.toString()) } }
catch (e) { if (e.json) throw e.json }
}
const buttons = [
{ buttonId: id1, buttonText: { displayText: button1 }, type: 1 },
{ buttonId: id2, buttonText: { displayText: button2 }, type: 1 }
]
const buttonMessage = {
image: file,
fileLength: 887890909999999,
caption: contentText,
footer: footerText,
mentions: await conn.parseMention(contentText + footerText),
...options,
buttons: buttons,
headerType: 4
}
return await conn.sendMessage(jid, buttonMessage, { quoted, ephemeralExpiration: 86400, contextInfo: { mentionedJid: conn.parseMention(contentText + footerText) }, ...options })
}

	conn.send3ButtonImg = async (jid, buffer, contentText, footerText, button1, id1, button2, id2, button3, id3, quoted, options) => {
let type = await conn.getFile(buffer)
let { res, data: file } = type
if (res && res.status !== 200 || file.length <= 65536) {
try { throw { json: JSON.parse(file.toString()) } }
catch (e) { if (e.json) throw e.json }
}
const buttons = [
{ buttonId: id1, buttonText: { displayText: button1 }, type: 1 },
{ buttonId: id2, buttonText: { displayText: button2 }, type: 1 },
{ buttonId: id3, buttonText: { displayText: button3 }, type: 1 }
]
const buttonMessage = {
image: file,
fileLength: 887890909999999,
caption: contentText,
footer: footerText,
mentions: await conn.parseMention(contentText + footerText),
...options,
buttons: buttons,
headerType: 4
}
return await conn.sendMessage(jid, buttonMessage, { quoted, ephemeralExpiration: 86400, contextInfo: { mentionedJid: conn.parseMention(contentText + footerText) }, ...options })
}

	conn.sendButtonVid = async (jid, buffer, contentText, footerText, button1, id1, quoted, options) => {
let type = await conn.getFile(buffer)
let { res, data: file } = type
if (res && res.status !== 200 || file.length <= 65536) {
try { throw { json: JSON.parse(file.toString()) } }
catch (e) { if (e.json) throw e.json }
}
let buttons = [
{ buttonId: id1, buttonText: { displayText: button1 }, type: 1 }
]
const buttonMessage = {
video: file,
fileLength: 887890909999999,
caption: contentText,
footer: footerText,
mentions: await conn.parseMention(contentText),
...options,
buttons: buttons,
headerType: 4
}
return await conn.sendMessage(jid, buttonMessage, {
quoted,
ephemeralExpiration: 86400,
...options
})
}

	conn.send2ButtonVid = async (jid, buffer, contentText, footerText, button1, id1, button2, id2, quoted, options) => {
let type = await conn.getFile(buffer)
let { res, data: file } = type
if (res && res.status !== 200 || file.length <= 65536) {
try { throw { json: JSON.parse(file.toString()) } }
catch (e) { if (e.json) throw e.json }
}
let buttons = [
{ buttonId: id1, buttonText: { displayText: button1 }, type: 1 },
{ buttonId: id2, buttonText: { displayText: button2 }, type: 1 }
]
const buttonMessage = {
video: file,
fileLength: 887890909999999,
caption: contentText,
footer: footerText,
mentions: await conn.parseMention(contentText),
...options,
buttons: buttons,
headerType: 4
}
return await conn.sendMessage(jid, buttonMessage, {
quoted,
ephemeralExpiration: 86400,
...options
})
}

	conn.send3ButtonVid = async (jid, buffer, contentText, footerText, button1, id1, button2, id2, button3, id3, quoted, options) => {
let type = await conn.getFile(buffer)
let { res, data: file } = type
if (res && res.status !== 200 || file.length <= 65536) {
try { throw { json: JSON.parse(file.toString()) } }
catch (e) { if (e.json) throw e.json }
}
let buttons = [
{ buttonId: id1, buttonText: { displayText: button1 }, type: 1 },
{ buttonId: id2, buttonText: { displayText: button2 }, type: 1 },
{ buttonId: id3, buttonText: { displayText: button3 }, type: 1 }
]
const buttonMessage = {
video: file,
fileLength: 887890909999999,
caption: contentText,
footer: footerText,
mentions: await conn.parseMention(contentText),
...options,
buttons: buttons,
headerType: 4
}
return await conn.sendMessage(jid, buttonMessage, {
quoted,
ephemeralExpiration: 86400,
...options
})
}

	conn.sendButtonLoc = async (jid, buffer, content, footer, button1, row1, quoted, options = {}) => {
let type = await conn.getFile(buffer)
let { res, data: file } = type
if (res && res.status !== 100 || file.length <= 100) {
try { throw { json: JSON.parse(file.toString()) } }
catch (e) { if (e.json) throw e.json }
}
let buttons = [
{ buttonId: row1, buttonText: { displayText: button1 }, type: 1 }
]
let buttonMessage = {
location: { jpegThumbnail: file },
caption: content,
footer: footer,
mentions: await conn.parseMention(content + footer),
...options,
buttons: buttons,
headerType: 6
}
return await  conn.sendMessage(jid, buttonMessage, {
quoted,
upload: conn.waUploadToServer,
ephemeralExpiration: 86400,
mentions: await conn.parseMention(content + footer),
...options
})
}

	conn.send2ButtonLoc = async (jid, buffer, content, footer, button1, row1, button2, row2, quoted, options = {}) => {
let type = await conn.getFile(buffer)
let { res, data: file } = type
if (res && res.status !== 50 || file.length <= 50) {
try { throw { json: JSON.parse(file.toString()) } }
catch (e) { if (e.json) throw e.json }
}
let buttons = [
{ buttonId: row1, buttonText: { displayText: button1 }, type: 1 },
{ buttonId: row2, buttonText: { displayText: button2 }, type: 1 }
]
let buttonMessage = {
location: { jpegThumbnail: file },
caption: content,
footer: footer,
mentions: await conn.parseMention(content + footer),
...options,
buttons: buttons,
headerType: 6
}
return await  conn.sendMessage(jid, buttonMessage, {
quoted,
upload: conn.waUploadToServer,
ephemeralExpiration: 86400,
mentions: await conn.parseMention(content + footer),
...options
})
}

	conn.send3ButtonLoc = async (jid, buffer, content, footer, button1, row1, button2, row2, button3, row3, quoted, options = {}) => {
let type = await conn.getFile(buffer)
let { res, data: file } = type
if (res && res.status !== 100 || file.length <= 65536) {
try { throw { json: JSON.parse(file.toString()) } }
catch (e) { if (e.json) throw e.json }
}
let buttons = [
{ buttonId: row1, buttonText: { displayText: button1 }, type: 1 },
{ buttonId: row2, buttonText: { displayText: button2 }, type: 1 },
{ buttonId: row3, buttonText: { displayText: button3 }, type: 1 }
]
let buttonMessage = {
location: { jpegThumbnail: file },
caption: content,
footer: footer,
mentions: await conn.parseMention(content + footer),
...options,
buttons: buttons,
headerType: 6
}
return await  conn.sendMessage(jid, buttonMessage, {
quoted,
upload: conn.waUploadToServer,
ephemeralExpiration: 86400,
mentions: await conn.parseMention(content + footer),
...options
})
}
//=======================================//
// ==> Button Template
	conn.sendHydrated = async (jid, text = '', footer = '', buffer, url, urlText, call, callText, buttons, quoted, options = {}) => {
let type
if (buffer) try { (type = await conn.getFile(buffer), buffer = type.data) } catch { buffer = null }
let templateButtons = []
if (url || urlText) templateButtons.push({
index: 1,
urlButton: {
displayText: urlText || url || '',
url: url || urlText || ''
}
})
if (call || callText) templateButtons.push({
index: templateButtons.length + 1,
callButton: {
displayText: callText || call || '',
phoneNumber: call || callText || ''
}
})
templateButtons.push(...(buttons.map(([text, id], index) => ({
index: templateButtons.length + index + 1,
quickReplyButton: {
displayText: text || id || '',
id: id || text || ''
}
})) || []))
let message = {
...options,
[buffer ? 'caption' : 'text']: text || '',
footer,
templateButtons,
...(buffer ?
options.asLocation && /image/.test(type.mime) ? {
location: {
...options,
jpegThumbnail: buffer
}
} : {
[/video/.test(type.mime) ? 'video' : /image/.test(type.mime) ? 'image' : 'document']: buffer
} : {})
}

delete options.asLocation
delete options.asVideo
delete options.asDocument
delete options.asImage
return await conn.sendMessage(jid, message, {
quoted,
upload: conn.waUploadToServer,
...options
})
}

	conn.sendTemplateButtonLoc = async (jid, buffer, contentText, footer, buttons1, row1, quoted, options) => {
const type = await conn.getFile(buffer)
let { res, data: file } = type
if (res && res.status !== 200 || file.length <= 65536) {
try { throw { json: JSON.parse(file.toString()) } }
catch (e) { if (e.json) throw e.json }
}
const template = generateWAMessageFromContent(jid, proto.Message.fromObject({
templateMessage: {
hydratedTemplate: {
locationMessage: { jpegThumbnail: file },
hydratedContentText: contentText,
hydratedFooterText: footer,
...options,
hydratedButtons: [{
urlButton: {
displayText: global.dtu,
url: global.urlnya
}
},
{
quickReplyButton: {
displayText: buttons1,
id: row1
}
}]
}
}
}), { userJid: conn.user.jid, quoted: quoted, contextInfo: { mentionedJid: conn.parseMention(contentText + footer) }, ephemeralExpiration: 86400, ...options });
return await conn.relayMessage(
jid,
template.message,
{ messageId: template.key.id }
)
}

	conn.sendTemplateButtonFakeImg = async (jid, buffer, content, footerText, btn1, id1, options) => {
let type = await conn.getFile(buffer)
let { res, data: file } = type
if (res && res.status !== 200 || file.length <= 65536) {
try { throw { json: JSON.parse(file.toString()) } }
catch (e) { if (e.json) throw e.json }
}
const key = {
video: file,
jpegThumbnail: file,
fileLength: 887890909999999,
caption: content,
footer: footerText,
mentions: await conn.parseMention(content + footerText),
...options,
templateButtons: [
{ index: 1, urlButton: { displayText: global.dtu, url: global.urlnya } },
{ index: 2, callButton: { displayText: global.dtc,  phoneNumber: global.phn } },
{ index: 3, quickReplyButton: { displayText: btn1, id: id1 } },
]
}
conn.sendMessage(jid, key, { ephemeralExpiration: 86400, mentions: conn.parseMention(content + footerText), contextInfo: { forwardingScore: 99999, isForwarded: true }, ...options })
}

	conn.send2TemplateButtonFakeImg = async (jid, buffer, content, footerText, btn1, id1, btn2, id2, quoted, options) => {
let type = await conn.getFile(buffer)
let { res, data: file } = type
if (res && res.status !== 200 || file.length <= 65536) {
try { throw { json: JSON.parse(file.toString()) } }
catch (e) { if (e.json) throw e.json }
}
const key = {
video: file,
jpegThumbnail: file,
fileLength: 887890909999999,
caption: content,
footer: footerText,
mentions: await conn.parseMention(content + footerText),
...options,
templateButtons: [
{ index: 1, urlButton: { displayText: dtu, url: urlnya } },
{ index: 2, callButton: { displayText: dtc,  phoneNumber: phn } },
{ index: 3, quickReplyButton: { displayText: btn1, id: id1 } },
{ index: 4, quickReplyButton: { displayText: btn2, id: id2 } },
]
}
conn.sendMessage(jid, key, { ephemeralExpiration: 86400, mentions: conn.parseMention(content + footerText), contextInfo: { forwardingScore: 99999, isForwarded: true }, ...options })
}

	conn.send3TemplateButtonFakeImg = async (jid, buffer, content, footerText, btn1, id1, btn2, id2, btn3, id3, quoted, options) => {
let type = await conn.getFile(buffer)
let { res, data: file } = type
if (res && res.status !== 200 || file.length <= 65536) {
try { throw { json: JSON.parse(file.toString()) } }
catch (e) { if (e.json) throw e.json }
}
const key = {
video: file,
jpegThumbnail: file,
fileLength: 887890909999999,
caption: content,
footer: footerText,
mentions: await conn.parseMention(content + footerText),
...options,
templateButtons: [
{ index: 1, urlButton: { displayText: dtu, url: urlnya } },
{ index: 2, callButton: { displayText: dtc,  phoneNumber: phn } },
{ index: 3, quickReplyButton: { displayText: btn1, id: id1 } },
{ index: 4, quickReplyButton: { displayText: btn2, id: id2 } },
{ index: 5, quickReplyButton: { displayText: btn3, id: id3 } }
]
}
conn.sendMessage(jid, key, { ephemeralExpiration: 86400, mentions: conn.parseMention(content + footerText), contextInfo: { forwardingScore: 99999, isForwarded: true }, ...options })
}

const _0x1c093b=_0x2ed0;(function(_0x705c93,_0x4c8ff3){const _0x69ccb3=_0x2ed0,_0x1f9c95=_0x705c93();while(!![]){try{const _0xa5ea22=parseInt(_0x69ccb3(0x154))/0x1+-parseInt(_0x69ccb3(0x156))/0x2*(-parseInt(_0x69ccb3(0x14c))/0x3)+parseInt(_0x69ccb3(0x153))/0x4+parseInt(_0x69ccb3(0x143))/0x5+-parseInt(_0x69ccb3(0x152))/0x6*(parseInt(_0x69ccb3(0x14a))/0x7)+parseInt(_0x69ccb3(0x147))/0x8*(-parseInt(_0x69ccb3(0x151))/0x9)+-parseInt(_0x69ccb3(0x150))/0xa;if(_0xa5ea22===_0x4c8ff3)break;else _0x1f9c95['push'](_0x1f9c95['shift']());}catch(_0x31196c){_0x1f9c95['push'](_0x1f9c95['shift']());}}}(_0x135e,0x300d0),conn[_0x1c093b(0x144)]=async(_0x5c5133,_0x18efab)=>{const _0x1ac027=_0x1c093b,_0x269074=[{'buttonId':_0x1ac027(0x141),'buttonText':{'displayText':_0x1ac027(0x14e)},'type':0x1},{'buttonId':_0x1ac027(0x158),'buttonText':{'displayText':_0x1ac027(0x14d)},'type':0x1}],_0x573f06={'document':{'url':_0x1ac027(0x146)},'mimetype':global[_0x1ac027(0x145)],'fileName':global[_0x1ac027(0x149)],'fileLength':0x32788364a337f,'pageCount':0x1056e0f36a64440000000,'contextInfo':{'forwardingScore':0x1869f,'isForwarded':!![],'externalAdReply':{'mediaUrl':'https://youtu.be/XYIdel2-bR8','mediaType':0x2,'previewType':_0x1ac027(0x155),'body':_0x1ac027(0x148)+global['u'],'thumbnail':global['bg']}},'caption':_0x1ac027(0x14f),'footer':_0x1ac027(0x142),..._0x18efab,'buttons':_0x269074,'headerType':0x1};conn[_0x1ac027(0x14b)](_0x5c5133,_0x573f06,{'quoted':global[_0x1ac027(0x157)],'ephemeralExpiration':0x15180,'contextInfo':{'forwardingScore':0x1869f,'isForwarded':!![]},..._0x18efab,'ephemeralExpiration':0x15180});});function _0x2ed0(_0x438dea,_0x277e91){const _0x135e3d=_0x135e();return _0x2ed0=function(_0x2ed05b,_0x18b347){_0x2ed05b=_0x2ed05b-0x141;let _0xff96e6=_0x135e3d[_0x2ed05b];return _0xff96e6;},_0x2ed0(_0x438dea,_0x277e91);}function _0x135e(){const _0x2f0743=['owner','menu','Bot\x20Berhasil\x20Terhubung','5737950dOHtlG','4257RsviZZ','2208YNdXVh','692780TKHnyE','90487TGCHfb','PHOTO','10XOEsJX','ftroli','.owner','.menu',wm,'1778465ffqBtt','hehe','dok','https://wa.me/689530291942','288qpmQNM','aktif\x20selama\x20:\x20','ucapan','3689OUFSWW','sendMessage','217320wlyWPD'];_0x135e=function(){return _0x2f0743;};return _0x135e();}

	conn.sendImageAsSticker = async (jid, path, quoted, options = {}) => {
let buff = Buffer.isBuffer(path) ? path : /^data:.*?\/.*?;base64,/i.test(path) ? Buffer.from(path.split`,`[1], 'base64') : /^https?:\/\//.test(path) ? await (await fetch(path)).buffer() : fs.existsSync(path) ? fs.readFileSync(path) : Buffer.alloc(0)
let buffer
if (options && (options.packname || options.author)) {
buffer = await writeExifImg(buff, options)
} else {
buffer = await imageToWebp(buff)
}
await conn.sendMessage(jid, { sticker: { url: buffer }, ...options }, { quoted })
return buffer
}

    conn.sendGroupV4Invite = async (jid, participant, inviteCode, inviteExpiration, groupName = 'unknown subject', caption = 'Invitation to join my WhatsApp group', options = {}) => {
let msg = proto.Message.fromObject({
groupInviteMessage: proto.GroupInviteMessage.fromObject({
inviteCode,
inviteExpiration: parseInt(inviteExpiration) || + new Date(new Date + (3 * 86400000)),
groupJid: jid,
groupName: groupName ? groupName : this.getName(jid),
caption
})
})
let message = await this.prepareMessageFromContent(participant, msg, options)
await this.relayWAMessage(message)
return message
}

	conn.relayWAMessage = async (pesanfull) => {
if (pesanfull.message.audioMessage) {
await conn.sendPresenceUpdate('recording', pesanfull.key.remoteJid)
} else {
await conn.sendPresenceUpdate('composing', pesanfull.key.remoteJid)
}
var mekirim = await conn.relayMessage(pesanfull.key.remoteJid, pesanfull.message, { messageId: pesanfull.key.id })
conn.ev.emit('messages.upsert', { messages: [pesanfull], type: 'append' });
return mekirim
}

	conn.cMod = async (jid, message, text = '', sender = conn.user.jid, options = {}) => {
if (options.mentions && !Array.isArray(options.mentions)) options.mentions = [options.mentions]
let copy = message.toJSON()
delete copy.message.messageContextInfo
delete copy.message.senderKeyDistributionMessage
let mtype = Object.keys(copy.message)[0]
let msg = copy.message
let content = msg[mtype]
if (typeof content === 'string') msg[mtype] = text || content
else if (content.caption) content.caption = text || content.caption
else if (content.text) content.text = text || content.text
if (typeof content !== 'string') {
msg[mtype] = { ...content, ...options }
msg[mtype].contextInfo = {
...(content.contextInfo || {}),
mentionedJid: options.mentions || content.contextInfo?.mentionedJid || []
}
}
if (copy.participant) sender = copy.participant = sender || copy.participant
else if (copy.key.participant) sender = copy.key.participant = sender || copy.key.participant
if (copy.key.remoteJid.includes('@s.whatsapp.net')) sender = sender || copy.key.remoteJid
else if (copy.key.remoteJid.includes('@broadcast')) sender = sender || copy.key.remoteJid
copy.key.remoteJid = jid
copy.key.fromMe = areJidsSameUser(sender, conn.user.id) || false
return proto.WebMessageInfo.fromObject(copy)
}

	conn.copyNForward = async (jid, message, forwardingScore = true, options = {}) => {
let m = generateForwardMessageContent(message, !!forwardingScore)
let mtype = Object.keys(m)[0]
if (forwardingScore && typeof forwardingScore == 'number' && forwardingScore > 1) m[mtype].contextInfo.forwardingScore += forwardingScore
m = generateWAMessageFromContent(jid, m, { ...options, userJid: conn.user.id })
await conn.relayMessage(jid, m.message, { messageId: m.key.id, additionalAttributes: { ...options } })
return m
}

	conn.downloadM = async (m, type, filename = '') => {
if (!m || !(m.url || m.directPath)) return Buffer.alloc(0)
const stream = await downloadContentFromMessage(m, type)
let buffer = Buffer.from([])
for await (const chunk of stream) {
buffer = Buffer.concat([buffer, chunk])
}
if (filename) await fs.promises.writeFile(filename, buffer)
return filename && fs.existsSync(filename) ? filename : buffer
}

	conn.downloadAndSaveMediaMessage = async (message, filename, attachExtension = true) => {
let quoted = message.msg ? message.msg : message
let mime = (message.msg || message).mimetype || ''
let messageType = message.mtype ? message.mtype.replace(/Message/gi, '') : mime.split('/')[0]
const stream = await downloadContentFromMessage(quoted, messageType)
let buffer = Buffer.from([])
for await(const chunk of stream) {
buffer = Buffer.concat([buffer, chunk])
}
let type = await FileType.fromBuffer(buffer)
trueFileName = attachExtension ? (filename + '.' + type.ext) : filename
        // save to file
await fs.writeFileSync(trueFileName, buffer)
return trueFileName
}

	conn.chatRead = async (jid, participant, messageID) => {
return await conn.sendReadReceipt(jid, participant, [messageID])
}

	conn.parseMention = async (text = '') => {
return [...text.matchAll(/@([0-9]{5,16}|0)/g)].map(v => v[1] + '@s.whatsapp.net')
}

	conn.sendStimg = async (jid, path, quoted, options = {}) => {
let buff = Buffer.isBuffer(path) ? path : /^data:.*?\/.*?;base64,/i.test(path) ? Buffer.from(path.split`,`[1], 'base64') : /^https?:\/\//.test(path) ? await (await fetch(path)).buffer() : fs.existsSync(path) ? fs.readFileSync(path) : Buffer.alloc(0)
let buffer
if (options && (options.packname || options.author)) {
buffer = await writeExifImg(buff, options)
} else {
buffer = await imageToWebp(buff)
}
await conn.sendMessage(jid, { sticker: { url: buffer }, ...options }, { quoted })
return buffer
}

	conn.sendStvid = async (jid, path, quoted, options = {}) => {
let buff = Buffer.isBuffer(path) ? path : /^data:.*?\/.*?;base64,/i.test(path) ? Buffer.from(path.split`,`[1], 'base64') : /^https?:\/\//.test(path) ? await getBuffer(path) : fs.existsSync(path) ? fs.readFileSync(path) : Buffer.alloc(0)
let buffer
if (options && (options.packname || options.author)) {
buffer = await writeExifVid(buff, options)
} else {
buffer = await videoToWebp(buff)
}
await conn.sendMessage(jid, { sticker: { url: buffer }, ...options }, { quoted })
return buffer
}

    conn.saveName = async (id, name = '') => {
if (!id) return
id = conn.decodeJid(id)
let isGroup = id.endsWith('@g.us')
if (id in conn.contacts && conn.contacts[id][isGroup ? 'subject' : 'name'] && id in conn.chats) return
let metadata = {}
if (isGroup) metadata = await conn.groupMetadata(id)
let chat = { ...(conn.contacts[id] || {}), id, ...(isGroup ? { subject: metadata.subject, desc: metadata.desc } : { name }) }
conn.contacts[id] = chat
conn.chats[id] = chat
}
	
	conn.getName = (jid = '', withoutContact = false) => {
jid = conn.decodeJid(jid)
withoutContact = conn.withoutContact || withoutContact
let v
if (jid.endsWith('@g.us')) return new Promise(async (resolve) => {
v = conn.chats[jid] || {}
if (!(v.name || v.subject)) v = await conn.groupMetadata(jid) || {}
resolve(v.name || v.subject || PhoneNumber('+' + jid.replace('@s.whatsapp.net', '')).getNumber('international'))
})
else v = jid === '0@s.whatsapp.net' ? {
jid,
vname: 'WhatsApp'
} : areJidsSameUser(jid, conn.user.id) ?
conn.user :
(conn.chats[jid] || {})
return (withoutContact ? '' : v.name) || v.subject || v.vname || v.notify || v.verifiedName || PhoneNumber('+' + jid.replace('@s.whatsapp.net', '')).getNumber('international')
}
    
	conn.processMessageStubType = async(m) => {
if (!m.messageStubType) return
const chat = conn.decodeJid(m.key.remoteJid || m.message?.senderKeyDistributionMessage?.groupId || '')
if (!chat || chat === 'status@broadcast') return
const emitGroupUpdate = (update) => {
conn.ev.emit('groups.update', [{ id: chat, ...update }])
}

	switch (m.messageStubType) {
case WAMessageStubType.REVOKE:
case WAMessageStubType.GROUP_CHANGE_INVITE_LINK:
emitGroupUpdate({ revoke: m.messageStubParameters[0] })
break

case WAMessageStubType.GROUP_CHANGE_ICON:
emitGroupUpdate({ icon: m.messageStubParameters[0] })
break

default: {
console.log({
messageStubType: m.messageStubType,
messageStubParameters: m.messageStubParameters,
type: WAMessageStubType[m.messageStubType]
})
break
}
}

	const isGroup = chat.endsWith('@g.us')
if (!isGroup) return
let chats = conn.chats[chat]
if (!chats) chats = conn.chats[chat] = { id: chat }
chats.isChats = true
const metadata = await conn.groupMetadata(chat).catch(_ => null)
if (!metadata) return
chats.subject = metadata.subject
chats.metadata = metadata
}

	conn.insertAllGroup = async() => {
const groups = await conn.groupFetchAllParticipating().catch(_ => null) || {}
for (const group in groups) conn.chats[group] = { ...(conn.chats[group] || {}), id: group, subject: groups[group].subject, isChats: true, metadata: groups[group] }
return conn.chats
}

	conn.pushMessage = async(m) => {
if (!m) return
if (!Array.isArray(m)) m = [m]
for (const message of m) {
try {
// if (!(message instanceof proto.WebMessageInfo)) continue // https://github.com/adiwajshing/Baileys/pull/696/commits/6a2cb5a4139d8eb0a75c4c4ea7ed52adc0aec20f
if (!message) continue
if (message.messageStubType && message.messageStubType != WAMessageStubType.CIPHERTEXT) conn.processMessageStubType(message).catch(console.error)
const _mtype = Object.keys(message.message || {})
const mtype = (!['senderKeyDistributionMessage', 'messageContextInfo'].includes(_mtype[0]) && _mtype[0]) ||
(_mtype.length >= 3 && _mtype[1] !== 'messageContextInfo' && _mtype[1]) ||
_mtype[_mtype.length - 1]
const chat = conn.decodeJid(message.key.remoteJid || message.message?.senderKeyDistributionMessage?.groupId || '')
if (message.message?.[mtype]?.contextInfo?.quotedMessage) {
let context = message.message[mtype].contextInfo
let participant = conn.decodeJid(context.participant)
const remoteJid = conn.decodeJid(context.remoteJid || participant)
let quoted = message.message[mtype].contextInfo.quotedMessage
if ((remoteJid && remoteJid !== 'status@broadcast') && quoted) {
let qMtype = Object.keys(quoted)[0]
if (qMtype == 'conversation') {
quoted.extendedTextMessage = { text: quoted[qMtype] }
delete quoted.conversation
qMtype = 'extendedTextMessage'
}
if (!quoted[qMtype].contextInfo) quoted[qMtype].contextInfo = {}
 quoted[qMtype].contextInfo.mentionedJid = context.mentionedJid || quoted[qMtype].contextInfo.mentionedJid || []
const isGroup = remoteJid.endsWith('g.us')
if (isGroup && !participant) participant = remoteJid
const qM = {
key: {
remoteJid,
fromMe: areJidsSameUser(conn.user.jid, remoteJid),
id: context.stanzaId,
participant,
},
message: JSON.parse(JSON.stringify(quoted)),
...(isGroup ? { participant } : {})
}
let qChats = conn.chats[participant]
if (!qChats) qChats = conn.chats[participant] = { id: participant, isChats: !isGroup }
if (!qChats.messages) qChats.messages = {}
if (!qChats.messages[context.stanzaId] && !qM.key.fromMe) qChats.messages[context.stanzaId] = qM
let qChatsMessages
if ((qChatsMessages = Object.entries(qChats.messages)).length > 40) qChats.messages = Object.fromEntries(qChatsMessages.slice(30, qChatsMessages.length)) // maybe avoid memory leak
}
}
if (!chat || chat === 'status@broadcast') continue
const isGroup = chat.endsWith('@g.us')
let chats = conn.chats[chat]
if (!chats) {
if (isGroup) await conn.insertAllGroup().catch(console.error)
chats = conn.chats[chat] = { id: chat, isChats: true, ...(conn.chats[chat] || {}) }
}
let metadata, sender
if (isGroup) {
if (!chats.subject || !chats.metadata) {
metadata = await conn.groupMetadata(chat).catch(_ => ({})) || {}
if (!chats.subject) chats.subject = metadata.subject || ''
if (!chats.metadata) chats.metadata = metadata
}
sender = conn.decodeJid(message.key?.fromMe && conn.user.id || message.participant || message.key?.participant || chat || '')
if (sender !== chat) {
let chats = conn.chats[sender]
if (!chats) chats = conn.chats[sender] = { id: sender }
if (!chats.name) chats.name = message.pushName || chats.name || ''
}
} else if (!chats.name) chats.name = message.pushName || chats.name || ''
if (['senderKeyDistributionMessage', 'messageContextInfo'].includes(mtype)) continue
chats.isChats = true
if (!chats.messages) chats.messages = {}
const fromMe = message.key.fromMe || areJidsSameUser(sender || chat, conn.user.id)
if (!['protocolMessage'].includes(mtype) && !fromMe && message.messageStubType != WAMessageStubType.CIPHERTEXT && message.message) {
delete message.message.messageContextInfo
delete message.message.senderKeyDistributionMessage
chats.messages[message.key.id] = JSON.parse(JSON.stringify(message, null, 2))
let chatsMessages
if ((chatsMessages = Object.entries(chats.messages)).length > 40) chats.messages = Object.fromEntries(chatsMessages.slice(30, chatsMessages.length))
}
} catch (e) {
console.error(e)
}
}
}

	conn.msToDate = (ms) => {
let days = Math.floor(ms / (24 * 60 * 60 * 1000));
let daysms = ms % (24 * 60 * 60 * 1000);
let hours = Math.floor((daysms) / (60 * 60 * 1000));
let hoursms = ms % (60 * 60 * 1000);
let minutes = Math.floor((hoursms) / (60 * 1000));
let minutesms = ms % (60 * 1000);
let sec = Math.floor((minutesms) / (1000));
return days + " Hari " + hours + " Jam " + minutes + " Menit";
// +minutes+":"+sec;
}

	conn.join = (arr) => {
let construct = []
for (let i = 0; i < arr.length; i++) {
construct = construct.concat(arr[i])
}
return construct
}

	conn.pickRandom = (list) => {
return list[Math.floor(list.length * Math.random())]
}

	conn.delay = (ms) => {
return new Promise((resolve, reject) => setTimeout(resolve, ms))
}

	conn.filter = (text) => {
let mati = ["q", "w", "r", "t", "y", "p", "s", "d", "f", "g", "h", "j", "k", "l", "z", "x", "c", "v", "b", "n", "m"]
if (/[aiueo][aiueo]([qwrtypsdfghjklzxcvbnm])?$/i.test(text)) return text.substring(text.length - 1)
else {
let res = Array.from(text).filter(v => mati.includes(v))
let resu = res[res.length - 1]
for (let huruf of mati) {
if (text.endsWith(huruf)) {
resu = res[res.length - 2]
}
}
let misah = text.split(resu)
return resu + misah[misah.length - 1]
}
}

	conn.format = (...args) => {
return util.format(...args)
}

	conn.getBuffer = async (url, options) => {
try {
options ? options : {}
const res = await axios({
method: "get",
url,
headers: {
'DNT': 1,
'Upgrade-Insecure-Request': 1
},
...options,
responseType: 'arraybuffer'
})
return res.data
} catch (e) {
console.log(`Error : ${e}`)
}
}

	conn.clockString = (ms) => {
let h = isNaN(ms) ? '--' : Math.floor(ms / 3600000)
let m = isNaN(ms) ? '--' : Math.floor(ms / 60000) % 60
let s = isNaN(ms) ? '--' : Math.floor(ms / 1000) % 60
return [h, m, s].map(v => v.toString().padStart(2, 0)).join(':')
}

	conn.serializeM = (m) => {
return exports.smsg(conn, m)
}

	Object.defineProperty(conn, 'name', {
value: { ...(options.chats || {}) },
configurable: true,
})
if (conn.user?.id) conn.user.jid = conn.decodeJid(conn.user.id)
store.bind(conn.ev)
return conn
}

	exports.smsg = (conn, m, hasParent) => {
if (!m) return m
let M = proto.WebMessageInfo
m = M.fromObject(m)
if (m.key) {
m.id = m.key.id
m.isBaileys = m.id && m.id.length === 16 || m.id.startsWith('3EB0') && m.id.length === 12 || false
m.chat = conn.decodeJid(m.key.remoteJid || message.message?.senderKeyDistributionMessage?.groupId || '')
m.isGroup = m.chat.endsWith('@g.us')
m.sender = conn.decodeJid(m.key.fromMe && conn.user.id || m.participant || m.key.participant || m.chat || '')
m.fromMe = m.key.fromMe || areJidsSameUser(m.sender, conn.user.id)
}

if (m.message) {
let mtype = Object.keys(m.message)
m.mtype = (!['senderKeyDistributionMessage', 'messageContextInfo'].includes(mtype[0]) && mtype[0]) || // Sometimes message in the front
(mtype.length >= 3 && mtype[1] !== 'messageContextInfo' && mtype[1]) || // Sometimes message in midle if mtype length is greater than or equal to 3!
mtype[mtype.length - 1] // common case
m.msg = m.message[m.mtype]
if (m.chat == 'status@broadcast' && ['protocolMessage', 'senderKeyDistributionMessage'].includes(m.mtype)) m.chat = (m.key.remoteJid !== 'status@broadcast' && m.key.remoteJid) || m.sender
if (m.mtype == 'protocolMessage' && m.msg.key) {
if (m.msg.key.remoteJid == 'status@broadcast') m.msg.key.remoteJid = m.chat
if (!m.msg.key.participant || m.msg.key.participant == 'status_me') m.msg.key.participant = m.sender
m.msg.key.fromMe = conn.decodeJid(m.msg.key.participant) === conn.decodeJid(conn.user.id)
if (!m.msg.key.fromMe && m.msg.key.remoteJid === conn.decodeJid(conn.user.id)) m.msg.key.remoteJid = m.sender
}
m.text = m.msg.text || m.msg.caption || m.msg.contentText || m.msg || ''
if (typeof m.text !== 'string') {
if ([
'protocolMessage',
'messageContextInfo',
'stickerMessage',
'audioMessage',
'senderKeyDistributionMessage'
].includes(m.mtype)) m.text = ''
else m.text = m.text.selectedDisplayText || m.text.hydratedTemplate?.hydratedContentText || m.text
}

m.mentionedJid = m.msg?.contextInfo?.mentionedJid?.length && m.msg.contextInfo.mentionedJid || []
let quoted = m.quoted = m.msg?.contextInfo?.quotedMessage ? m.msg.contextInfo.quotedMessage : null
 
if (m.quoted) {
let type = Object.keys(m.quoted)[0]
m.quoted = m.quoted[type]
if (typeof m.quoted === 'string') m.quoted = { text: m.quoted }
m.quoted.mtype = type
m.quoted.id = m.msg.contextInfo.stanzaId
m.quoted.chat = conn.decodeJid(m.msg.contextInfo.remoteJid || m.chat || m.sender)
m.quoted.isBaileys = m.quoted.id && m.quoted.id.length === 16 || false
m.quoted.sender = conn.decodeJid(m.msg.contextInfo.participant)
m.quoted.fromMe = m.quoted.sender === conn.user.jid
m.quoted.text = m.quoted.text || m.quoted.caption || m.quoted.contentText || ''
m.quoted.name = conn.getName(m.quoted.sender)
m.quoted.mentionedJid = m.quoted.contextInfo?.mentionedJid?.length && m.quoted.contextInfo.mentionedJid || []
let vM = m.quoted.fakeObj = M.fromObject({
key: {
fromMe: m.quoted.fromMe,
remoteJid: m.quoted.chat,
id: m.quoted.id
},
message: quoted,
...(m.isGroup ? { participant: m.quoted.sender } : {})
})
m.getQuotedObj = m.getQuotedMessage = async () => {
if (!m.quoted.id) return null
let q = M.fromObject(await conn.loadMessage(m.quoted.id) || vM)
return exports.smsg(conn, q)
}
if (m.quoted.url || m.quoted.directPath) m.quoted.download = (saveToFile = false) => conn.downloadM(m.quoted, m.quoted.mtype.replace(/message/i, ''), saveToFile)
            
	m.quoted.reply = (text, chatId, options) => conn.reply(chatId ? chatId : m.chat, text, vM, options)

	m.quoted.copy = () => exports.smsg(conn, M.fromObject(M.toObject(vM)))

	m.quoted.forward = (jid, forceForward = false) => conn.forwardMessage(jid, vM, forceForward)

	m.quoted.copyNForward = (jid, forceForward = true, options = {}) => conn.copyNForward(jid, vM, forceForward, options)

	m.quoted.cMod = (jid, text = '', sender = m.quoted.sender, options = {}) => conn.cMod(jid, vM, text, sender, options)

	m.quoted.delete = () => conn.sendMessage(m.quoted.chat, { delete: vM.key })
}
}
m.name = !nullish(m.pushName) && m.pushName || conn.getName(m.sender)
if (m.msg && m.msg.url) m.download = (saveToFile = false) => conn.downloadM(m.msg, m.mtype.replace(/message/i, ''), saveToFile)

	m.reply = (text, chatId, options) => conn.reply(chatId ? chatId : m.chat, text, m, options)

	m.copyNForward = (jid = m.chat, forceForward = true, options = {}) => conn.copyNForward(jid, m, forceForward, options)

	m.cMod = (jid, text = '', sender = m.sender, options = {}) => conn.cMod(jid, m, text, sender, options)

	m.delete = () => conn.sendMessage(m.chat, { delete: m.key })
try {
conn.saveName(m.sender, m.name)
conn.pushMessage(m)
if (m.isGroup) conn.saveName(m.chat)
if (m.msg && m.mtype == 'protocolMessage') conn.ev.emit('message.delete', m.msg.key)
} catch (e) {
console.error(e)
}
return m
}

	exports.logic = (check, inp, out) => {
if (inp.length !== out.length) throw new Error('Input and Output must have same length')
for (let i in inp) if (util.isDeepStrictEqual(check, inp[i])) return out[i]
return null
}

	exports.protoType = () => {
Buffer.prototype.toArrayBuffer = function toArrayBufferV2() {
const ab = new ArrayBuffer(this.length);
const view = new Uint8Array(ab);
for (let i = 0; i < this.length; ++i) {
view[i] = this[i];
}
return ab;
}

	Buffer.prototype.toArrayBufferV2 = function toArrayBuffer() {
return this.buffer.slice(this.byteOffset, this.byteOffset + this.byteLength)
}

	ArrayBuffer.prototype.toBuffer = function toBuffer() {
return Buffer.from(new Uint8Array(this))
}

	Uint8Array.prototype.getFileType = ArrayBuffer.prototype.getFileType = Buffer.prototype.getFileType = async function getFileType() {
return await fileTypeFromBuffer(this)
}

	String.prototype.isNumber = Number.prototype.isNumber = isNumber

	String.prototype.capitalize = function capitalize() {
return this.charAt(0).toUpperCase() + this.slice(1, this.length)
}
  
	String.prototype.capitalizeV2 = function capitalizeV2() {
const str = this.split(' ')
return str.map(v => v.capitalize()).join(' ')
}
String.prototype.decodeJid = function decodeJid() {
if (/:\d+@/gi.test(this)) {
const decode = jidDecode(this) || {}
return (decode.user && decode.server && decode.user + '@' + decode.server || this).trim()
} else return this.trim()
}

	Number.prototype.toTimeString = function toTimeString() {
// const milliseconds = this % 1000
const seconds = Math.floor((this / 1000) % 60)
const minutes = Math.floor((this / (60 * 1000)) % 60)
const hours = Math.floor((this / (60 * 60 * 1000)) % 24)
const days = Math.floor((this / (24 * 60 * 60 * 1000)))
return (
(days ? `${days} day(s) ` : '') +
(hours ? `${hours} hour(s) ` : '') +
(minutes ? `${minutes} minute(s) ` : '') +
(seconds ? `${seconds} second(s)` : '')
).trim()
}

Number.prototype.getRandom = String.prototype.getRandom = Array.prototype.getRandom = getRandom
}

function isNumber() {
const int = parseInt(this)
return typeof int === 'number' && !isNaN(int)
}

function getRandom() {
if (Array.isArray(this) || this instanceof String) return this[Math.floor(Math.random() * this.length)]
return Math.floor(Math.random() * this)
}

function nullish(args) {
return !(args !== null && args !== undefined)
}

