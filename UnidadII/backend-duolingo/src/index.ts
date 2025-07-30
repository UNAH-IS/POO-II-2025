import express, {Express} from "express";
import usuariosRouter from "./routers/usuarios.router";
import categoriasRouter from "./routers/categorias.router";
import cors from "cors";

const app: Express = express();

app.use(cors()); // Middleware para habilitar CORS, para que permita solicitudes desde otros dominios
app.use(express.json()); // Middleware para parsear JSON
//localhost:3000/usuarios/:id/resultados
app.use("/usuarios", usuariosRouter);
app.use("/categorias", categoriasRouter);

app.listen(3000, () => {
    console.log("Server is running on port 3000");
});