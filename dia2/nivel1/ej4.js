let prompt = require('prompt-sync')();
function saludar(nombre) {
  console.log(`Hola ${nombre}`);
}

function procesarEntradaUsuario() {
  const nombre = prompt("dime tu nombre");
  saludar(nombre);
}


procesarEntradaUsuario();