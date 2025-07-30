"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const usuarios_router_1 = __importDefault(require("./routers/usuarios.router"));
const categorias_router_1 = __importDefault(require("./routers/categorias.router"));
const cors_1 = __importDefault(require("cors"));
const app = (0, express_1.default)();
app.use((0, cors_1.default)()); // Middleware para habilitar CORS, para que permita solicitudes desde otros dominios
app.use(express_1.default.json()); // Middleware para parsear JSON
//localhost:3000/usuarios/:id/resultados
app.use("/usuarios", usuarios_router_1.default);
app.use("/categorias", categorias_router_1.default);
app.listen(3000, () => {
    console.log("Server is running on port 3000");
});
