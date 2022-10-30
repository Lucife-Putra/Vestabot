let moment = require('moment-timezone')
let fetch = require('node-fetch')
let handler = async (m, { conn, usedPrefix, command}) => {
	function pickRandom(list) {
  return list[Math.floor(Math.random() * list.length)]
}
	let who = m.mentionedJid && m.mentionedJid[0] ? m.mentionedJid[0] : m.fromMe ? conn.user.jid : m.sender
	const namae = conn.getName(m.sender)

const sections = [
	{
	title: "Ehhem", 
	rows: [
	    {title: "Random Umur", rowId: '.daftar ' + namae + '.' + pickRandom(['30','29','28','27','26','25','24','23','22','21','20','19','18','17','16','15','14','13','12','11','10'])}
	]
    },
	{
	title: "🦋 Pilih Umur Nya Bro 🦋",
	rows: [
	{title: "🦋 10 Tahun 🦋", rowId: '.daftar ' + namae + '.10'}, 
	{title: "🦋 15 Tahun 🦋", rowId: '.daftar ' + namae + '.15'},
	{title: "🦋 20 Tahun 🦋", rowId: '.daftar ' + namae + '.20'},
	{title: "🦋 25 Tahun 🦋", rowId: '.daftar ' + namae + '.25'},
	{title: "🦋 30 Tahun 🦋", rowId: '.daftar ' + namae + '.30'},
	{title: "🦋 35 Tahun 🦋", rowId: '.daftar ' + namae + '.35'},
	{title: "🦋 40 Tahun 🦋", rowId: '.daftar ' + namae + '.40'},
	{title: "🦋 45 Tahun 🦋", rowId: '.daftar ' + namae + '.45'},
	{title: "🦋 50 Tahun 🦋", rowId: '.daftar ' + namae + '.50'},
	{title: "🦋 55 Tahun 🦋", rowId: '.daftar ' + namae + '.55'},
	{title: "🦋 60 Tahun 🦋", rowId: '.daftar ' + namae + '.60'},
	{title: "🦋 65 Tahun 🦋", rowId: '.daftar ' + namae + '.65'},
	{title: "🦋 70 Tahun 🦋", rowId: '.daftar ' + namae + '.70'},
	{title: "🦋 75 Tahun 🦋", rowId: '.daftar ' + namae + '.75'},
	{title: "🦋 80 Tahun 🦋", rowId: '.daftar ' + namae + '.80'},
	{title: "🦋 85 Tahun 🦋", rowId: '.daftar ' + namae + '.85'},
	{title: "🦋 90 Tahun 🦋", rowId: '.daftar ' + namae + '.90'},
	{title: "🦋 95 Tahun 🦋", rowId: '.daftar ' + namae + '.95'},
	{title: "🦋 100 Tahun 🦋", rowId: '.daftar ' + namae + '.100'}
]
}
]
	
const listMessage = {
text: `⬡ *Hai Kak ${ucapan()}*\n⬡ *Kaka Mau Daftar Nih?*\n⬡ *Pilih List Umurnya Ya Kak😉*\n⬡ *Jangan Lupa Mandi Kak*`,
footer: `\n${wm}`,
title: `––––––「 𝚅𝙴𝚁𝙸𝙵𝚈」–––––––`,
buttonText: "Click Kak",
sections
}

return conn.sendMessage(m.chat, listMessage, { quoted: m, ephemeralExpiration: 86400})

    
  }
	handler.help = ['verify']
	handler.tags = ['info']
	handler.command = /^verify|ttt$/i
	
	handler.register = false
	handler.private = false
	
	module.exports = handler
	
	function ucapan() {
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




 
	

/*
	{title: "🌸30• Years ʚĭɞ", rowId: '.daftar ' + namae + '.30 '},
	{title: "🎐29• Years ʚĭɞ", rowId: '.daftar ' + namae + '.29 '},
	{title: "🌸28• Years ʚĭɞ", rowId: '.daftar ' + namae + '.28 '},
	{title: "🎐27• Years ʚĭɞ", rowId: '.daftar ' + namae + '.27 '},
	{title: "🌸26• Years ʚĭɞ", rowId: '.daftar ' + namae + '.26 '},
	{title: "🎐25• Years ʚĭɞ", rowId: '.daftar ' + namae + '.25 '},
	{title: "🌸24• Years ʚĭɞ", rowId: '.daftar ' + namae + '.24 '},
	{title: "🎐23• Years ʚĭɞ", rowId: '.daftar ' + namae + '.23 '},
	{title: "🌸22• Years ʚĭɞ", rowId: '.daftar ' + namae + '.22 '},
	{title: "🎐21• Years ʚĭɞ", rowId: '.daftar ' + namae + '.21 '}
	]
    },
    {
	title: "🎀 Y O U N G",
	rows: [
	{title: "🌸20• Years ʚĭɞ", rowId: '.daftar ' + namae + '.20 '},
	{title: "🎐19• Years ʚĭɞ", rowId: '.daftar ' + namae + '.19 '},
	{title: "🌸18• Years ʚĭɞ", rowId: '.daftar ' + namae + '.18 '},
	{title: "🎐17• Years ʚĭɞ", rowId: '.daftar ' + namae + '.17 '},
	{title: "🌸16• Years ʚĭɞ", rowId: '.daftar ' + namae + '.16 '},
	{title: "🎐15• Years ʚĭɞ", rowId: '.daftar ' + namae + '.15 '},
	{title: "🌸14• Years ʚĭɞ", rowId: '.daftar ' + namae + '.14 '},
	{title: "🎐13• Years ʚĭɞ", rowId: '.daftar ' + namae + '.13 '},
	{title: "🌸12• Years ʚĭɞ", rowId: '.daftar ' + namae + '.12 '},
	{title: "🎐11• Years ʚĭɞ", rowId: '.daftar ' + namae + '.11 '},
	{title: "🌸10• Years ʚĭɞ", rowId: '.daftar ' + namae + '.10 '},
	{title: "🎐9• Years ʚĭɞ", rowId: '.daftar ' + namae + '.9 '},
	{title: " 🌸8• Years ʚĭɞ", rowid: '.daftar ' + namae + '.8 '},
	{title: "🎐8• Years ʚĭɞ", rowId: '.daftar ' + namae + '.8 '},
	{title: " 🌸7• Years ʚĭɞ", rowid: '.daftar ' + namae + '.7 '},
	{title: "🎐6• Years ʚĭɞ", rowId: '.daftar ' + namae + '.6 '}
	]
    }
]

let listMessage= {
'document':{'url':'https://youtube.com/channel/UCACHvReRmw2fxgMutPFCBWg'},
'mimetype':global.ddocx,
'fileName':'––––––「 𝚅𝙴𝚁𝙸𝙵𝚈」–––––––',
'fileLength':fsizedoc,
'pageCount':fpagedoc,
'contextInfo':{
'forwardingScore':555,
'isForwarded':true,
'externalAdReply':{
'mediaUrl':'',
'mediaType':2,
'previewType':'pdf',
'title':`Yosh`,
'body':`ucapan()`,
'thumbnail':await(await fetch('https://telegra.ph/file/c29da8f996498469d1a1f.jpg')).buffer(),
'sourceUrl':''}},
'caption':`Copas Nih Broh`,
'footer':`Hehe`,
'buttons':[
{'buttonId':'.menu','buttonText':{'displayText':'▣ Mҽɳυ ▣'},'type':1},
{'buttonId':'.salken','buttonText':{'displayText':'🎈Hαʅʅσ'},'type':1}
],
'headerType':6}        
  const listMessage = {
	text: `𝐇𝐚𝐢 𝐊𝐚𝐤 @${who.replace(/@.+/, '')} ${ucapan()}\n𝐒𝐢𝐥𝐚𝐡𝐤𝐚𝐧 𝐃𝐢𝐩𝐢𝐥𝐢𝐡 𝐋𝐢𝐬𝐭𝐧𝐲𝐚 𝐊𝐚𝐤\n\n`,
	footer: wm2,
	title: `––––––「 𝚅𝙴𝚁𝙸𝙵𝚈」–––––––`,
	buttonText: "ഒ Register ഒ",
	sections
}
*/
