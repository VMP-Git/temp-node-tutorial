// this code just represents why asynchronous code is
// important and why one should always try to set their code asynchronously.

const http = require("http");

const server = http.createServer((req, res) => {
  if (req.url === "/") {
    res.end("Home Page");
  } else if (req.url === "/about") {
    // BLOCKING CODE !!!
    // this loop just adds some loading time for the website.
    for (let i = 0; i < 1000; i++) {
      for (let j = 0; j < 1000; j++) {
        console.log(`${i}, ${j}`);
      }
    }
    res.end("About Page");
  } else {
    res.end("Error Page");
  }
});

server.listen(5001, () => {
  console.log("Server is listening on port: 5001...");
});
