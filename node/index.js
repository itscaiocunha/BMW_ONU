const express = require('express');
const app = express();
const db = require('./database/connection');
const routerUsuario = require("./routers/usuario_router");
const routerEmpresa = require("./routers/empresa_router");
const routerDoacao = require("./routers/doacao_router");
const routerTipoDoacao = require("./routers/tp_doacao_router");
var cors = require('cors')

//configura o formato JSON
app.use(cors())
app.use(express.json());

//realiza a conexão com a base de dados
db;
app.use(routerUsuario);
app.use(routerEmpresa);
app.use(routerDoacao);
app.use(routerTipoDoacao);

app.listen(8000, ()=> {
    console.log('Servidor aberto na porta 8000: http://localhost:8000');
});