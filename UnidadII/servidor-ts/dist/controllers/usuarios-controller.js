"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.eliminarUsuario = exports.actualizarUsuario = exports.crearUsuario = exports.obtenerUsuarioPorId = exports.obtenerUsuarios = void 0;
const usuario_1 = require("../models/usuario");
// Obtener todos los usuarios
const obtenerUsuarios = (req, res) => {
    res.json(usuario_1.usuarios);
};
exports.obtenerUsuarios = obtenerUsuarios;
// Obtener un usuario por ID
const obtenerUsuarioPorId = (req, res) => {
    const id = parseInt(req.params.id);
    const usuario = usuario_1.usuarios.find(u => u.id === id);
    if (usuario) {
        res.json(usuario);
    }
    else {
        res.status(404).json({ message: 'Usuario no encontrado' });
    }
};
exports.obtenerUsuarioPorId = obtenerUsuarioPorId;
// Crear un nuevo usuario
const crearUsuario = (req, res) => {
    const nuevoUsuario = req.body;
    nuevoUsuario.id = usuario_1.usuarios.length + 1; // Asignar un ID único
    usuario_1.usuarios.push(nuevoUsuario);
    res.status(201).json(nuevoUsuario);
};
exports.crearUsuario = crearUsuario;
// Actualizar un usuario por ID (opcional)
const actualizarUsuario = (req, res) => {
    const id = parseInt(req.params.id); // 1
    const index = usuario_1.usuarios.findIndex(u => u.id === id); // 0
    if (index !== -1) {
        const usuarioActualizado = Object.assign(Object.assign({}, usuario_1.usuarios[index]), req.body);
        usuario_1.usuarios[index] = usuarioActualizado;
        res.json(usuarioActualizado);
    }
    else {
        res.status(404).json({ message: 'Usuario no encontrado' });
    }
};
exports.actualizarUsuario = actualizarUsuario;
// Eliminar un usuario por ID (opcional)
const eliminarUsuario = (req, res) => {
    const id = parseInt(req.params.id);
    const index = usuario_1.usuarios.findIndex(u => u.id === id);
    if (index !== -1) {
        usuario_1.usuarios.splice(index, 1);
        res.status(200).json({ mensaje: "Registro eliminado" }); // No content
    }
    else {
        res.status(404).json({ message: 'Usuario no encontrado' });
    }
};
exports.eliminarUsuario = eliminarUsuario;
