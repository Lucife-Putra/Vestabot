/*

let os = require('os')
let util = require('util')
let { performance } = require('perf_hooks')
let { sizeFormatter } = require('human-readable')
let format = sizeFormatter({
  std: 'JEDEC', // 'SI' (default) | 'IEC' | 'JEDEC'
  decimalPlaces: 2,
  keepTrailingZeroes: false,
  render: (literal, symbol) => `${literal} ${symbol}B`,
})
let handler = async (m, { conn }) => {
  const chats = Object.entries(conn.chats).filter(([id, data]) => id && data.isChats)
  const groupsIn = chats.filter(([id]) => id.endsWith('@g.us')) //groups.filter(v => !v.read_only)
  const used = process.memoryUsage()
  const cpus = os.cpus().map(cpu => {
    cpu.total = Object.keys(cpu.times).reduce((last, type) => last + cpu.times[type], 0)
    return cpu
  })
  const cpu = cpus.reduce((last, cpu, _, { length }) => {
    last.total += cpu.total
    last.speed += cpu.speed / length
    last.times.user += cpu.times.user
    last.times.nice += cpu.times.nice
    last.times.sys += cpu.times.sys
    last.times.idle += cpu.times.idle
    last.times.irq += cpu.times.irq
    return last
  }, {
    speed: 0,
    total: 0,
    times: {
      user: 0,
      nice: 0,
      sys: 0,
      idle: 0,
      irq: 0
    }
  })
  let old = performance.now()
  await m.reply('_Menampilkan Info Bot..._')
  let neww = performance.now()
  let speed = neww - old

const sc =`––––––「 𝐈𝐍𝐅𝐎 𝐒𝐂 」–––––––
𝙱𝙾𝚃 𝙸𝙽𝙸 𝙼𝙴𝙽𝙶𝙶𝚄𝙽𝙰𝙺𝙰𝙽 𝚂𝙲
𝚈𝚃 : 
𝙻𝙸𝙽𝙺 : 
𝙽𝙰𝙼𝙰 𝚂𝙲 : AquaBot
𝙲𝚁𝙴𝙰𝚃𝙾𝚁 : 
𝚁𝙴𝙲𝙾𝙳𝙴 𝙱𝚈 : 𝐌𝐀𝐑𝐒𝐀𝐍𝐃𝐈
	
––––––「 𝐆𝐂 𝐁𝐎𝐓 」–––––––
𝐆𝐫𝐨𝐮𝐩 𝐂𝐡𝐚𝐭 : *${groupsIn.length}*
𝐆𝐫𝐨𝐮𝐩 𝐉𝐨𝐢𝐧𝐞𝐝 : *${groupsIn.length}*
𝐆𝐫𝐨𝐮𝐩 𝐋𝐞𝐟𝐭 : *${groupsIn.length - groupsIn.length}*
𝐏𝐞𝐫𝐬𝐨𝐧𝐚𝐥 𝐂𝐡𝐚𝐭 : *${chats.length - groupsIn.length}*
𝐓𝐨𝐭𝐚𝐥 𝐂𝐡𝐚𝐭 :  *${chats.length}*
	
––––––「 𝐈𝐍𝐅𝐎 𝐁𝐎𝐓 」–––––––
𝐑𝐞𝐬𝐩𝐨𝐧 𝐁𝐨𝐭 : *${speed}* 𝐌𝐢𝐥𝐢𝐃𝐞𝐭𝐢𝐤
	
𝐑𝐚𝐦 : *${format(os.totalmem() - os.freemem())} / ${format(os.totalmem())}*
	
_𝐍𝐨𝐝𝐞𝐉𝐬 𝐌𝐞𝐦𝐨𝐫𝐲 𝐔𝐬𝐚𝐠𝐞_
	${'```' + Object.keys(used).map((key, _, arr) => `${key.padEnd(Math.max(...arr.map(v=>v.length)),' ')}: ${format(used[key])}`).join('\n') + '```'}
	
${cpus[0] ? `_Total CPU Usage_
${cpus[0].model.trim()} (${cpu.speed} MHZ)\n${Object.keys(cpu.times).map(type => `- *${(type + '*').padEnd(6)}: ${(100 * cpu.times[type] / cpu.total).toFixed(2)}%`).join('\n')}

_CPU Core(s) Usage (${cpus.length} Core CPU)_
${cpus.map((cpu, i) => `${i + 1}. ${cpu.model.trim()} (${cpu.speed} MHZ)\n${Object.keys(cpu.times).map(type => `- *${(type + '*').padEnd(6)}: ${(100 * cpu.times[type] / cpu.total).toFixed(2)}%`).join('\n')}`).join('\n\n')}` : ''}`

conn.fakeReply(m.chat, sc, '0@s.whatsapp.net', '「 𝐈𝐍𝐅𝐎 𝐒𝐂 」𝐌𝐄𝐍𝐀𝐌𝐏𝐈𝐋𝐊𝐀𝐍 𝐈𝐍𝐅𝐎 𝐁𝐎𝐓', 'status@broadcast')
}
handler.help = ['infosc']
handler.tags = ['info']

handler.command = /^(infobot|infosc|sc)$/i
module.exports = handler

*/
