let moment = require('moment-timezone')
let handler = async (m, {conn}) => {
    let _uptime = process.uptime() * 1000
    let uptime = clockString(_uptime)
    let d = new Date
    let date = d.toLocaleDateString('id', {
        day: 'numeric',
        month: 'long',
        year: 'numeric'
    })
let anu = `${ucapWaktu}
WaalaikumSalamWarahMatullahiWabaraKatuh

Runtime: ${uptime}`
   
   conn.reply(m.chat, anu, fkontak) 
}
handler.customPrefix = /^(assalamualaikum|samlikum|ass|asalamualaikum|assala'mualaikum|assalamu'alaikum)$/i // ketik bot (tanpa prefix)
handler.command = new RegExp

module.exports = handler

function clockString(ms) {
    let h = isNaN(ms) ? '--' : Math.floor(ms / 3600000)
    let m = isNaN(ms) ? '--' : Math.floor(ms / 60000) % 60
    let s = isNaN(ms) ? '--' : Math.floor(ms / 1000) % 60
    return [h, m, s].map(v => v.toString().padStart(2, 0)).join(':')
}
