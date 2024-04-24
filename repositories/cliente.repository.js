import Cliente from "../models/cliente.model.js";

async function cadastrarCliente( cliente ) {
  try {
    return await Cliente.create( cliente );
  } catch( erro ) {
    throw erro;
  }
}

async function buscaClientes() {
  try {
    return await Cliente.findAll();
  } catch( erro ) {
    throw erro;
  }
}

async function buscaCliente( id ) {
  try {
    return await Cliente.findByPk( id );
  } catch( erro ) {
    throw erro;
  }
}

async function excluirCliente( id ) {
  try {
    return await Cliente.destroy( {
      where: {
        clienteId: id
      }
    } );
  } catch( erro ) {
    throw erro;
  }
}

async function atualizaCliente( cliente ) {
  try {
    await Cliente.update( cliente, {
      where: {
        clienteId: cliente.clienteId
      }
    } );
    return await buscaCliente(cliente.clienteId);
  } catch( erro ) {
    throw erro;
  }
}

export default {
  cadastrarCliente,
  buscaClientes,
  buscaCliente,
  excluirCliente,
  atualizaCliente,
}