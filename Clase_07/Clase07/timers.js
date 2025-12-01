setImmediate(() => {
    console.log('Esto se ejecuta inmediatamente despues de que el ciclo de eventos este libre');

    console.log('Otra tarea inmediata ejecutada');

let contador =0;
const intervalo = setInterval(() => {
    console.log('repeticion numero: ${++contador}');
}, 1000);});




