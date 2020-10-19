const express = require("express");
const app = express();
const port = 3001;
// const bodyParser = require("body-parser");

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
  console.log(req.body);
  res.json({
    status: "ok",
  });
});

app.listen(port, () => {
  console.log(`listening at http://localhost:${port}`);
});
