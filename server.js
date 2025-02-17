const express = require("express");
const dotenv = require("dotenv").config();
const test = require("./controllers/user");

const app = express();

const port = process.env.PORT || 3000;

app.get("/", test.login);

app.listen(port, () => {
  `Server started on port ${port}`;
});