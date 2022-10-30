const { tiktokdl, tiktokdlv2 } = require('@bochilteam/scraper')

let handler = async (m, { conn, args, usedPrefix, command }) => {

if (!args[0]) throw `*Perintah ini untuk mengunduh video tiktok dengan link*\n\ncontoh:\n${usedPrefix + command} https://vm.tiktok.com/ZGJAmhSrp/`

if (!args[0].match(/tiktok/gi)) throw `*Link salah! Perintah ini untuk mengunduh video tiktok dengan link*\n\ncontoh:\n${usedPrefix + command} https://vm.tiktok.com/ZGJAmhSrp/`

const { author: { nickname }, video, description } = await tiktokdl(args[0]).catch(async _ => await tiktokdlv2(args[0]))

const url = video.no_watermark || video.no_watermark_hd || video.with_watermark || video.no_watermark_raw

if (!url) throw 'Can\'t download video!'
    
const ty = `          ✘ 𝐓 𝐈 𝐊 - 𝐓 𝐎 𝐊 ✘\n\n⛥ Nickname : *${nickname}\n\n⚝ Description : *${description}\n\n${wm}`
conn.sendFile(m.chat, url, 'tiktok.mp4', ty, m, false)
}
handler.help = ['tiktok <url>']
handler.tags = ['downloader']
handler.limit = lmt2
handler.command = /^(tik|tt|tiktok)$/i

module.exports = handler


