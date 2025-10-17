let prompt = require('prompt-sync')();
function elevar(number) {
  return Math.pow(number, number);
}
let number = parseInt(prompt("ingrese un numero: "));
console.log(`el numero ${number} elevado a si mismo es ${pow(number)}`);