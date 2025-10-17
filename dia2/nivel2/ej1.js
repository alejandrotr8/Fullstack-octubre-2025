let prompt = require('prompt-sync')();

function contiene(text){
  return text.toLowerCase().includes(`s`);
}

let text = prompt ("ingresa tu palabra: ");
console.log(`el texto ingresado ${contiene(text) ? 'contiene' : 'no contiene'} la letra 's'`);