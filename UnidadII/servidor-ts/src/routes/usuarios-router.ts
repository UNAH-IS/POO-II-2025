import { Router } from 'express';
import { 
    obtenerUsuarios, 
    obtenerUsuarioPorId, 
    crearUsuario, 
    actualizarUsuario, 
    eliminarUsuario 
} from '../controllers/usuarios-controller';


const router = Router();

router.get('/', obtenerUsuarios); // Obtener todos los usuarios
router.get('/:id', obtenerUsuarioPorId); // Obtener un usuario por ID
router.post('/', crearUsuario); // Crear un nuevo usuario
router.put('/:id', actualizarUsuario); // Actualizar un usuario por ID (opcional)
router.delete('/:id', eliminarUsuario);

console.log('Rutas de usuarios registradas');

export default router;

