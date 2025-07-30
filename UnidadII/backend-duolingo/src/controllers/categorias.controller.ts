import { Request, Response } from "express";
import { categorias } from "../data/categorias.data";

//obtener todas las categorias
export const obtenerCategorias = (req: Request, res: Response) => {
    res.json(categorias);
}

//obtener una categoria por id
export const obtenerCategoriaPorId = (req: Request, res: Response) => {
    const id = req.params.id;
    // const { id } = req.params;
    const categoria = categorias.find(c => c.id === parseInt(id));
    if (categoria) {
        res.json(categoria);
    } else {
        res.status(404).json({ message: "Categoria no encontrada" });
    }
}