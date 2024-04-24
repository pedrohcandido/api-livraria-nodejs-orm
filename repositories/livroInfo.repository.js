import LivroInfoSchema from "../schemas/livroInfo.shema.js";
import { connect } from "../config/mongoose.config.js";

async function cadastraLivroInfo(livroInfo) {
  try {
      const mongoose = await connect();
      const LivroInfo = mongoose.model("LivroInfo", LivroInfoSchema);
      livroInfo = new LivroInfo(livroInfo);
      await livroInfo.save();
  } catch (erro) {
    throw erro;
  }
}

async function buscaLivrosInfo() {
  try {
      const mongoose = await connect();
      const LivroInfo = mongoose.model("LivroInfo", LivroInfoSchema);
      const query = LivroInfo.find({});
      return await query.exec();
  } catch (erro) {
    throw erro;
  }
}

async function buscaLivroInfo(livroId) {
  try {
      const mongoose = await connect();
      const LivroInfo = mongoose.model("LivroInfo", LivroInfoSchema);
      const query = LivroInfo.findOne({ livroId });
      return await query.exec();
  } catch (erro) {
    throw erro;
  }
}

async function excluirLivroInfo(livroId) {
  try {
      const mongoose = await connect();
      const LivroInfo = mongoose.model("LivroInfo", LivroInfoSchema);
      await LivroInfo.deleteOne({ livroId })
  } catch (erro) {
    throw erro;
  }
}

async function atualizaLivroInfo(livroInfo) {
  try {
      const mongoose = await connect();
      const LivroInfo = mongoose.model("LivroInfo", LivroInfoSchema);
      await LivroInfo.findOneAndUpdate( { livroId: livroInfo.livroId }, livroInfo);
  } catch (erro) {
    throw erro;
  }
}

async function cadastraAvaliacao(avaliacao, livroId) {
  try {
      const livroInfo = await buscaLivroInfo(livroId);
      livroInfo.avaliacoes.push(avaliacao);
      await atualizaLivroInfo(livroInfo);
  } catch (erro) {
    throw erro;
  }
}

async function excluirAvaliacao(livroId, index) {
  try {
      const livroInfo = await buscaLivroInfo(livroId);
      livroInfo.avaliacao.splice(index, 1);
      await atualizaLivroInfo(livroInfo);
  } catch (erro) {
    throw erro;
  }
}

export default {
  cadastraLivroInfo,
  buscaLivrosInfo,
  buscaLivroInfo,
  excluirLivroInfo,
  atualizaLivroInfo,
  cadastraAvaliacao,
  excluirAvaliacao  
}