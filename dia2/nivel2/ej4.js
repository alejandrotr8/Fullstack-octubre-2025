let prompt = require('prompt-sync')();
function calcularAreaRectangulo() {
  const alto = parseFloat(prompt("Introduce el alto del rectángulo:"));
  const ancho = parseFloat(prompt("Introduce el ancho del rectángulo:"));



  const area = alto * ancho;
  console.log(`El área del rectángulo es ${area}`);
  return area;
}


calcularAreaRectangulo();