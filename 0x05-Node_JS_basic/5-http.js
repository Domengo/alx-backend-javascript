const http = require('http');

const app = http.createServer((req, res) => {
  req.statusCode = 200;
  req.setHeader('Content-Type', 'text/plain');
  res.end('Hello Holberton School!');
});
app.listen('127.0.0.1', 1245, () => {
  console.log('Server running');
});
