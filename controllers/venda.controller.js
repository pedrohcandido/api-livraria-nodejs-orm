import VendaService from "../services/venda.service.js";

async function cadastraVenda(req, res, next) {
  try{
    let venda = req.body;
    if (!venda.valor || !venda.data || !venda.clienteId || !venda.livroId ) {
      throw new Error("valor, data, código cliente e código do livro são obrigatórios.");
    }
    venda = await VendaService.cadastraVenda(venda);
    res.send(venda)
    logger.info(`POST /venda - ${JSON.stringify(venda)}`);
  } catch (erro) {
    next(erro);
  }
}

async function buscaVendas(req, res, next) {
  try{  
    res.send(await VendaService.buscaVendas());
    logger.info(`GET /vendas`);
  } catch (erro) {
    next(erro);
  }
}

async function buscaVenda(req, res, next) {
  try{    
    res.send(await VendaService.buscaVenda(req.params.id));
    logger.info(`GET /venda`);
  } catch (erro) {
    next(erro);
  }
}

async function excluirVenda(req, res, next) {
  try{
    await VendaService.excluirVenda(req.params.id)
    res.end();
    logger.info(`DELETE /venda`);
  } catch (erro) {
    next(erro);
  }
}

async function atualizaVenda(req, res, next) {
  try{
    let venda = req.body;
    if (!venda.vendaId || !venda.valor || !venda.data || !venda.clienteId || !venda.livroId ) {
      throw new Error("id, valor, data, código cliente e código do livro são obrigatórios.");
    }
    venda = await VendaService.atualizaVenda(venda);
    res.send(venda)
    logger.info(`PUT /venda - ${JSON.stringify(venda)}`);
  } catch (erro) {
    next(erro);
  }
}

export default {
  cadastraVenda,
  buscaVendas,
  buscaVenda,
  excluirVenda,
  atualizaVenda
}