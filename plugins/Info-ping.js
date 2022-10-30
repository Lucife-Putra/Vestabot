let os = require('os')
let util = require('util')
const fetch = require('node-fetch')
let { performance } = require('perf_hooks')

let handler = async (m, { conn, usedPrefix }) => {
  await m.reply('_Testing speed..._')
  await conn.delay(2000)

const cpus = os.cpus().map(cpu => {
cpu.total = Object.keys(cpu.times).reduce((last, type) => last + cpu.times[type], 0)
return cpu
})

const cpu = cpus.reduce((last, cpu, _, { length }) => {
last.speed += cpu.speed / length
return last
}, {
speed: 0,
})


let old = performance.now()
let neww = performance.now()
let speed = neww - old

const y = `       Info Speed Internet Bot\n\nMerespon Dalam \n${speed} Milidetik`

await conn.send2ButtonImg(m.chat, await (await fetch('https://telegra.ph/file/3e3432c041ef021ba65f6.jpg')).buffer(), y, wm, '𝐌 𝐄 𝐍 𝐔', '.menu', '𝐎 𝐖 𝐍 𝐄 𝐑', '.owner', m)

//await m.reply(y)
}
handler.help = ['ping']
handler.tags = ['info']

handler.command = /^(ping|speed|info)$/i

module.exports = handler