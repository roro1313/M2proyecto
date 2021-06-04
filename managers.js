const express = require("express");
const router = express.Router();
const cifrar = require("./cifrar")

router.get("/", function (req, res) {
  req.app.locals.db
    .collection("personal")
    .find()
    .toArray(function (error, datos) {
      error
        ? res.send({ error: true, respuesta: error })
        : res.send({ error: false, respuesta: datos });
    });
});

router.post("/username", function (req, res) {
    req.app.locals.db
      .collection("personal")
      .find({username: req.body.username})
      .toArray(function (error, datos) {
        error
          ? res.send({ error: true, respuesta: error })
          : res.send({ error: false, respuesta: datos });
      });
  });

router.post("/departamento", function (req, res) {
    req.app.locals.db
      .collection("personal")
      .find({departamento: req.body.departamento})
      .toArray(function (error, datos) {
        error
          ? res.send({ error: true, respuesta: error })
          : res.send({ error: false, respuesta: datos });
      });
  });

  router.post("/delegacion", function (req, res) {
    req.app.locals.db
      .collection("personal")
      .find({delegacion: req.body.delegacion})
      .toArray(function (error, datos) {
        error
          ? res.send({ error: true, respuesta: error })
          : res.send({ error: false, respuesta: datos });
      });
  });

router.post("/crear", cifrar, function (req, res) {
  req.app.locals.db
    .collection("personal")
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
            req.app.locals.db.collection("personal").insertOne(
            {
                nombre: req.body.nombre,
                apellido: req.body.apellido,
                delegacion: req.body.delegacion,
                direccion: req.body.direccion,
                puesto: req.body.puesto,
                email: req.body.email,
                departamento: req.body.departamento,
                foto: req.body.foto,
                username: req.body.username,
                password: req.body.password,
            },
            function (error, datos) {
              error
                ? res.send({
                    error: true,
                    respuesta: error,
                    mensaje: "Error: No se ha podido crear el nuevo usuario",
                  })
                : res.send({
                    error: false,
                    respuesta: datos,
                    mensaje: `Se ha registrado ${datos.insertedCount} usuario correctamente`,
                  });
            }
          );
        }
      }
    });
});

router.put("/editar", function (req, res) {
  req.app.locals.db.collection("personal").updateOne(
    { username: req.body.username },
    {
      $set: {
        nombre: req.body.nombre,
        apellido: req.body.apellido,
        delegacion: req.body.delegacion,
        direccion: req.body.direccion,
        puesto: req.body.puesto,
        email: req.body.email,
        departamento: req.body.departamento,
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

router.delete("/borrar", function (req, res) {
    req.app.locals.db.collection("personal").deleteOne(
      { username: req.body.username },
      {
        $set: {
            nombre: req.body.nombre,
            apellido: req.body.apellido,
            delegacion: req.body.delegacion,
            direccion: req.body.direccion,
            puesto: req.body.puesto,
            email: req.body.email,
            departamento: req.body.departamento,
            password: req.body.password,
        },
      },
      function (error, datos) {
        error
          ? res.send({ error: true, contenido: error, mensaje: `Error, ${datos.deletedCount} registros eliminados` })
          : res.send({
              error: false,
              mensaje: `Se ha eliminado ${datos.deletedCount} registro`,
              contenido: datos,
            });
      }
    );
  });

module.exports = router;