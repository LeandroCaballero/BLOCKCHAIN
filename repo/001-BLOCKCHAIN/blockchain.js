//var demo = "Hola Paradigma3";
//console.log(demo);

const crypto = require('crypto');
var secret = 'ultrasecreto';
var hash = crypto.createHmac('sha256', secret)
    .update('paradigmas iii')
    .digest('base64');

console.log(hash);