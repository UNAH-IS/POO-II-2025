import config from './config/config';
import usuariosRouter from './routes/usuarios-router';
import express from 'express';

const app = express();
app.use(express.json()); // poblar el cuerpo de las peticiones con JSON (body)
app.use('/usuarios', usuariosRouter); // usar el router de usuarios

app.listen(config.port, () => {
    console.log(`Servidor corriendo en http://localhost:${config.port}`);
});


// http://localhost:3000/usuarios (GET) - Obtener todos los usuarios
// http://localhost:3000/usuarios/1 (GET) - Obtener usuario con ID 1
// http://localhost:3000/usuarios (POST) - Crear un nuevo usuario