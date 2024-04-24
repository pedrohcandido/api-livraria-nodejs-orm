import Autor from "../models/autor.model.js"

async function cadastraAutor(autor) {
  try{
    return await Autor.create(autor);
  } catch (erro) {
    throw erro;
  }
}

async function buscaAutores() {
  try{
    return await Autor.findAll();
  } catch (erro) {
    throw erro;
  }
}

async function buscaAutor(id) {
  try{
    return await Autor.findByPk(id);
  } catch (erro) {
    throw erro;
  }
}

async function excluirAutor(id) {
  try{
    return await Autor.destroy({
          where: {
            autorId: id
          }
    });
  } catch (erro) {
    throw erro;
  }
}

async function atualizaAutor(autor) {
  try{
     await Autor.update(autor, {
            where: {
              autorId: autor.autorId
            }
    });
    return await buscaAutor(autor.autorId);
  } catch (erro) {
    throw erro;
  }
}

export default {
  cadastraAutor,
  buscaAutores,
  buscaAutor,
  excluirAutor,
  atualizaAutor
}