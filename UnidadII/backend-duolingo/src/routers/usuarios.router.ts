import { Router } from "express";
import { obtenerUsuarios, obtenerResultadosUsuario, obtenerUsuarioSinResultados, actualizarUsuario, actualizarResultadoCategoria } from "../controllers/usuarios.controller";   

const router = Router();


router.get("/", obtenerUsuarios);
router.get("/:id/resultados", obtenerResultadosUsuario);
router.get("/:id", obtenerUsuarioSinResultados);
router.put("/:id", actualizarUsuario); 
router.put("/:id/resultados/:idCategoria", actualizarResultadoCategoria);

export default router;
