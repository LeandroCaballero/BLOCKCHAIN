let BlockChain = require("./blockChain")
let Transaccion = require("./transaccion")
let tran = new Transaccion("Leandro", "Toti", "Redes");
let tran2 = new Transaccion("Leandro", "Jose", "Paradigmas III")

let tutoria = new BlockChain();
tutoria.addBlock(tran)
tutoria.addBlock(tran2)

console.log(tutoria.validar());
//console.log(JSON.stringify(tutoria, null, 2));
tutoria.chain[1].data='trampas';
console.log(tutoria.validar());