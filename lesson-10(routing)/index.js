const fs = require("fs")
const http= require("http")
const port =3000
const hostname="127.0.0.1"


const myserver = http.createServer((req,res)=>{
    const handleRequest = (status,location) =>{
        fs.readFile(location,(err,data)=>{
            res.writeHead(status,{"Content-Type":"text/html"})
            res.write(data)
            res.end()
        })
    }
    if(req.url=== "/"){
      handleRequest(202,"index.html")
    }else if(req.url === "/about"){
       handleRequest(200,"about.html")
    }else if(req.url === "/contact"){
      handleRequest(200,"contact.html")
    }else if(req.url === "/help"){
        handleRequest(200,"help.html")
    }else{
      handleRequest(404,"error.html")
    }
})

myserver.listen(port,()=>{
    console.log(`server is running at http://${hostname}:${port}`)
})