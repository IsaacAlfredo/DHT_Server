const server = require("express")();

// serve static files
server.use(require("express").static("public"));

let temperature = 0;
let humidity = 0;

server.get("/update", (req, res, next) => {
  const params = req.query;
  temperature = params.temperature;
  humidity = params.humidity;
  res.header("Access-Control-Allow-Origin", "*");
  next();
  res.status(200).send("OK");
});

server.get("/temperature", (req, res, next) => {
  res.header("Access-Control-Allow-Origin", "*");
  next();
  res.status(200).send(temperature.toString());
});

server.get("/humidity", (req, res, next) => {
  res.header("Access-Control-Allow-Origin", "*");
  next();
  res.status(200).send(humidity.toString());
});

server.listen(3000, () => {
  console.log("Listening on port 3000");
});
