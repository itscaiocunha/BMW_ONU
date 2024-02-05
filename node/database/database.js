const conn = require('./connection');
const db = conn.authenticate()
    .then(() => {
        console.log('\n Banco conectado com sucesso!');
    })
    .catch(erro => {
        console.log(erro);
    })

module.exports = db;