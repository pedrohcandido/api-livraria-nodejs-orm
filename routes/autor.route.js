import express from "express";
import AutorController from "../controllers/autor.controller.js";

const router = express.Router();

router.post("/", AutorController.cadastraAutor);
router.get("/", AutorController.buscaAutores);
router.get("/:id", AutorController.buscaAutor);
router.delete("/:id", AutorController.excluirAutor);
router.put("/", AutorController.atualizaAutor);

export default router;