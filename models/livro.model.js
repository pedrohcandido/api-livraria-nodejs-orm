import Sequelize from "sequelize";
import db from "../config/sequelize.config.js";
import Autor from "./autor.model.js";

const Livro = db.define('livros', {
  livroId: {
    type: Sequelize.INTEGER,
    autoIncrement: true,
    allowNull: false,
    primaryKey: true
  },
  nome: {
    type: Sequelize.STRING,
    allowNull: false
  },
  valor: {
    type: Sequelize.DOUBLE,
    allowNull: false
  },
  estoque: {
    type: Sequelize.INTEGER,
    allowNull: false
  }

}, { underscored: true });

Livro.belongsTo(Autor, { foreignKey: "autorId"})
//Livro.belongsTo(Autor)

export default Livro;