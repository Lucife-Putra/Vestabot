const cp = require('child_process')
const { promisify } = require('util')
let exec = promisify(cp.exec).bind(cp)
let handler = async (m) => {
	await conn.reply(m.chat, "Wait", m)
    let o
    try {
        o = await exec('df -h')
    } catch (e) {
        o = e
    } finally {
        let { stdout, stderr } = o
        if (stdout.trim()) m.reply(stdout)
        if (stderr.trim()) m.reply(stderr)
    }
}
handler.help = ['statserver']
handler.tags = ['info']
handler.command = /^(statserver)$/i

module.exports = handler