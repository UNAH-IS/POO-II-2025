 //Comentarios de una linea
/*
* Comentarios de varias lineas
*/
var nombre = "PEdro";
let apellido = "Perez";
const PI = 3.14159;
var edad = 30;
var esEstudiante = true;
const calificaciones = [10, 9, 8, 7];

calificaciones.push(6);
calificaciones.push(5);

function saludar(nombre) {
    console.log("Hola " + nombre);
}

const sumar = function(a, b) {
    return a + b;
}

//Sintaxis tipo arrow function
const restar = (a, b) => a - b;

function ejecutarFuncion(f, arg1, arg2) {
    return f(arg1, arg2);
}


var x = ejecutarFuncion(restar, 10, 5);
var y = ejecutarFuncion(sumar, 5, 10);


console.log("sumar: " + sumar);

console.log("El resultado de la resta es: " + x);
console.log("El resultado de la suma es: " + y);
