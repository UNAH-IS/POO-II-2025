"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.obtenerCategoriaPorId = exports.obtenerCategorias = void 0;
const categorias_data_1 = require("../data/categorias.data");
//obtener todas las categorias
const obtenerCategorias = (req, res) => {
    res.json(categorias_data_1.categorias);
};
exports.obtenerCategorias = obtenerCategorias;
//obtener una categoria por id
const obtenerCategoriaPorId = (req, res) => {
    const id = req.params.id;
    // const { id } = req.params;
    const categoria = categorias_data_1.categorias.find(c => c.id === parseInt(id));
    if (categoria) {
        res.json(categoria);
    }
    else {
        res.status(404).json({ message: "Categoria no encontrada" });
    }
};
exports.obtenerCategoriaPorId = obtenerCategoriaPorId;
