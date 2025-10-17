let prompt = require('prompt-sync')();
function parOImpar() {
  const numero = parseInt(prompt("Introduce un número:"));

  if (numero % 2 === 0) {
    console.log(`${numero} es par`);
  } else {
    console.log(`${numero} es impar`);
  }
}


parOImpar();