"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const categorias_controller_1 = require("../controllers/categorias.controller");
const router = (0, express_1.Router)();
router.get("/", categorias_controller_1.obtenerCategorias);
router.get("/:id", categorias_controller_1.obtenerCategoriaPorId);
exports.default = router;
