//javascript ---> Debilmente tipado, interpretado, orientado a objetos, basado en prototipos, multiparadigma.
//Typescript ---> Fuertemente tipado, compilado (transpilación), orientado a objetos, basado en clases, multiparadigma.

// Compilar el archivo hola-mundo.ts a hola-mundo.js

let mensaje = "Hola, mundo!";
let nombre: string = "Juan";

//Tipos de datos primitivos en typescript
let edad: number = 30;
let esEstudiante: boolean = true;
let fechaNacimiento: Date = new Date("1993-05-15");
let apellido: string = "Perez";
let saludo: string = `Hola, mi nombre es ${nombre} ${apellido}, tengo ${edad} años y es estudiante: ${esEstudiante}.`;

let numeros: number[] = [1, 2, 3, 4, 5];
let numerosPrimos: Array<number> = [2, 3, 5, 7, 11];

let x = 20; // el tipo de dato se infiere como number
let y: any; // el tipo de dato se infiere como any

let parametro: string | number | null | undefined = "Hola"; // el tipo de dato puede ser string, number, null o undefined


const saludar = (nombre: string): string => {
    return `Hola, ${nombre}!`;
}

console.log(saludo);
console.log(saludar(nombre));


