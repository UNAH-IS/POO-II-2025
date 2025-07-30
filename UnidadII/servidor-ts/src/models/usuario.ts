export interface Usuario {
    id: number;
    nombre: string;
    email: string;
    password: string;
    carrera?: string; // Opcional
}

export let usuarios: Usuario[] = [];

usuarios.push({
    id: 1,
    nombre: 'Juan',
    email: 'jperez',
    password: '123456',
    carrera: 'Ingeniería en Sistemas'
}); // agregar un usuario en la posicion 0

usuarios.push({
    id: 2,
    nombre: 'Ana',
    email: 'agomez',
    password: 'abcdef',
}); // agregar un usuario en la posicion 1

usuarios.push({
    id: 3,
    nombre: 'Luis',
    email: 'lrodriguez',
    password: 'qwerty',
    carrera: 'Ingeniería Civil'
}); // agregar un usuario en la posicion 2