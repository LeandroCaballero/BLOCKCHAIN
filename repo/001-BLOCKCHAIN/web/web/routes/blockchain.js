var express = require('express');
var router = express.Router();
let BlockChain = require("../Block/blockChain")
let Transaccion = require("../Block/transaccion")
let tran = new Transaccion("Leandro", "Toti", "Redes");
let tran2 = new Transaccion("Leandro", "Jose", "Paradigmas III")

/* GET users listing. */
router.get('/', function (req, res, next) {
  let tutoria = new BlockChain();
  tutoria.addBlock(tran)
  tutoria.addBlock(tran2)
  res.json(tutoria);

});

module.exports = router;