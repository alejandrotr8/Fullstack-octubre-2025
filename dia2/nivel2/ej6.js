let prompt = require('prompt-sync')();

function calcularAreaCirculo() {
  const radio = parseFloat(prompt("Introduce el radio del círculo:"));

  const area = Math.PI * Math.pow(radio, 2);
  console.log(`El área del círculo es ${area.toFixed(2)}`);
  return area;
}


calcularAreaCirculo();