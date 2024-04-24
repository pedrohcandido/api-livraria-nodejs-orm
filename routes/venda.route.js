import express from "express";
import VendaController from "../controllers/venda.controller.js";

const router = express.Router();

router.post("/", VendaController.cadastraVenda);
router.get("/", VendaController.buscaVendas);
router.get("/:id", VendaController.buscaVenda);
router.delete("/:id", VendaController.excluirVenda);
router.put("/", VendaController.atualizaVenda);

export default router;