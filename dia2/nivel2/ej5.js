let prompt = require('prompt-sync')();

function calcularAreaTriangulo() {
  const base = parseFloat(prompt("Introduce la base del triángulo:"));
  const altura = parseFloat(prompt("Introduce la altura del triángulo:"));


  const area = (base * altura) / 2;
  console.log(`El área del triángulo rectángulo es ${area}`);
  return area;
}

calcularAreaTriangulo();