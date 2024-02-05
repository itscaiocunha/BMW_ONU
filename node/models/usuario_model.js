const sequelize = require('sequelize');
const conn = require('../database/connection');

const Usuario = conn.define('usuarios',
    {
        nome: {
            type: sequelize.STRING,
            allowNull: false
        },
        sobrenome: {
            type: sequelize.STRING,
            allowNull: false
        },
        dt_nascimento: {
            type: sequelize.DATE,
            allowNull: false
        },
        cpf: {
            type: sequelize.STRING,
            allowNull: false,
            unique : true
        },
        tel: {
            type: sequelize.STRING,
            allowNull: false
        },
        cep: {
            type: sequelize.STRING,
            allowNull: false
        },
        nick: {
            type: sequelize.STRING,
            allowNull: false,
            unique : true
        },
        email: {
            type: sequelize.STRING,
            allowNull: false,
            unique : true
        },
        senha: {
            type: sequelize.STRING,
            allowNull: false
        }
    }
);

const findAll = () => {
    return Usuario.findAll({
        attributes : ['id', 'nome', 'sobrenome', 'nick', 'tel', 'cep']
    })
};

const findById = (id) => {
    return Usuario.findByPk(id, {
        attributes : ['id', 'nome', 'sobrenome', 'nick', 'tel', 'cep']
    })
};

const findByNome = (nome) => {
    return Usuario.findAll({
        where : {nome}
    }, {
        attributes : ['id', 'nome', 'sobrenome', 'nick', 'tel', 'cep']
    })
};

const findBySobrenome = (sobrenome) => {
    return Usuario.findAll({
        where : {sobrenome}
    }, {
        attributes : ['id', 'nome', 'sobrenome', 'nick', 'tel', 'cep']
    })
};

const findByNick = (nick) => {
    return Usuario.findAll({
        where : {nick}
    }, {
        attributes : ['id']
    })
};

const findByTelefone = (tel) => {
    return Usuario.findAll({
        where : {tel}
    }, {
        attributes : ['id', 'nome', 'sobrenome', 'nick', 'tel', 'cep']
    })
};

const findByCep = (cep) => {
    return Usuario.findAll({
        where : {cep}
    }, {
        attributes : ['id', 'nome', 'sobrenome', 'nick', 'tel', 'cep']
    })
};

const findByEmail = (email) => {
    return Usuario.findOne({
        where : {email}
    },{ attributes : ['id']}
)};

const createUsuario = (nome, sobrenome, dt_nascimento, cpf, tel, cep, nick, email, senha) => {
    return Usuario.create({
        nome : nome,
        sobrenome : sobrenome,
        dt_nascimento : dt_nascimento,
        cpf : cpf,
        tel : tel,
        cep : cep,
        nick : nick,
        email : email,
        senha : senha
    })
};

const loginUsuarioEmail = (email) => {
    return Usuario.findOne({
        where : {email}
    }, {
        attributes : ['senha']
    });
};
const loginUsuarioCpf = (cpf) => {
    return Usuario.findOne({
        where : {cpf}
    }, {
        attributes : ['senha']
    });
};

const updateTelefone = (id, tel) => {
    return Usuario.update(
        {tel : tel},
        {where : {id : id}} 
    )
};

const updateCep = (id, cep) => {
    return Usuario.update(
        {cep : cep},
        {where : {id : id}}
    )
};

const updateNick = (id, nick) => {
    return Usuario.update(
        {nick : nick},
        {where : {id : id}}
    )
};

const updateSenha = (id, senha) => {
    return Usuario.update(
        {senha : senha},
        {where : {id : id}}
    )
}

const deleteUsuario = (cpf, email, senha) => {
    return Usuario.destroy({
        where : {
            cpf : cpf,
            email : email,
            senha : senha
        }
    })
};

module.exports = {
    Usuario,
    findAll,
    findById,
    findByNome,
    findBySobrenome,
    findByNick,
    findByTelefone,
    findByCep,
    findByEmail,
    createUsuario,
    loginUsuarioEmail,
    loginUsuarioCpf,
    updateTelefone,
    updateCep,
    updateNick,
    updateSenha,
    deleteUsuario
};