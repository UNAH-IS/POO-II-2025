var usuarios = [
  {
    id: 1,
    nombre: "Goku",
    imagenPerfil: "profile-pics/goku.jpg",
    coronas: 2,
    vidas: 5,
    resultados: [
      {
        category: 1,
        correctas: 4,
        incorrectas: 1,
        aprobada: false,
      },
      {
        category: 2,
        correctas: 5,
        incorrectas: 0,
        aprobada: true,
      },
      {
        category: 3,
        correctas: 5,
        incorrectas: 0,
        aprobada: true,
      },
    ],
  },
  {
    id: 2,
    nombre: "Vegeta",
    imagenPerfil: "profile-pics/vegeta.jpg",
    coronas: 3,
    vidas: 4,
    resultados: [
      {
        category: 1,
        correctas: 5,
        incorrectas: 0,
        aprobada: true,
      },
      {
        category: 2,
        correctas: 3,
        incorrectas: 2,
        aprobada: false,
      },
      {
        category: 3,
        correctas: 4,
        incorrectas: 1,
        aprobada: false,
      },
    ],
  },
  {
    id: 3,
    nombre: "Bulma",
    imagenPerfil: "profile-pics/bulma.jpg",
    coronas: 1,
    vidas: 6,
    resultados: [
      {
        category: 1,
        correctas: 2,
        incorrectas: 3,
        aprobada: false,
      },
      {
        category: 2,
        correctas: 4,
        incorrectas: 1,
        aprobada: true,
      },
      {
        category: 3,
        correctas: 5,
        incorrectas: 0,
        aprobada: true,
      },
    ],
  },
  {
    id: 4,
    nombre: "Piccolo",
    imagenPerfil: "profile-pics/picoro.jpg",
    coronas: 2,
    vidas: 5,
    resultados: [
      {
        category: 1,
        correctas: 3,
        incorrectas: 2,
        aprobada: false,
      },
      {
        category: 2,
        correctas: 5,
        incorrectas: 0,
        aprobada: true,
      },
      {
        category: 3,
        correctas: 4,
        incorrectas: 1,
        aprobada: false,
      },
    ],
  },
  {
    id: 5,
    nombre: "Krillin",
    imagenPerfil: "profile-pics/krilin.jpg",
    coronas: 3,
    vidas: 4,
    resultados: [
      {
        category: 1,
        correctas: 5,
        incorrectas: 0,
        aprobada: true,
      },
      {
        category: 2,
        correctas: 2,
        incorrectas: 3,
        aprobada: false,
      },
      {
        category: 3,
        correctas: 4,
        incorrectas: 1,
        aprobada: false,
      },
    ],
  },
  {
    id: 6,
    nombre: "Trunks",
    imagenPerfil: "profile-pics/trunks.jpg",
    coronas: 1,
    vidas: 6,
    resultados: [
      {
        category: 1,
        correctas: 2,
        incorrectas: 3,
        aprobada: false,
      },
      {
        category: 2,
        correctas: 4,
        incorrectas: 1,
        aprobada: true,
      },
      {
        category: 3,
        correctas: 5,
        incorrectas: 0,
        aprobada: true,
      },
    ],
  },
  {
    id: 7,
    nombre: "Frieza",
    imagenPerfil: "profile-pics/freezer.jpg",
    coronas: 2,
    vidas: 5,
    resultados: [
      {
        category: 1,
        correctas: 3,
        incorrectas: 2,
        aprobada: false,
      },
      {
        category: 2,
        correctas: 5,
        incorrectas: 0,
        aprobada: true,
      },
      {
        category: 3,
        correctas: 4,
        incorrectas: 1,
        aprobada: false,
      },
    ],
  },
  {
    id: 8,
    nombre: "Cell",
    imagenPerfil: "profile-pics/cell.jpg",
    coronas: 3,
    vidas: 4,
    resultados: [
      {
        category: 1,
        correctas: 5,
        incorrectas: 0,
        aprobada: true,
      },
      {
        category: 2,
        correctas: 2,
        incorrectas: 3,
        aprobada: false,
      },
      {
        category: 3,
        correctas: 4,
        incorrectas: 1,
        aprobada: false,
      },
    ],
  },
  {
    id: 9,
    nombre: "Majin Buu",
    imagenPerfil: "profile-pics/patricio.jpg",
    coronas: 1,
    vidas: 6,
    resultados: [
      {
        category: 1,
        correctas: 2,
        incorrectas: 3,
        aprobada: false,
      },
      {
        category: 2,
        correctas: 4,
        incorrectas: 1,
        aprobada: true,
      },
      {
        category: 3,
        correctas: 5,
        incorrectas: 0,
        aprobada: true,
      },
    ],
  },
];

if (!localStorage.getItem("usuarios")) {
  localStorage.setItem("usuarios", JSON.stringify(usuarios));
}

var categorias = [
  {
    id: 1,
    nombre: "Family",
    icono: "fa-solid fa-people-roof",
    color: "#F27B7B",
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

if (!localStorage.getItem("categorias")) {
  localStorage.setItem("categorias", JSON.stringify(categorias));
}

var preguntaActual = 0;
var categoriaSeleccionada = null;
var usuarioActual = null; // Variable global para rastrear el usuario actual
var respuestasCorrectas = 0;
var respuestasIncorrectas = 0;
var preguntaActualContestada = false;

// Función para actualizar las vidas en la interfaz
const actualizarVidas = () => {
  if (usuarioActual) {
    document.querySelector("#vidas span").textContent = usuarioActual.vidas;
  }
}

const actualizarCoronas = () => {
  if (usuarioActual) {
    document.querySelector("#coronas span").textContent = usuarioActual.coronas;
  }
}

console.log(usuarios);
console.log(categorias);

for (let i = 0; i < usuarios.length; i++) {
  const usuario = usuarios[i];
  document.getElementById(
    "galeria-usuarios"
  ).innerHTML += `<div class="usuario" onclick="seleccionarUsuario(${usuario.id}, '${usuario.nombre}', '${usuario.imagenPerfil}')">
            <img src="img/${usuario.imagenPerfil}">
            ${usuario.nombre}
         </div>
        `;
}


for (let i = 0; i < categorias.length; i++) {
    const categoria = categorias[i];
    document.getElementById(
        "lista-categorias"
    ).innerHTML += `
        <div class="contenedor-categoria" onclick="seleccionarCategoria(${categoria.id}); mostrarListaPreguntas();">
            <div id="${categoria.id}" class="categoria" style="background-color: ${categoria.color};">
                <i class="${categoria.icono}"></i>
            </div>
            ${categoria.nombre}
        </div>` ;
}


const mostrarListaUsuarios = () => {
  document.getElementById("usuarios").style.display = "block";
  document.getElementById("categorias").style.display = "none";
  document.getElementById("preguntas").style.display = "none";
}

const mostrarListaCategorias = () => {
  preguntaActual = 0;
  categoriaSeleccionada = null;
  document.getElementById("usuarios").style.display = "none";
  document.getElementById("categorias").style.display = "block";
  document.getElementById("preguntas").style.display = "none";
}

const mostrarListaPreguntas = () => {
  document.getElementById("usuarios").style.display = "none";
  document.getElementById("categorias").style.display = "none";
  document.getElementById("preguntas").style.display = "block";
}
const seleccionarUsuario = (id, nombre, urlImagen) => {
  // console.log("Se seleccionó el usuario con ID: " + id);
  // console.log("Se seleccionó el usuario con Nombre: " + nombre);
  // console.log("Se seleccionó el usuario con urlImagen: " + urlImagen);

  document.getElementById("img-perfil").setAttribute("src", "img/"+urlImagen);
  mostrarListaCategorias();

  const usuarioSeleccionado = usuarios.find(u => u.id == id);
  usuarioActual = usuarioSeleccionado; // Actualiza el usuario actual
  marcarCategoriasAprobadas();
  actualizarVidas(); // Actualiza las vidas en la interfaz
  actualizarCoronas(); // Actualiza las coronas en la interfaz
  console.log("Usuario Seleccionado ", usuarioSeleccionado);
}

marcarCategoriasAprobadas = () => {
  categorias.forEach(c => {
    document.getElementById(c.id).classList.remove("aprobada");
  });

  usuarioActual.resultados.forEach(r => {
    if (r.aprobada) {
      document.getElementById(r.category).classList.add("aprobada");
    }
  });
}


const seleccionarCategoria = (idCategoria) => {
  respuestasCorrectas = 0;
  respuestasIncorrectas = 0;
  categoriaSeleccionada = categorias.find(c => c.id == idCategoria);
  console.log("Categoria Seleccionada ", categoriaSeleccionada);
  renderizarPregunta(preguntaActual);
}

const renderizarPregunta = (indicePregunta) => {
  preguntaActualContestada = false; // Reinicia el estado de la pregunta actual
  document.getElementById("contador-pregunta").innerHTML = `${indicePregunta + 1}/${categoriaSeleccionada.preguntas.length}`;
  if (indicePregunta >= categoriaSeleccionada.preguntas.length) {
    let categoriaAprobada = false;
    if (respuestasCorrectas == categoriaSeleccionada.preguntas.length && respuestasIncorrectas == 0) {
      alert("¡Felicidades! Has respondido todas las preguntas correctamente.");
      categoriaAprobada = true;
      usuarioActual.coronas++;
      actualizarCoronas();
    }

    let existeCategoriaResultado = false;
    usuarioActual.resultados.forEach(r => {
      if (r.category == categoriaSeleccionada.id) {
        r.correctas = respuestasCorrectas;
        r.incorrectas = respuestasIncorrectas;
        r.aprobada = categoriaAprobada;
        existeCategoriaResultado = true;
      }
    });

    if (!existeCategoriaResultado) {
      usuarioActual.resultados.push({
        category: categoriaSeleccionada.id,
        correctas: respuestasCorrectas,
        incorrectas: respuestasIncorrectas,
        aprobada: categoriaAprobada
      });
    }


    marcarCategoriasAprobadas();
    console.log("No hay más preguntas en esta categoría.");
    mostrarListaCategorias();
    return;
  }
  console.log("Renderizar la pregunta: ", indicePregunta);
  preguntaActual = indicePregunta;
  const pregunta = categoriaSeleccionada.preguntas[indicePregunta];
  document.getElementById("titulo-pregunta").innerHTML = pregunta.palabra;
  document.getElementById('lista-respuestas').innerHTML = ''; //Limpia la lista de preguntas
  pregunta.respuestas.forEach(r => {
      document.getElementById('lista-respuestas').innerHTML += `<div class="opcion-respuesta rounded-lg flex justify-center items-center" onclick="calificarRespuesta('${r.palabra}', ${r.correcta}, this)">${r.palabra}</div>`;
  });
}

const calificarRespuesta = (respuestaSeleccionada, correcta, etiquetaSeleccionada) => {
  if (preguntaActualContestada) {
    alert("Ya has respondido esta pregunta. Por favor, selecciona otra pregunta.");
    return;
  }
  document.querySelectorAll('.opcion-respuesta').forEach(e => {
    e.classList.remove("respuesta-correcta");
    e.classList.remove("respuesta-incorrecta");
  });

  if (correcta) {
    etiquetaSeleccionada.classList.add("respuesta-correcta");
    respuestasCorrectas++;
  } else {
    etiquetaSeleccionada.classList.add("respuesta-incorrecta");
    respuestasIncorrectas++;
    // Restar una vida cuando la respuesta es incorrecta
    if (usuarioActual && usuarioActual.vidas > 0) {
      usuarioActual.vidas--;
      actualizarVidas();
    }
  }
  console.log("Calificar respuesta, respuesta seleccionada: ", respuestaSeleccionada);
  console.log("Es respuesta correcta: ", correcta);
  console.log("Correctas: ", respuestasCorrectas);
  console.log("Incorrectas: ", respuestasIncorrectas);
  preguntaActualContestada = true;
}


// seleccionarUsuario(6, 'Trunks', 'profile-pics/trunks.jpg');

//Shift + Ctrl + P ==> Se abre el panel de comandos
// Buscar Format Document
