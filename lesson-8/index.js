const http = require("http")

const port =5000
const hostname= "127.0.0.1"


const myserver = http.createServer((req,res)=>{
    res.writeHead(202,{"Content-Type":"text/html"})
    res.write("<h1>hello world</h1>")
    res.end()
})

myserver.listen(port,()=>{
    console.log(`server is running at http://${hostname}:${port}`)
})



