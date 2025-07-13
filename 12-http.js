// this code will create a very basic website.

const http = require("http");

const server = http.createServer((req, res) => {
  // above here the parameters req & res means request and response.
  // Its a general practice to give this names, else these can be given any name.
  // Also, here the req potrays a web request from a user
  // and the res parameter potrays the response which the user will get.
  //
  // this line will print a giant object after rerunning this code and refreshing from the browser.
  // From this object we need to look for the URL for which the client may request.
  // console.log(req);
  //
  //
  // below two lines are now replaced with the below page specific content like /Home page, /about, etc.
  //   res.write("Welcome to our home page.");
  //   res.end();

  // if the user requests home page, he'll get this msg.
  if (req.url === "/") {
    res.end("Welcome to our home page.");
  }
  // if the user requests "about" page. Also remember here to use "else if" because res.end() cannot be called
  // multiple time for the same request. Once res.end() is called, you cannot write to or end the
  // response again, which causes the error. This is my finding through chatgpt, as the tutorial didn't expained about this, following which I got into this error.
  else if (req.url === "/about") {
    res.end("Here is our short history.");
  } else {
    res.writeHead(404, { "Content-Type": "text/html" }); // this line is specific for safari or similar browser which does not recognises the html code automatically.Also the 404 indicates error code in html.
    // if the user requests an unknown page.
    res.end(`
    <h1>Oops!</h1>
    <p>We can't seem to find the page you are looking for.</p>
    <a href="/"> Back Home </a>
    `);
  }
});

// this line ensures that this module/server is accessible at this specified port number.
// this can be set to any port number as its arbitrary.
server.listen(5002, () => {
  console.log("Server running at http://localhost:5002");
});
// press ^ c to close the server.
