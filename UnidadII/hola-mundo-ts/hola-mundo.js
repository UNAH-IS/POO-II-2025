//javascript ---> Debilmente tipado, interpretado, orientado a objetos, basado en prototipos, multiparadigma.
//Typescript ---> Fuertemente tipado, compilado (transpilación), orientado a objetos, basado en clases, multiparadigma.
// Compilar el archivo hola-mundo.ts a hola-mundo.js
var mensaje = "Hola, mundo!";
var nombre = "Juan";
//Tipos de datos primitivos en typescript
var edad = 30;
var esEstudiante = true;
var fechaNacimiento = new Date("1993-05-15");
var apellido = "Perez";
var saludo = "Hola, mi nombre es ".concat(nombre, " ").concat(apellido, ", tengo ").concat(edad, " a\u00F1os y es estudiante: ").concat(esEstudiante, ".");
var numeros = [1, 2, 3, 4, 5];
var numerosPrimos = [2, 3, 5, 7, 11];
var x = 20; // el tipo de dato se infiere como number
var y; // el tipo de dato se infiere como any
var parametro = "Hola"; // el tipo de dato puede ser string, number, null o undefined
var saludar = function (nombre) {
    return "Hola, ".concat(nombre, "!");
};
console.log(saludo);
console.log(saludar(nombre));
