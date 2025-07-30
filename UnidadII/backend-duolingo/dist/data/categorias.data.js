"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.categorias = void 0;
exports.categorias = [
    {
        id: 1,
        nombre: "Family",
        icono: "fa-solid fa-people-roof",
        color: "#000000",
        preguntas: [
            {
                id: 1,
                palabra: "Hermana",
                respuestas: [
                    {
                        palabra: "Brother",
                        correcta: false,
                    },
                    {
                        palabra: "Mother",
                        correcta: false,
                    },
                    {
                        palabra: "Water",
                        correcta: false,
                    },
                    {
                        palabra: "Sister",
                        correcta: true,
                    },
                ],
            },
            {
                id: 2,
                palabra: "Familia",
                respuestas: [
                    {
                        palabra: "Family",
                        correcta: true,
                    },
                    {
                        palabra: "Mother",
                        correcta: false,
                    },
                    {
                        palabra: "Water",
                        correcta: false,
                    },
                    {
                        palabra: "Java",
                        correcta: false,
                    },
                ],
            },
            {
                id: 3,
                palabra: "Padre",
                respuestas: [
                    {
                        palabra: "Father",
                        correcta: true,
                    },
                    {
                        palabra: "Mother",
                        correcta: false,
                    },
                    {
                        palabra: "Water",
                        correcta: false,
                    },
                    {
                        palabra: "Sister",
                        correcta: false,
                    },
                ],
            },
            {
                id: 4,
                palabra: "Madre",
                respuestas: [
                    {
                        palabra: "Brother",
                        correcta: false,
                    },
                    {
                        palabra: "Mother",
                        correcta: true,
                    },
                    {
                        palabra: "Water",
                        correcta: false,
                    },
                    {
                        palabra: "Sister",
                        correcta: false,
                    },
                ],
            },
            {
                id: 5,
                palabra: "Hijo",
                respuestas: [
                    {
                        palabra: "Son",
                        correcta: true,
                    },
                    {
                        palabra: "Mother",
                        correcta: false,
                    },
                    {
                        palabra: "Water",
                        correcta: false,
                    },
                    {
                        palabra: "Sister",
                        correcta: false,
                    },
                ],
            },
        ],
    },
    {
        id: 2,
        nombre: "Animals",
        icono: "fa-solid fa-dog",
        color: "#F2C27B",
        preguntas: [
            {
                id: 1,
                palabra: "Perro",
                respuestas: [
                    {
                        palabra: "Dog",
                        correcta: true,
                    },
                    {
                        palabra: "Cat",
                        correcta: false,
                    },
                    {
                        palabra: "Fish",
                        correcta: false,
                    },
                    {
                        palabra: "Bird",
                        correcta: false,
                    },
                ],
            },
            {
                id: 2,
                palabra: "Gato",
                respuestas: [
                    {
                        palabra: "Dog",
                        correcta: false,
                    },
                    {
                        palabra: "Cat",
                        correcta: true,
                    },
                    {
                        palabra: "Fish",
                        correcta: false,
                    },
                    {
                        palabra: "Bird",
                        correcta: false,
                    },
                ],
            },
        ],
    },
    {
        id: 3,
        nombre: "Food",
        icono: "fa-solid fa-utensils",
        color: "#7BF2A0",
        preguntas: [
            {
                id: 1,
                palabra: "Comida",
                respuestas: [
                    {
                        palabra: "Food",
                        correcta: true,
                    },
                    {
                        palabra: "Chicken",
                        correcta: false,
                    },
                    {
                        palabra: "Tomato",
                        correcta: false,
                    },
                    {
                        palabra: "Pie",
                        correcta: false,
                    },
                ],
            },
            {
                id: 2,
                palabra: "Agua",
                respuestas: [
                    {
                        palabra: "Petroleum",
                        correcta: false,
                    },
                    {
                        palabra: "Drink",
                        correcta: true,
                    },
                    {
                        palabra: "Water",
                        correcta: false,
                    },
                    {
                        palabra: "Coffee",
                        correcta: false,
                    },
                ],
            },
        ],
    },
    {
        id: 4,
        nombre: "Colors",
        icono: "fa-solid fa-palette",
        color: "#7B8FF2",
        preguntas: [
            {
                id: 1,
                palabra: "Rojo",
                respuestas: [
                    {
                        palabra: "Red",
                        correcta: true,
                    },
                    {
                        palabra: "Blue",
                        correcta: false,
                    },
                    {
                        palabra: "Green",
                        correcta: false,
                    },
                    {
                        palabra: "Yellow",
                        correcta: false,
                    },
                ],
            },
            {
                id: 2,
                palabra: "Azul",
                respuestas: [
                    {
                        palabra: "Red",
                        correcta: false,
                    },
                    {
                        palabra: "Blue",
                        correcta: true,
                    },
                    {
                        palabra: "Green",
                        correcta: false,
                    },
                    {
                        palabra: "Yellow",
                        correcta: false,
                    },
                ],
            },
        ],
    },
    {
        id: 5,
        nombre: "Numbers",
        icono: "fa-solid fa-calculator",
        color: "#F27BF2",
        preguntas: [
            {
                id: 1,
                palabra: "Uno",
                respuestas: [
                    {
                        palabra: "One",
                        correcta: true,
                    },
                    {
                        palabra: "Two",
                        correcta: false,
                    },
                    {
                        palabra: "Three",
                        correcta: false,
                    },
                    {
                        palabra: "Four",
                        correcta: false,
                    },
                ],
            },
            {
                id: 2,
                palabra: "Dos",
                respuestas: [
                    {
                        palabra: "One",
                        correcta: false,
                    },
                    {
                        palabra: "Two",
                        correcta: true,
                    },
                    {
                        palabra: "Three",
                        correcta: false,
                    },
                    {
                        palabra: "Four",
                        correcta: false,
                    },
                ],
            },
        ],
    },
    {
        id: 6,
        nombre: "Days",
        icono: "fa-solid fa-calendar-day",
        color: "#F2A27B",
        preguntas: [
            {
                id: 1,
                palabra: "Lunes",
                respuestas: [
                    {
                        palabra: "Monday",
                        correcta: true,
                    },
                    {
                        palabra: "Tuesday",
                        correcta: false,
                    },
                    {
                        palabra: "Wednesday",
                        correcta: false,
                    },
                    {
                        palabra: "Thursday",
                        correcta: false,
                    },
                ],
            },
            {
                id: 2,
                palabra: "Martes",
                respuestas: [
                    {
                        palabra: "Monday",
                        correcta: false,
                    },
                    {
                        palabra: "Tuesday",
                        correcta: true,
                    },
                    {
                        palabra: "Wednesday",
                        correcta: false,
                    },
                    {
                        palabra: "Thursday",
                        correcta: false,
                    },
                ],
            },
        ],
    },
];
