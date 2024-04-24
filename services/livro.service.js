import LivroRepository from "../repositories/livro.repository.js";
import LivroInfoRepository from "../repositories/livroInfo.repository.js"

async function cadastraLivro(livro) {
  return await LivroRepository.cadastraLivro(livro);
}

async function buscaLivros() {
  return await LivroRepository.buscaLivros();
}

async function buscaLivro(id) {
  const livro = await LivroRepository.buscaLivro(id);
  livro.info = await LivroInfoRepository.buscaLivroInfo(parseInt(id));
  return livro;
}

async function excluirLivro(id) {
  return await LivroRepository.excluirLivro(id);
}
async function atualizaLivro(livro) {
  return await LivroRepository.atualizaLivro(livro);
}

async function cadastraLivroInfo(livroInfo) {
  await LivroInfoRepository.cadastraLivroInfo(livroInfo);
}

async function buscaLivrosInfo() {
  return await LivroInfoRepository.buscaLivrosInfo();
}

async function buscaLivroInfo(id) {
  return await LivroInfoRepository.buscaLivroInfo(id);
}

async function atualizaLivroInfo(livroInfo) {
  await LivroInfoRepository.atualizaLivroInfo(livroInfo);
}

async function excluirLivroInfo(livroId) {
  await LivroInfoRepository.excluirLivroInfo(livroId);
}

async function cadastraAvaliacao(avaliacao, livroId) {
  await LivroInfoRepository.cadastraAvaliacao(avaliacao, livroId);
}

async function excluirAvaliacao(livroId, index) {
  await LivroInfoRepository.excluirAvaliacao(parseInt(livroId), index);
}


export default {
  cadastraLivro,
  buscaLivros,
  buscaLivro,
  excluirLivro,
  atualizaLivro,
  cadastraLivroInfo,
  buscaLivrosInfo,
  buscaLivroInfo,
  atualizaLivroInfo,
  excluirLivroInfo,
  cadastraAvaliacao,
  excluirAvaliacao
}