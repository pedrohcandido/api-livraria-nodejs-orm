import express from "express";
import LivroController from "../controllers/livro.controller.js";

const router = express.Router();

router.post("/", LivroController.cadastraLivro);
router.get("/", LivroController.buscaLivros);
router.get("/:id", LivroController.buscaLivro);
router.delete("/:id", LivroController.excluirLivro);
router.put("/", LivroController.atualizaLivro);

router.get("/info/info", LivroController.buscaLivrosInfo);
router.post("/info", LivroController.cadastraLivroInfo);
router.put("/info", LivroController.atualizaLivroInfo);
router.delete("/info/:id", LivroController.excluirLivroInfo);
router.get("/info/:id", LivroController.buscaLivroInfo);
router.post("/avaliacao", LivroController.cadastraAvaliacao);
router.delete("/:id/review/:index", LivroController.excluirAvaliacao);

export default router;