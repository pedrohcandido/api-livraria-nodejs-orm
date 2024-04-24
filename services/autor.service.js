import AutorRepository from "../repositories/autor.repository.js";

async function cadastraAutor(autor) {
  return await AutorRepository.cadastraAutor(autor);
}

async function buscaAutores() {
  return await AutorRepository.buscaAutores();
}

async function buscaAutor(id) {
  return await AutorRepository.buscaAutor(id);
}

async function excluirAutor(id) {
  return await AutorRepository.excluirAutor(id);
}
async function atualizaAutor(autor) {
  return await AutorRepository.atualizaAutor(autor);
}

export default {
  cadastraAutor,
  buscaAutores,
  buscaAutor,
  excluirAutor,
  atualizaAutor
}