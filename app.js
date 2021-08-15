const express = require("express");
const app = express();
const http = require('http');

const server = http.createServer(app);

app.use(express.static("public"));

let port = process.env.PORT || 3000;

server.listen(port, function(){})