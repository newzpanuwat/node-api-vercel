const express = require("express");
const cors = require("cors");
const { users, bio, expLists, blogsAll, portPhoto, avatarPhoto } = require("./data");
const app = express();
app.use(cors());

const PORT = 4000;

app.listen(PORT, () => {
  console.log("listening port", PORT);
});

app.get("/", (req, res) => {
  res.send({ data: "API is running" });
});

app.get("/bio", (req, res) => {
  res.send(bio);
});

app.get("/experiences", (req, res) => {
  res.send(expLists);
});

app.get("/blogs", (req, res) => {
  res.send(blogsAll);
});

module.exports = app;
