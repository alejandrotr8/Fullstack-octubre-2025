let prompt = require('prompt-sync')();
function mostrarFibonacci() {
  const cantidad = parseInt(prompt("¿Cuántos números de Fibonacci quieres mostrar?"));

  let a = 0, b = 1;
  console.log("Serie de Fibonacci:");

  for (let i = 0; i < cantidad; i++) {
    console.log(a);
    const siguiente = a + b;
    a = b;
    b = siguiente;
  }
}
mostrarFibonacci();