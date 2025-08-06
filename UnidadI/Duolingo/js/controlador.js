var categorias = [];
var usuarios = [];
var preguntaActual = 0;
var categoriaSeleccionada = null;
var usuarioActual = null; // Variable global para rastrear el usuario actual
var resultadosUsuarioActual = []; // Variable para almacenar los resultados del usuario actual
var respuestasCorrectas = 0;
var respuestasIncorrectas = 0;
var preguntaActualContestada = false;


// fetch("http://localhost:3000/categorias", requestOptions)
//   .then((response) => {
//     const resultado = response.json().then((texto) => {
//       console.log("Resultado de la petición: ", texto);
//     });
//   });


const cargarCategorias = async () => {
  const requestOptions = {
    method: "GET"
  };
  const respuestaCateogoriasServidor = await fetch("http://localhost:3000/categorias", requestOptions)
  categorias = await respuestaCateogoriasServidor.json();
  console.log("Categorias del servidor: ", categorias);
  renderizarCategorias();
};

const cargarUsuarios = async () => {
  const requestOptions = {
    method: "GET"
  };
  const respuestaUsuariosServidor = await fetch("http://localhost:3000/usuarios", requestOptions)
  usuarios = await respuestaUsuariosServidor.json();
  console.log("Usuarios del servidor: ", usuarios);
  renderizarUsuarios();
};

const cargarResultadosUsuario = async (idUsuario) => {
  const requestOptions = {
    method: "GET"
  };
  const respuestaResultadosServidor = await fetch(`http://localhost:3000/usuarios/${idUsuario}/resultados`, requestOptions);
  resultadosUsuarioActual = await respuestaResultadosServidor.json();
  console.log("Resultados del usuario: ", resultadosUsuarioActual);

  return resultadosUsuarioActual;
};

const actualizarResultadosUsuario = async (idUsuario, resultados) => {
  const requestOptions = {
    method: "PUT",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify(resultados)
  };

  const respuestaActualizacion = await fetch(`http://localhost:3000/usuarios/${idUsuario}/resultados/${resultados.category}`, requestOptions);
  if (respuestaActualizacion.ok) {
    const resultadoActualizado = await respuestaActualizacion.json();
    const indiceCategoria = resultadosUsuarioActual.findIndex(r => r.category === resultados.category);

    if (indiceCategoria !== -1) {
      // Actualiza el resultado existente
      resultadosUsuarioActual[indiceCategoria].correctas = resultados.correctas;
      resultadosUsuarioActual[indiceCategoria].incorrectas = resultados.incorrectas;
      resultadosUsuarioActual[indiceCategoria].aprobada = resultados.aprobada;
    } else {
      // Agrega un nuevo resultado
      resultadosUsuarioActual.push(resultadoActualizado);
    }

    console.log("Resultados actualizados correctamente", resultadoActualizado);
  } else {
    console.error("Error al actualizar los resultados del usuario");
  }
};  

cargarCategorias();
cargarUsuarios();

// Función para actualizar las vidas en la interfaz
const actualizarVidas = async () => {
  if (usuarioActual) {
    const requestOptions = {
      method: "PUT",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({ vidas: usuarioActual.vidas })
    };
    const resultado = await fetch(`http://localhost:3000/usuarios/${usuarioActual.id}`, requestOptions);
    if (resultado.ok) {
      document.querySelector("#vidas span").textContent = usuarioActual.vidas;
    }
  }
}

const actualizarCoronas = async () => {
  if (usuarioActual) {
    const requestOptions = {
      method: "PUT",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({ coronas: usuarioActual.coronas })
    };
    const resultado = await fetch(`http://localhost:3000/usuarios/${usuarioActual.id}`, requestOptions);
    if (resultado.ok) {
      document.querySelector("#coronas span").textContent = usuarioActual.coronas;
    }
  }
}

const renderizarUsuarios = () => {
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
}


const renderizarCategorias = () => {
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
const seleccionarUsuario = async (id, nombre, urlImagen) => {
  // console.log("Se seleccionó el usuario con ID: " + id);
  // console.log("Se seleccionó el usuario con Nombre: " + nombre);
  // console.log("Se seleccionó el usuario con urlImagen: " + urlImagen);
  await cargarResultadosUsuario(id); //asincrona

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

  resultadosUsuarioActual.forEach(r => {
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

const renderizarPregunta = async (indicePregunta) => {
  preguntaActualContestada = false; // Reinicia el estado de la pregunta actual
  document.getElementById("contador-pregunta").innerHTML = `${indicePregunta + 1}/${categoriaSeleccionada.preguntas.length}`;
  if (indicePregunta >= categoriaSeleccionada.preguntas.length) {
    //Significa que ya no hay más preguntas y que se debe actualizar el resultado.
    let categoriaAprobada = false;
    if (respuestasCorrectas == categoriaSeleccionada.preguntas.length && respuestasIncorrectas == 0) {
      alert("¡Felicidades! Has respondido todas las preguntas correctamente.");
      categoriaAprobada = true;
      usuarioActual.coronas++;
      actualizarCoronas();
    }

    await actualizarResultadosUsuario(usuarioActual.id, {
      category: categoriaSeleccionada.id,
      correctas: respuestasCorrectas,
      incorrectas: respuestasIncorrectas,
      aprobada: categoriaAprobada
    });

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
