const server = require("express")();

// serve static files
server.use(require("express").static("public"));

let temperature = 0;
let humidity = 0;
let temperatureHist = [];
let humidityHist = [];

server.get("/update", (req, res) => {
  const params = req.query;
  temperature = params.temperature;
  humidity = params.humidity;
  if (temperatureHist.length > 9) {
    temperatureHist.shift();
    humidityHist.shift();
  }
  temperatureHist.push(temperature);
  humidityHist.push(humidity);
  res.header("Access-Control-Allow-Origin", "*");
  res.status(200).send("OK");
});

server.get("/temperature", (req, res) => {
  res.header("Access-Control-Allow-Origin", "*");
  res.status(200).send(temperature.toString());
});

server.get("/humidity", (req, res) => {
  res.header("Access-Control-Allow-Origin", "*");
  res.status(200).send(humidity.toString());
});

server.get("/hist", (req, res) => {
  res.header("Access-Control-Allow-Origin", "*");
  res.status(200).json({
    temperatureHist,
    humidityHist,
  });
});

server.listen(3000, () => {
  console.log("Listening on port 3000");
});
