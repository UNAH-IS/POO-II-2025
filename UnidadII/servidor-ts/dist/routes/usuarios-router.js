"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const usuarios_controller_1 = require("../controllers/usuarios-controller");
const router = (0, express_1.Router)();
router.get('/', usuarios_controller_1.obtenerUsuarios); // Obtener todos los usuarios
router.get('/:id', usuarios_controller_1.obtenerUsuarioPorId); // Obtener un usuario por ID
router.post('/', usuarios_controller_1.crearUsuario); // Crear un nuevo usuario
router.put('/:id', usuarios_controller_1.actualizarUsuario); // Actualizar un usuario por ID (opcional)
router.delete('/:id', usuarios_controller_1.eliminarUsuario);
console.log('Rutas de usuarios registradas');
exports.default = router;
