// URL = Uniform Resource Locator

// https = Hypertext Transfer Protocol Secure

const http = require("http");
const fs = require("fs");
const url = require("url");
const express = require("express");

const app = express();

app.get("/", (req, res) => {
  return res.send("hello from home Page");
});

app.get("/about", (req, res) => {
  return res.send("Hello from About Page");
});

app.get("/product", (req, res) => {
  return res.send(`Hello ${req.query.name}`);
});

// function myHandler(req, res) {
//   if (req.url === "/favicon.ico") return res.end();
//   const log = `${Date.now()}: ${req.url} New Req Received\n`;
//   const myUrl = url.parse(req.url, true);
//   console.log(myUrl);
//   fs.appendFile("log.txt", log, (err, data) => {
//     switch (myUrl.pathname) {
//       case "/":
//         if (req.method === "GET") res.end("HomePage");
//         break;
//       case "/about":
//         const userName = myUrl.query.myname;
//         res.end(`Hi ${userName}`);
//         break;
//       case "/signup":
//         if (req.method === "GET") res.end("This is a signup form");
//         else if (req === "GET") res.end("This is a signup form ");
//         else if (req.method === "POST") {
//           res.end("Sucess");
//         }
//       case "/search":
//         const search = myUrl.query.search_query;
//         res.end("Here are your result for", search);
//       default:
//         res.end("404 page not found");
//     }
//   });
// }

// const myServer = http.createServer(app);

app.listen(8000, () => console.log("Serverd Started"));
