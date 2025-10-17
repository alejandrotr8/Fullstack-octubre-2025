let prompt = require('prompt-sync')();

function calcularPotencia() {
  const base = parseFloat(prompt("Introduce la base:"));
  const exponente = parseFloat(prompt("Introduce el exponente:"));


  const resultado = Math.pow(base, exponente);
  console.log(`${base} elevado a ${exponente} es ${resultado}`);
  return resultado;
}


calcularPotencia();