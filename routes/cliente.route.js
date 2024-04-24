import express from "express";
import ClienteController from "../controllers/cliente.controller.js";

const router = express.Router();

router.post("/", ClienteController.cadastrarCliente);
router.get("/", ClienteController.buscaClientes);
router.get("/:id", ClienteController.buscaCliente);
router.delete("/:id", ClienteController.excluirCliente);
router.put("/", ClienteController.atualizaCliente);

export default router;