const http = require("http"); // Change from "https" to "http"

const handler = (req, res) => {
  const url = req.url;
  if (url === "/") {
    res.setHeader("Content-Type", "text/html");
    res.write(
      "<html><head><title>My First Page</title></head><body><h1>Hello World</h1></body></html>"
    );
    res.end();
  } else if (url === "/home") {
    res.setHeader("Content-Type", "text/html");
    res.write(
      "<html><head><title>My First Page</title></head><body><h1>Welcome Home</h1></body></html>"
    );
    res.end();
  } else if (url === "/about") {
    res.setHeader("Content-Type", "text/html");
    res.write(
      "<html><head><title>My First Page</title></head><body><h1>About us Page</h1></body></html>"
    );
    res.end();
  } else if (url === "/node") {
    res.setHeader("Content-Type", "text/html");
    res.write(
      "<html><head><title>My First Page</title></head><body><h1>Welcome to myy NOde js project</h1></body></html>"
    );
    res.end();
  }
};
const server = http.createServer(handler);

server.listen(3000);
