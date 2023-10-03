const server = require("express")();

// serve static files
server.use(require("express").static("public"));

let temperature = 0;
let humidity = 0;

server.get("/update", (req, res) => {
  const params = req.query;
  temperature = params.temperature;
  humidity = params.humidity;
  res.status(200).send("OK");
});

server.get("/temperature", (req, res) => {
  res.status(200).send(temperature.toString());
});

server.get("/humidity", (req, res) => {
  res.status(200).send(humidity.toString());
});

server.listen(3000, () => {
  console.log("Listening on port 3000");
});
