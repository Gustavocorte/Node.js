let process = require('process');

console.log(process.argv)

process.stdin.on('data', (keyborad) =>{
    process.stdout.write(`Qual o seu nome? ${keyborad}`)
    process.exit()
})