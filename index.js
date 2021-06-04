const express = require("express");
const app = express();
require("dotenv").config();
const mongodb = require("mongodb");
const bcrypt = require("bcrypt");
const MongoClient = mongodb.MongoClient;

const usuarios = require("./usuarios");
const managers = require("./managers");
const cifrar = require("./cifrar")

app.use(express.static("public"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use("/usuarios", usuarios);
app.use("/managers", managers);




MongoClient.connect(
  process.env.MONGO_URL,
  { useNewUrlParser: true, useUnifiedTopology: true },
  function (error, client) {
    error ? console.log(error) : (app.locals.db = client.db("HRManagement"));
  }
);


app.listen(3000);