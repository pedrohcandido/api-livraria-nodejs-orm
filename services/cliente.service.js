import ClienteRepository from "../repositories/cliente.repository.js"

async function cadastrarCliente(cliente) {
  return await ClienteRepository.cadastrarCliente(cliente);
}

async function buscaClientes() {
  return await ClienteRepository.buscaClientes();
}

async function buscaCliente(id) {
  return await ClienteRepository.buscaCliente(id);
}

async function excluirCliente(id) {
  return await ClienteRepository.excluirCliente(id);
}

async function atualizaCliente(cliente) {
  return await ClienteRepository.atualizaCliente(cliente);
}

export default {
  cadastrarCliente,
  buscaClientes,
  buscaCliente,
  excluirCliente,
  atualizaCliente
}
