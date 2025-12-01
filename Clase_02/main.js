//imprimir
//document.write("Hola mundo<br>");
//}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}
//tipos de datos
var nombre="juan";
const PI=3.14;
let numero=5;
let booleano=true;
let array=[1,2,3,4,5];
let objeto={nombre:"juan", edad:25, casado:"Falso"};
let a = 10 ;
let b = 5 ;

//}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}
//funciones
const fecha=new Date("2024-06-10");
console.log(nombre);
console.log(array);

//funcion
function suma(a,b){
    return a+b;
}

function resta(a,b){
    return a - b;
}

function multiplicar(a,b){
    return a * b;
}

function dividir(a,b){
    return a / b;
}

//document.write(suma(a, b) + "<br>");
//document.write(resta(a, b) + "<br>");
//document.write(multiplicar(a, b) + "<br>");
//document.write(dividir(a, b) + "<br>");

//}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}
//entrada de datos

//let  entrada = prompt("Ingrese su nombre");
//let edad = parseInt(prompt("Ingrese su edad"));
//let fechaActual = new Date();
//let fechaNacimiento = fechaActual.getFullYear() - edad;
//
//document.write("<hr>");
//20
//document.write("Hola " + entrada + ", naciste en el año " + fechaNacimiento + "<br>");

//}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}]]

// ----------- Hacer un algoritonmo que pida un numero, edad y muestre un mensaje que diga puedes ir a bailar si no ve a dormir ---------------

//let edadUsuario = parseInt(prompt("Ingrese su edad")); 
//let nombreUsuario = prompt("Ingrese su nombre"); 

//if (edadUsuario >= 18) { 
    //document.write(nombreUsuario + ", puedes ir a bailar ;) <br>");
//} else {
  //  document.write(nombreUsuario + ", a mariquiar a otro lado <br>");
//}

//===============================================================================

//let text = '';
//for (let i = 0; i < 10; i++) {
//    text += "los numeros son:" + i + "<br>";
//}
//document.write(text);

//}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}
//}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}

document.addEventListener("DOMContentLoaded", () => {
    let contador = 0;
    const botonR = document.getElementById("botonR");
    const parrafo = document.getElementById("parrafo");
    const botonS = document.getElementById("botonS");

    if (botonR && parrafo) {
        botonR.addEventListener("click", (e) => {
            contador--;
            parrafo.textContent = contador;
        });
    }
    if (botonS && parrafo) {
            botonS.addEventListener("click", (e) => {
            contador++;
            parrafo.textContent = contador;
            });
        }
})

//}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}
//}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}
// El ejercicio 1, (realizar la suma de dos numeros y mostrar el resultado)

document.addEventListener("DOMContentLoaded", () => {
//   const numero1 = parseInt(prompt("Ingrese el primer numero"));
//   const numero2 = parseInt(prompt("Ingrese el segundo numero"));
   const sumaNumeros = document.getElementById("sumaNumeros");
    
    sumaNumeros.textContent = String(numero1 + numero2);

});
//}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}
//}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}
//objetos
const persona = {
    nombre: "juan",
    apellido: "cardona",
    edad: 18,
    telefono: "3117518880",
}
//leer objetos
console.table(persona);

const usuario = persona.apellido;
console.log(usuario)

const producto = {
    nombre: "monitor",
    precio: 200,
    disponibilidad: true,
    informacion:{
        peso: "1kg",
        medida: "50x50 Cm",
    },
}


console.table(producto);