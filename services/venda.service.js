import VendaRepository from "../repositories/venda.repository.js";

async function cadastraVenda(venda) {
  return await VendaRepository.cadastraVenda(venda);
}

async function buscaVendas() {
  return await VendaRepository.buscaVendas();
}

async function buscaVenda(id) {
  return await VendaRepository.buscaVenda(id);
}

async function excluirVenda(id) {
  return await VendaRepository.excluirVenda(id);
}
async function atualizaVenda(venda) {
  return await VendaRepository.atualizaVenda(venda);
}

export default {
  cadastraVenda,
  buscaVendas,
  buscaVenda,
  excluirVenda,
  atualizaVenda
}