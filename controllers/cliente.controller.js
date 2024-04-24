import ClienteService from "../services/cliente.service.js";

async function cadastrarCliente(req, res, next) {
  try{
    let cliente = req.body;
    if (!cliente.nome || !cliente.email || !cliente.senha || !cliente.telefone || !cliente.endereco ) {
      throw new Error("Nome, E-mail, Senha, Telefone e Endereço são obrigatórios.");
    }
    cliente = await ClienteService.cadastrarCliente(cliente);
    res.send(cliente)
    logger.info(`POST /cliente - ${JSON.stringify(cliente)}`);
  } catch (erro) {
    next(erro);
  }
}

async function buscaClientes(req, res, next) {
  try{  
    res.send(await ClienteService.buscaClientes());
    logger.info(`GET /clientes`);
  } catch (erro) {
    next(erro);
  }
}

async function buscaCliente(req, res, next) {
  try{    
    res.send(await ClienteService.buscaCliente(req.params.id));
    logger.info(`GET /cliente`);
  } catch (erro) {
    next(erro);
  }
}

async function excluirCliente(req, res, next) {
  try{
    await ClienteService.excluirCliente(req.params.id)
    res.end();
    logger.info(`DELETE /cliente`);
  } catch (erro) {
    next(erro);
  }
}

async function atualizaCliente(req, res, next) {
  try{
    let cliente = req.body;
    if (!cliente.clienteId || !cliente.nome || !cliente.email || !cliente.senha || !cliente.telefone || !cliente.endereco ) {
      throw new Error("Id, Nome, E-mail, Senha, Telefone e Endereço são obrigatórios.");
    }
    cliente = await ClienteService.atualizaCliente(cliente);
    res.send(cliente)
    logger.info(`PUT /cliente - ${JSON.stringify(cliente)}`);
  } catch (erro) {
    next(erro);
  }
}

export default {
  cadastrarCliente,
  buscaClientes,
  buscaCliente,
  excluirCliente,
  atualizaCliente
}