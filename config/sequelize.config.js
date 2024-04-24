import Sequelize from "sequelize"

const sequelize = new Sequelize("livraria", "postgres","root",
  {
    dialect: "postgres",
    define: {
        timestamps: false
    }  
  }
)

export default sequelize;