"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const config_1 = __importDefault(require("./config/config"));
const usuarios_router_1 = __importDefault(require("./routes/usuarios-router"));
const express_1 = __importDefault(require("express"));
const app = (0, express_1.default)();
app.use(express_1.default.json()); // poblar el cuerpo de las peticiones con JSON (body)
app.use('/usuarios', usuarios_router_1.default); // usar el router de usuarios
app.listen(config_1.default.port, () => {
    console.log(`Servidor corriendo en http://localhost:${config_1.default.port}`);
});
// http://localhost:3000/usuarios (GET) - Obtener todos los usuarios
// http://localhost:3000/usuarios/1 (GET) - Obtener usuario con ID 1
// http://localhost:3000/usuarios (POST) - Crear un nuevo usuario
