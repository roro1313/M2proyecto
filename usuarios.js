const express = require("express");
const router = express.Router();

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

router.post("/crear", function (req, res) {
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

router.put("/editar", function (req, res) {
  req.app.locals.db.collection("personal").updateOne(
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

module.exports = router;
