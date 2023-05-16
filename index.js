const express = require("express");
const cors = require("cors");
const { bio, expLists, blogsAll } = require("./data");
const app = express();
app.use(cors());

const PORT = 4000;

app.listen(PORT, () => {
  console.log("listening port", PORT);
});

app.get("/", (_, res) => {
  res.send({ data: "API is running" });
});

app.get("/bio", (_, res) => {
  res.send(bio);
});

app.get("/experiences", (_, res) => {
  res.send(expLists);
});

app.get("/blogs", (_, res) => {
  res.send(blogsAll);
});

module.exports = app;
