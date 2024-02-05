const sequelize = require('sequelize');

const conn = new sequelize(
    'projetopi', 'root', '', 
    {
        host : "localhost",
        dialect : "mysql"
    }
);

module.exports = conn;