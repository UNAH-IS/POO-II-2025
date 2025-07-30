"use strict";
var __rest = (this && this.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.actualizarResultadoCategoria = exports.actualizarUsuario = exports.obtenerUsuarioSinResultados = exports.obtenerResultadosUsuario = exports.obtenerUsuarios = void 0;
const usuarios_data_1 = require("../data/usuarios.data");
const obtenerUsuarios = (req, res) => {
    //quitar el atributo resultados de cada usuario antes de enviarlo
    const usuariosSinResultados = usuarios_data_1.usuarios.map(usuario => {
        const { resultados } = usuario, usuarioSinResultados = __rest(usuario, ["resultados"]);
        return usuarioSinResultados;
    });
    res.json(usuariosSinResultados);
};
exports.obtenerUsuarios = obtenerUsuarios;
//Obtener los resultados de un usuario específico
const obtenerResultadosUsuario = (req, res) => {
    const id = parseInt(req.params.id);
    const usuario = usuarios_data_1.usuarios.find(u => u.id === id);
    if (!usuario) {
        return res.status(404).json({ error: "Usuario no encontrado" });
    }
    res.json(usuario.resultados);
};
exports.obtenerResultadosUsuario = obtenerResultadosUsuario;
//Obtener un usuario específico sin resultados
const obtenerUsuarioSinResultados = (req, res) => {
    const id = parseInt(req.params.id);
    const usuario = usuarios_data_1.usuarios.find(u => u.id === id);
    if (!usuario) {
        return res.status(404).json({ error: "Usuario no encontrado" });
    }
    const { resultados } = usuario, usuarioSinResultados = __rest(usuario, ["resultados"]);
    res.json(usuarioSinResultados);
};
exports.obtenerUsuarioSinResultados = obtenerUsuarioSinResultados;
// Actualizar un usuario (ejemplo, coronas, vidas)
const actualizarUsuario = (req, res) => {
    const id = parseInt(req.params.id);
    const usuario = usuarios_data_1.usuarios.find(u => u.id === id);
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
    if (nombre !== undefined)
        usuario.nombre = nombre;
    if (imagenPerfil !== undefined)
        usuario.imagenPerfil = imagenPerfil;
    if (coronas !== undefined)
        usuario.coronas = coronas;
    if (vidas !== undefined)
        usuario.vidas = vidas;
    res.json(usuario);
};
exports.actualizarUsuario = actualizarUsuario;
//Actulizar un resultado de una categoría específica
const actualizarResultadoCategoria = (req, res) => {
    const idUsuario = parseInt(req.params.id);
    const idCategoria = parseInt(req.params.idCategoria);
    const usuario = usuarios_data_1.usuarios.find(u => u.id === idUsuario);
    if (!usuario) {
        return res.status(404).json({ error: "Usuario no encontrado" });
    }
    const resultado = usuario.resultados.find(r => r.category === idCategoria);
    if (!resultado) {
        const nuevoResultado = {
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
    if (correctas !== undefined)
        resultado.correctas = correctas;
    if (incorrectas !== undefined)
        resultado.incorrectas = incorrectas;
    if (aprobada !== undefined)
        resultado.aprobada = aprobada;
    res.json(resultado);
};
exports.actualizarResultadoCategoria = actualizarResultadoCategoria;
