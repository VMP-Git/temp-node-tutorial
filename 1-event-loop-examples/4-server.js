// this code demostrates that even after executing the full code, it still stays alive.
// This is because .listen is an asynchronous process.

const http = require("http");

const server = http.createServer((req, res) => {
  console.log("request event");
  res.end("Hello World");
});

server.listen(5001, () => {
  console.log("Server is listening on port: 5001...");
});
