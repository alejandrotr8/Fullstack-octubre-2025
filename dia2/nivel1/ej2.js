let prompt = require('prompt-sync')();
function saludar() {
  const nombre = prompt("dime tu nombre: ");
  console.log(`Hola ${nombre}`);
}


saludar();