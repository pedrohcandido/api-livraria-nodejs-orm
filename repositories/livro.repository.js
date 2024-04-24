import Livro from "../models/livro.model.js";

async function cadastraLivro(livro) {
  try{
    return await Livro.create(livro);
  } catch (erro) {
    throw erro;
  }
}

async function buscaLivros() {
  try{
    return await Livro.findAll();
  } catch (erro) {
    throw erro;
  }
}

async function buscaLivro(id) {
  try{
    return await Livro.findByPk(id, { raw: true });
  } catch (erro) {
    throw erro;
  }
}

async function excluirLivro(id) {
  try{
    return await Livro.destroy({
          where: {
            livroId: id
          }
    });
  } catch (erro) {
    throw erro;
  }
}

async function atualizaLivro(livro) {
  try{
     await Livro.update(livro, {
            where: {
              livroId: livro.livroId
            }
    });
    return await buscaLivro(livro.livroId);
  } catch (erro) {
    throw erro;
  }
}

export default {
  cadastraLivro,
  buscaLivros,
  buscaLivro,
  excluirLivro,
  atualizaLivro
}