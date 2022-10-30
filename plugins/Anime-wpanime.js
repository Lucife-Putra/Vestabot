const fetch = require('node-fetch')

let handler = async (m, { conn, command }) => {
let caption = `–––––「 𝐖𝐏𝐏𝐀𝐍𝐈𝐌𝐄 」–––––––

❖ 𝐃𝐚𝐬𝐚𝐫 𝐖𝐢𝐛𝐮𝐡 𝐁𝐚𝐮 𝐁𝐚𝐰𝐚𝐧𝐡𝐡🗿
❖ 𝐊𝐞𝐭𝐢𝐤 .${command} 𝐔𝐧𝐭𝐮𝐤 𝐍𝐞𝐱𝐭`
    try {
   
   let res = await fetch(global.API('xteam', '/randomimage/wpmobile', {}, 'APIKEY'))
        if (res.status != 200) throw await res.text()
        let img = await res.buffer()
        conn.sendFile2(m.chat, img, 'wp.jpg', caption, wm, m, false, )
    } catch (e) {
        throw `Limit apikey habis atau error!`
    }
}
handler.help = ['wallpaperanime']
handler.tags = ['anime']
handler.command = /^(wallpaper|wp)anime$/i
handler.limit = lmt1

module.exports = handler