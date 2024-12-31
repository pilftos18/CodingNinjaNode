const http = require("http");

const server = http.createServer((req, res) => {
  const resMessage = "I am a Ninja";
  // res.send(resMessage);
  res.end('I am a Ninja'); // Send the response
  
});

server.listen(3000, () => {
  console.log("server is listening at port 3000");
});

module.exports = server;
