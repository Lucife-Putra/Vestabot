const { youtubeSearch } = require('@bochilteam/scraper')
let handler = async (m, { text }) => {
  if (!text) throw 'Cari apa?'
  const { video, channel } = await youtubeSearch(text)
  let teks = [...video, ...channel].map(v => {
    switch (v.type) {
      case 'video': return `
š *${v.title}* 
š _${v.url}_
ā° Duration: ${v.durationH}
š¤ Uploaded ${v.publishedTime}
šļø ${v.view} views
      `.trim()
      case 'channel': return `
ā­āāāāāāāā¢ *CHANNEL*
āš *${v.channelName}* 
āš _${v.url}_
āš _${v.subscriberH} Subscriber_
āš„ ${v.videoCount} video
āāāāāāāāā¢
`.trim()
    }
  }).filter(v => v).join('\n\nāāāāāāāāāāāāāāāāāāāāāāāāāāā\n\n')
  m.reply(`*${htki} SEARCH ${htka}*\n\n` + teks)
}
handler.help = ['', 'earch'].map(v => 'yts' + v + ' <pencarian>')
handler.tags = ['tools']
handler.command = /^yts(earch)?$/i

module.exports = handler
