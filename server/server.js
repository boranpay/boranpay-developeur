const http = require("http");
const app = require("./index");
const db = require('./models');
const PORT = process.env.PORT || '8080';


const server = http.createServer(app)

server.listen(PORT, () => {
  console.log(`Local: ${process.env.NODE_APP_URL}:${PORT}`);
  console.log('*************************************\n');
})