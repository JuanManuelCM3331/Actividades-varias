const fs = require('fs');
const path = require('path');

const dataDir = path.join(__dirname, 'data');
const outPath = path.join(dataDir, 'nuevoArchivo.txt');

// crear carpeta y archivo
fs.mkdirSync(dataDir, { recursive: true });
fs.writeFileSync(outPath, 'Hola mundo', 'utf8');
console.log('Archivo creado:', outPath);

// leer calculadora si existe (ruta relativa)
const calcPath = path.join(__dirname, '..', '..', 'Git_GitHub', 'features', 'calculadora.js');
if (fs.existsSync(calcPath)) {
  console.log('calculadora.js encontrado. Contenido:\n', fs.readFileSync(calcPath, 'utf8'));
} else {
  console.log('calculadora.js no encontrado en:', calcPath);
}