const express = require("express");
const app = express();
const port = 3001;
const burgers = [];

app.use(express.json());

app.use((req, res, next) => {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Content-Type");
  next();
});

app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.post("/order", (req, res) => {
  burgers.unshift(req.body);
  console.log(burgers);
  res.json({ status: "good" });
});

app.get("/order", (req, res) => {
  res.json(burgers[0]);
});

app.get("/orders", (req, res) => {
  res.json(burgers);
});

app.listen(port, () => {
  console.log(`listening at http://localhost:${port}`);
});
