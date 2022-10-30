const util = require('util')
const { join } = require('path')
const { promises } = reauire('fs')
const fetch = require('node-fetch')
const { performance } = require('perf_hooks')
const moment = require('moment-timezone')
const { sizeFormatter } = require('human-readable')
const { cpus as _cpus, totalmem, freemem } = require('os')

const more = String.fromCharCode(8206)
const readMore = more.repeat(4001)

let format = sizeFormatter({
  std: 'JEDEC', // 'SI' (default) | 'IEC' | 'JEDEC'
  decimalPlaces: 2,
  keepTrailingZeroes: false,
  render: (literal, symbol) => `${literal} ${symbol}B`,
})

let handler = async (m, { conn, usedPrefix, __dirname, text, command }) => {

let date = moment.tz('Asia/Jakarta').format("dddd, Do MMMM, YYYY")
let time = moment.tz('Asia/Jakarta').format('HH:mm:ss')

let _uptime = process.uptime() * 1000
let uptime = clockString(_uptime)
let totalreg = Object.keys(global.db.data.users).length
let rtotalreg = Object.values(global.db.data.users).filter(user => user.registered == true).length
const chats = Object.entries(conn.chats).filter(([id, data]) => id && data.isChats)
const groupsIn = chats.filter(([id]) => id.endsWith('@g.us')) //groups.filter(v => !v.read_only)

const used = process.memoryUsage()
const cpus = _cpus().map(cpu => {
cpu.total = Object.keys(cpu.times).reduce((last, type) => last + cpu.times[type], 0)
return cpu
})

m.reply('Maintenance')





}
handler.help = ['infobot']
handler.tags = ['info']
handler.command = /^(botinfo|infobot)$/i

module.exports = handler

function clockString(ms) {
  let h = isNaN(ms) ? '--' : Math.floor(ms / 3600000)
  let m = isNaN(ms) ? '--' : Math.floor(ms / 60000) % 60
  let s = isNaN(ms) ? '--' : Math.floor(ms / 1000) % 60
  return [h, m, s].map(v => v.toString().padStart(2, 0)).join(':')
}