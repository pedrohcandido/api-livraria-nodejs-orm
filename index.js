import express from "express";
import cors from "cors";
import winston from "winston";
import basicAuth from "express-basic-auth"
import clienteRouter from "./routes/cliente.route.js"
import autorRouter from "./routes/autor.route.js"
import livroRouter from "./routes/livro.route.js"
import vendaRouter from "./routes/venda.route.js"
import sequelize from "./config/sequelize.config.js"
//import models from "./models/*"

sequelize.sync();

const { combine, timestamp, label, printf } = winston.format;
const myFormat = printf(({ level, message, label, timestamp }) => {
    return `${timestamp} [${label}] ${level} ${message}`;
});
global.logger = winston.createLogger({
    level: "silly",
    transports: [
        new (winston.transports.Console)(),
        new (winston.transports.File)({ filename: "store-api.log" })
    ],
    format: combine(
        label({ label: "store-api" }),
        timestamp(),
        myFormat
    )
});

const app = express();
app.use(express.json());
app.use( cors() );

function getRole( username ) {

  if( username == 'admin' ) {
    return 'roleAdmin'
  } else if( username == 'pedro' ) {
    return 'role1'
  }
}

function authorize( ...allowed ) {

  const isAllowed = role => allowed.indexOf( role ) > -1;

  return ( req, res, next ) => {

    if( req.auth.user ) {
      const role = getRole( req.auth.user );

      if( isAllowed( role ) ) {
        next()
      } else {
        res.status( 401 ).send( 'Role not allowed' );
      }
    } else {
      res.status( 403 ).send( 'User not found' );
    }
  }
}

app.use( basicAuth( {
  authorizer: ( username, password ) => {

    // Obs: Usuário e senha estão "hard coded", apenas para facilitar 
    // o entendimento. O ideal nesse ponto é buscar as informações do usuário 
    // de um banco de dados, servidor de autorização, etc.
    const userMatches = basicAuth.safeCompare( username, 'admin' );
    const pwdMatches = basicAuth.safeCompare( password, 'desafio-igti-nodejs' )
    
    const userMatches2 = basicAuth.safeCompare( username, 'pedro' );
    const pwdMatches2 = basicAuth.safeCompare( password, '123' );

    return userMatches && pwdMatches || userMatches2 && pwdMatches2;
  }
} ) )

app.use("/cliente", authorize( 'roleAdmin', 'role1' ), clienteRouter);
app.use("/autor", authorize( 'roleAdmin', 'role1' ), autorRouter);
app.use("/livro", authorize( 'roleAdmin', 'role1' ), livroRouter);
app.use("/venda", authorize( 'roleAdmin', 'role1' ), vendaRouter);

app.use((erro, req, res, next) => {
  logger.error(`${req.method} ${req.baseUrl} - ${erro.message}`);
  res.status(400).send({ error: erro.message });
})

app.listen(3000, () => console.log("API Iniciada!"));
