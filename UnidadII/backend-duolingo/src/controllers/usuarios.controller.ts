import { Request, Response } from "express";
import { usuarios } from "../data/usuarios.data";
import { Resultado } from "../models/usuarios";

export const obtenerUsuarios = (req: Request, res: Response) => {
    //quitar el atributo resultados de cada usuario antes de enviarlo
    const usuariosSinResultados = usuarios.map(usuario => {
        const { resultados, ...usuarioSinResultados } = usuario;
        return usuarioSinResultados;
    });

    res.json(usuariosSinResultados);
}

//Obtener los resultados de un usuario específico
export const obtenerResultadosUsuario = (req: Request, res: Response) => {
    const id = parseInt(req.params.id);
    const usuario = usuarios.find(u => u.id === id);

    if (!usuario) {
        return res.status(404).json({ error: "Usuario no encontrado" });
    }

    res.json(usuario.resultados);
}   

//Obtener un usuario específico sin resultados
export const obtenerUsuarioSinResultados = (req: Request, res: Response) => {
    const id = parseInt(req.params.id);
    const usuario = usuarios.find(u => u.id === id);

    if (!usuario) {
        return res.status(404).json({ error: "Usuario no encontrado" });
    }

    const { resultados, ...usuarioSinResultados } = usuario;
    res.json(usuarioSinResultados);
}

// Actualizar un usuario (ejemplo, coronas, vidas)
export const actualizarUsuario = (req: Request, res: Response) => {
    const id = parseInt(req.params.id);
    const usuario = usuarios.find(u => u.id === id);

    if (!usuario) {
        return res.status(404).json({ error: "Usuario no encontrado" });
    }

    // Actualizar los campos que se envían en el cuerpo de la solicitud
    const { nombre, imagenPerfil, coronas, vidas } = req.body;

    //La linea anterior es un ejemplo de destructuracion, pero puede hacerlo de esta manera:
    // const nombre = req.body.nombre;
    // const imagenPerfil = req.body.imagenPerfil;
    // const coronas = req.body.coronas;
    // const vidas = req.body.vidas;
    
    if (nombre !== undefined) usuario.nombre = nombre;
    if (imagenPerfil !== undefined) usuario.imagenPerfil = imagenPerfil;
    if (coronas !== undefined) usuario.coronas = coronas;
    if (vidas !== undefined) usuario.vidas = vidas;

    res.json(usuario);
}

//Actulizar un resultado de una categoría específica
export const actualizarResultadoCategoria = (req: Request, res: Response) => {
    const idUsuario = parseInt(req.params.id);
    const idCategoria = parseInt(req.params.idCategoria);
    const usuario = usuarios.find(u => u.id === idUsuario);

    if (!usuario) {
        return res.status(404).json({ error: "Usuario no encontrado" });
    }

    const resultado = usuario.resultados.find(r => r.category === idCategoria);

    if (!resultado) {
        const nuevoResultado: Resultado = {
            category: idCategoria,
            correctas: req.body.correctas || 0,
            incorrectas: req.body.incorrectas || 0,
            aprobada: req.body.aprobada || false
        };
        usuario.resultados.push(nuevoResultado);
        return res.status(201).json(nuevoResultado);
    }

    // Actualizar los campos que se envían en el cuerpo de la solicitud
    const { correctas, incorrectas, aprobada } = req.body;

    if (correctas !== undefined) resultado.correctas = correctas;
    if (incorrectas !== undefined) resultado.incorrectas = incorrectas;
    if (aprobada !== undefined) resultado.aprobada = aprobada;

    res.json(resultado);
}