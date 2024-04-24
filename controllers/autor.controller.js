import AutorService from "../services/autor.service.js";

async function cadastraAutor(req, res, next) {
  try{
    let autor = req.body;
    if (!autor.nome || !autor.email || !autor.telefone || !autor.endereco ) {
      throw new Error("Nome, E-mail, Telefone e Endereço são obrigatórios.");
    }
    autor = await AutorService.cadastraAutor(autor);
    res.send(autor)
    logger.info(`POST /autor - ${JSON.stringify(autor)}`);
  } catch (erro) {
    next(erro);
  }
}

async function buscaAutores(req, res, next) {
  try{  
    res.send(await AutorService.buscaAutores());
    logger.info(`GET /autores`);
  } catch (erro) {
    next(erro);
  }
}

async function buscaAutor(req, res, next) {
  try{    
    res.send(await AutorService.buscaAutor(req.params.id));
    logger.info(`GET /autor`);
  } catch (erro) {
    next(erro);
  }
}

async function excluirAutor(req, res, next) {
  try{
    await AutorService.excluirAutor(req.params.id)
    res.end();
    logger.info(`DELETE /autor`);
  } catch (erro) {
    next(erro);
  }
}

async function atualizaAutor(req, res, next) {
  try{
    let autor = req.body;
    if (!autor.autorId || !autor.nome || !autor.email || !autor.telefone || !autor.endereco ) {
      throw new Error("Id, Nome, E-mail, Telefone e Endereço são obrigatórios.");
    }
    autor = await AutorService.atualizaAutor(autor);
    res.send(autor)
    logger.info(`PUT /autor - ${JSON.stringify(autor)}`);
  } catch (erro) {
    next(erro);
  }
}

export default {
  cadastraAutor,
  buscaAutores,
  buscaAutor,
  excluirAutor,
  atualizaAutor
}