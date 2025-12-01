const prompt = require('prompt-sync')();

const { suma, resta, multiplicacion, division } = require('./operaciones.js');

console.log("Calculadora");
console.log("1. Sumar");
console.log("2. Restar");
console.log("3. Multiplicar");
console.log("4. Dividir");

const opcion = prompt("Seleccione una operación (1-4): ");

const a = parseFloat(prompt("Ingrese el primer número: "));
const b = parseFloat(prompt("Ingrese el segundo número: "));

if (Number.isNaN(a) || Number.isNaN(b)) {
  console.log("Entrada inválida: ingrese números.");
  process.exit(1);
}

let resultado;
switch (opcion) {
  case '1':
    resultado = suma(a, b);
    break;
  case '2':
    resultado = resta(a, b);
    break;
  case '3':
    resultado = multiplicacion(a, b);
    break;
  case '4':
    resultado = division(a, b);
    break;
  default:
    console.log("Opción no válida");
    process.exit(1);
}

console.log(`El resultado es: ${resultado}`);