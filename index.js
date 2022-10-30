console.log('Starting...')
let cluster = require('cluster')
let path = require('path')
let fs = require('fs')
let package = require('./package.json')
const CFonts = require('cfonts')
const Readline = require('readline')
const yargs = require('yargs/yargs')
const rl = Readline.createInterface(process.stdin, process.stdout)

CFonts.say('Vesta Bot\nMD', {
colors: ['#FFFF00'],
font: 'pallet',
align: 'center',
})

CFonts.say(`${package.name} Oleh @${package.author.name || package.author}`, {
colors: ['blueBright'],
font: 'console',
align: 'center',
})

var isRunning = false

function start(file) {
if (isRunning) return
isRunning = true
let args = [path.join(__dirname, file), ...process.argv.slice(2)]

CFonts.say([process.argv[0], ...args].join(' '), {
font: 'console',
align: 'center',
gradient: ['red', 'magenta']
})

cluster.setupMaster({
exec: path.join(__dirname, file),
args: args.slice(1),
})

let p = cluster.fork()
p.on('message', data => {
console.log('[RECEIVED]', data)
switch (data) {
case 'reset':
p.kill()
isRunning = false
start.apply(this, arguments)
break

case 'uptime':
p.send(process.uptime())
break
}
})

p.on('exit', code => {
isRunning = false
console.error('Exited with code:', code)
if (code === 0) return
fs.watchFile(args[0], () => {
fs.unwatchFile(args[0])
start(file)
})
})

let opts = new Object(yargs(process.argv.slice(2)).exitProcess(false).parse())
if (!opts['test'])
if (!rl.listenerCount()) rl.on('line', line => {
p.emit('message', line.trim())
})
  // console.log(p)
}

start('main.js')
