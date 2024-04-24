import Venda from "../models/venda.model.js";

async function cadastraVenda(venda) {
  try{
    return await Venda.create(venda);
  } catch (erro) {
    throw erro;
  }
}

async function buscaVendas() {
  try{
    return await Venda.findAll();
  } catch (erro) {
    throw erro;
  }
}

async function buscaVenda(id) {
  try{
    return await Venda.findByPk(id);
  } catch (erro) {
    throw erro;
  }
}

async function excluirVenda(id) {
  try{
    return await Venda.destroy({
          where: {
            vendaId: id
          }
    });
  } catch (erro) {
    throw erro;
  }
}

async function atualizaVenda(venda) {
  try{
     await Venda.update(venda, {
            where: {
              vendaId: venda.vendaId
            }
    });
    return await buscaVenda(venda.vendaId);
  } catch (erro) {
    throw erro;
  }
}

export default {
  cadastraVenda,
  buscaVendas,
  buscaVenda,
  excluirVenda,
  atualizaVenda
}