const http = require("http");
const fs = require("fs");
const port = 3000;
const hostName = "127.0.0.1";



const myServer = http.createServer((req, res) => {

  function getHandler(statusCode, fileLocation) {
    fs.readFile(fileLocation, "utf-8", (err, data) => {
      res.writeHead(statusCode, { "Content-Type": "text/html" });
      res.write(data);
      res.end();
    });
  }

  if (req.url === "/") {
    getHandler(200, "index.html");
  } else if (req.url === "/about") {
    getHandler(200, "about.html");
  } else if (req.url === "/contact") {
    getHandler(200, "contact.html");
  } else {
    getHandler(404, "error.html");
  }

  
});



myServer.listen(port, hostName, () => {
  console.log(`successfull http://${hostName}:${port}`);
});
