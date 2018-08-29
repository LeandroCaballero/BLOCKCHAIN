var express = require('express');
var router = express.Router();

router.get("/registrar", function(req, res, next) {
    let query = url.parse(req.url, true).query;
    res.render("Formulario/respuesta", {
      title: "Respuesta",
      nombre: query.nombre
    });
  });
  
  router.post("/registrar", function(req, res, next) {
    let nombre = req.body.nombre;
    let email = req.body.email;
    let edad = req.body.edad;
    //Negocio de la app
    res.render("Formulario/respuesta", {
      title: "Respuesta",
      nombre: nombre
    });
  });

module.exports = router;