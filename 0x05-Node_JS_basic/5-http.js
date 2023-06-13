const http = require("http");
const { countStudents } = require("./3-read_file_async");

const app = http.createServer((req, res) => {
  res.setHeader("Content-Type", "text/plain");

  if (req.url === "/") {
    res.statusCode = 200;
    res.end("Hello Holberton School!\n");
  } else if (req.url === "/students") {
    res.statusCode = 200;
    const database = "database.csv";
    countStudents(database)
      .then(() => {
        res.end();
      })
      .catch((error) => {
        res.statusCode = 500;
        res.end(error.message);
      });
  } else {
    res.statusCode = 404;
    res.end("Not Found\n");
  }
});

app.listen(1245, () => {
  console.log("Server is running on port 1245");
});

module.exports = app;
