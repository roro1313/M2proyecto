const express = require("express");
const app = express();
require("dotenv").config();
const mongodb = require("mongodb");
const objectID = require("mongodb").ObjectID;
const MongoClient = mongodb.MongoClient;

/* Para usar router: */
const usuarios = require("./usuarios");
const managers = require("./managers");
app.use("/usuarios", usuarios);
app.use("/managers", managers);

app.use(express.static("public"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

MongoClient.connect(
  "mongodb://localhost:27017",
  { useNewUrlParser: true, useUnifiedTopology: true },
  function (error, client) {
    error ? console.log(error) : (app.locals.db = client.db("HRM"));
  }
);


app.listen(process.env.PORT || 3000);


// PRUEBA RUTA POST SIN TANTO CONTROL DE ERRORES

/* app.post("/crear", function (req, res) {
  db.collection("personal").insertOne(
    {
      nombre: req.body.nombre,
      apellido: req.body.apellido,
      puesto: req.body.puesto,
      departamento: req.body.departamento,
      delegacion: req.body.delegacion,
      fechaInicio: req.body.fechaInicio,
      username: req.body.username,
      password: req.body.password,
    },
    function (error, datos) {
      error
        ? res.send({ error: true, contenido: error })
        : res.send({
            error: false,
            mensaje: `Se ha insertado ${datos.insertedCount} registro correctamente`,
            contenido: datos,
          });
    }
  );
}); */


/* TESTEADO SIN USAR ROUTER 

app.get("/", function (req, res) {
  db.collection("personal")
    .find()
    .toArray(function (error, datos) {
      error
        ? res.send({ error: true, respuesta: error })
        : res.send({ error: false, respuesta: datos });
    });
});

app.post("/crear", function (req, res) {
  db.collection("personal")
    .find({ username: req.body.username })
    .toArray(function (error, data) {
      if (error) {
        res.send({ error: true, contenido: error });
      } else {
        if (data.length === 1) {
          res.send({
            error: false,
            mensaje: "El usuario ya existe en la base de datos",
          });
        } else {
          db.collection("personal").insertOne(
            {
              nombre: req.body.nombre,
              apellido: req.body.apellido,
              puesto: req.body.puesto,
              departamento: req.body.departamento,
              delegacion: req.body.delegacion,
              fechaInicio: req.body.fechaInicio,
              username: req.body.username,
              password: req.body.password,
            },
            function (error, datos) {
              error
                ? res.send({
                    error: true,
                    contenido: error,
                    mensaje: "Error: No se ha podido crear el nuevo usuario",
                  })
                : res.send({
                    error: false,
                    contenido: datos,
                    mensaje: `Se ha registrado ${datos.insertedCount} usuario correctamente`,
                  });
            }
          );
        }
      }
    });
});

app.put("/editar", function (req, res) {
  db.collection("personal").updateOne(
    { username: req.body.username },
    {
      $set: {
        nombre: req.body.nombre,
        apellido: req.body.apellido,
        puesto: req.body.puesto,
        departamento: req.body.departamento,
        delegacion: req.body.delegacion,
        fechaInicio: req.body.fechaInicio,
        password: req.body.password,
      },
    },
    function (error, datos) {
      error
        ? res.send({ error: true, contenido: error })
        : res.send({
            error: false,
            mensaje: `Se ha modificado ${datos.modifiedCount} registro correctamente`,
            contenido: datos,
          });
    }
  );
});

app.delete("/borrar", function (req, res) {
  db.collection("personal").deleteOne(
    {
      username: req.body.username,
    },
    function (error, datos) {
      error
        ? res.send({ error: true, contenido: error })
        : res.send({
            error: false,
            mensaje: `Se ha eliminado ${datos.deletedCount} registro correctamente`,
            contenido: datos,
          });
    }
  );
}); */