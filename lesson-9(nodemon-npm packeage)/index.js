
const http = require("http")
const getRandomFruitsName = require('random-fruits-name')
const port =3000
const hostname="127.0.0.1"


const myserver = http.createServer((req,res)=>{
    res.writeHead(200,{"Content-Type":"text/html"})
    res.write(`<h1>${getRandomFruitsName('en')}</h1>`)
    res.end()
})

myserver.listen(port,()=>{
    console.log(`server is running at http://${hostname}:${port}`)
})





