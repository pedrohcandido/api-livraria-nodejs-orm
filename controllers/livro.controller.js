import LivroService from "../services/livro.service.js";

async function cadastraLivro(req, res, next) {
  try{
    let livro = req.body;
    if (!livro.nome || !livro.valor || !livro.estoque || !livro.autorId ) {
      throw new Error("Nome, valor, estoque e código do autor são obrigatórios.");
    }
    livro = await LivroService.cadastraLivro(livro);
    res.send(livro)
    logger.info(`POST /livro - ${JSON.stringify(livro)}`);
  } catch (erro) {
    next(erro);
  }
}

async function buscaLivros(req, res, next) {
  try{  
    res.send(await LivroService.buscaLivros());
    logger.info(`GET /livros`);
  } catch (erro) {
    next(erro);
  }
}

async function buscaLivro(req, res, next) {
  try{    
    res.send(await LivroService.buscaLivro(req.params.id));
    logger.info(`GET /livro`);
  } catch (erro) {
    next(erro);
  }
}

async function excluirLivro(req, res, next) {
  try{
    await LivroService.excluirLivro(req.params.id)
    res.end();
    logger.info(`DELETE /livro`);
  } catch (erro) {
    next(erro);
  }
}

async function atualizaLivro(req, res, next) {
  try{
    let livro = req.body;
    if (!livro.livroId || !livro.nome || !livro.valor || !livro.estoque || !livro.autorId ) {
      throw new Error("Id, Nome, valor, estoque e código autor são obrigatórios.");
    }
    livro = await LivroService.atualizaLivro(livro);
    res.send(livro)
    logger.info(`PUT /livro - ${JSON.stringify(livro)}`);
  } catch (erro) {
    next(erro);
  }
}

async function cadastraLivroInfo(req, res, next) {
  try {
      let livroInfo = req.body;
      if (!livroInfo.livroId) {
          throw new Error("Livro ID é obrigatório.");            
      }
      await LivroService.cadastraLivroInfo(livroInfo);
      res.end();
      logger.info(`POST /livro/info - ${JSON.stringify(livroInfo)}`);        
  } catch (erro) {
      next(erro);
  }
}

async function buscaLivrosInfo(req, res, next) {
  try {
      res.send(await LivroService.buscaLivrosInfo());
      logger.info(`GET /livro/info`);        
  } catch (erro) {
      next(erro);
  }
}

async function buscaLivroInfo(req, res, next) {
  try{    
    res.send(await LivroService.buscaLivroInfo(req.params.id));
    logger.info(`GET /livro`);
  } catch (erro) {
    next(erro);
  }
}

async function excluirLivroInfo(req, res, next) {
  try {
      res.send(await LivroService.excluirLivroInfo(parseInt(req.params.id)));
      logger.info(`DELETE /livro/info`);        
  } catch (erro) {
      next(erro);
  }
}

async function atualizaLivroInfo(req, res, next) {
  try {
      let livroInfo = req.body;
      if (!livroInfo.livroId) {
          throw new Error("Livro ID é obrigatório.");            
      }
      await LivroService.atualizaLivroInfo(livroInfo);
      res.end();
      logger.info(`PUT /livro/info - ${JSON.stringify(livroInfo)}`);        
  } catch (erro) {
      next(erro);
  }
}

async function cadastraAvaliacao(req, res, next) {
  try {
      let params = req.body;
      if (!params.livroId || !params.avaliacao) {
          throw new Error("Livro ID e Avaliação são obrigatórios.");            
      }
      await LivroService.cadastraAvaliacao(params.avaliacao, params.livroId);
      res.end();
      logger.info(`POST /livro/avaliacao`);        
  } catch (erro) {
      next(erro);
  }
}

async function excluirAvaliacao(req, res, next) {
  try {
      await LivroService.excluirAvaliacao(req.params.id, req.params.index);
      res.end();
      logger.info(`POST /livro/${req.params.id}/avaliacao/${req.params.index}`);
  } catch (erro) {
      next(erro);
  }
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
  excluirLivroInfo,
  atualizaLivroInfo,
  cadastraAvaliacao,
  excluirAvaliacao  
}