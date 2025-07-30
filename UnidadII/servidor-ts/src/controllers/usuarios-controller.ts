import { Request, Response } from 'express';
import { Usuario } from '../models/usuario';
import { usuarios } from '../models/usuario';

// Obtener todos los usuarios
export const obtenerUsuarios = (req: Request, res: Response): void => {
    res.json(usuarios);
};

// Obtener un usuario por ID
export const obtenerUsuarioPorId = (req: Request, res: Response): void => {
    const id = parseInt(req.params.id);
    const usuario = usuarios.find(u => u.id === id);
    
    if (usuario) {
        res.json(usuario);
    } else {
        res.status(404).json({ message: 'Usuario no encontrado' });
    }
}

// Crear un nuevo usuario
export const crearUsuario = (req: Request, res: Response): void => {
    const nuevoUsuario: Usuario = req.body;
    nuevoUsuario.id = usuarios.length + 1; // Asignar un ID único
    usuarios.push(nuevoUsuario);
    res.status(201).json(nuevoUsuario);
};

// Actualizar un usuario por ID (opcional)
export const actualizarUsuario = (req: Request, res: Response): void => {
    const id = parseInt(req.params.id); // 1
    const index = usuarios.findIndex(u => u.id === id); // 0
    
    if (index !== -1) {
        const usuarioActualizado: Usuario = { ...usuarios[index], ...req.body };
        usuarios[index] = usuarioActualizado;
        res.json(usuarioActualizado);
    } else {
        res.status(404).json({ message: 'Usuario no encontrado' });
    }
}

// Eliminar un usuario por ID (opcional)
export const eliminarUsuario = (req: Request, res: Response): void => {
    const id = parseInt(req.params.id);
    const index = usuarios.findIndex(u => u.id === id);
    
    if (index !== -1) {
        usuarios.splice(index, 1);
        res.status(200).json({mensaje: "Registro eliminado"}); // No content
    } else {
        res.status(404).json({ message: 'Usuario no encontrado' });
    }
};