const express = require("express");
const router = express.Router();
const bcrypt = require("bcrypt");
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


router.put("/login", function (req, res) {
  req.app.locals.db.collection("personal").find({ username: req.body.username })
    .toArray(function (error, datos) {
      if (error) {
        res.send({ sesion: false, mensaje: error });
      } else {
        if (datos.length > 0) {
          if (bcrypt.compareSync(req.body.password, datos[0].password)) {
            res.send({ sesion: true, mensaje: "Logueado correctamente", respuesta: datos });
          } else {
            res.send({ sesion: false, mensaje: "Contraseña incorrecta"});
          }
        } else {
          res.send({ sesion: false, mensaje: "El usuario no existe" });
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
