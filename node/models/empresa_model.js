const sequelize = require('sequelize');
const conn = require('../database/connection');

const Empresa = conn.define('empresas',
    {
        nome: {
            type: sequelize.STRING,
            allowNull: false
        },
        cnpj: {
            type: sequelize.STRING,
            allowNull: false,
            unique: true
        },
        email: {
            type: sequelize.STRING,
            allowNull: false,
            unique: true
        },
        senha: {
            type: sequelize.STRING,
            allowNull: false
        },
        cep: {
            type: sequelize.STRING,
            allowNull: false
        },
        cidade: {
            type: sequelize.STRING,
            allowNull: false
        },
        rua: {
            type: sequelize.STRING,
            allowNull: false
        },
        numero: {
            type: sequelize.STRING,
            allowNull: false
        },
        bairro: {
            type: sequelize.STRING,
            allowNull: false
        },
        tel: {
            type: sequelize.STRING,
            allowNull: false
        }
    }
);

const findAll = () => {
    return Empresa.findAll({
        attributes: ['id', 'nome', 'cep', 'cidade', 'rua', 'numero', 'bairro', 'tel']
    });
};

const findById = (id) => {
    return Empresa.findByPk(id, {
        attributes : ['id', 'nome', 'cep', 'cidade', 'rua', 'numero', 'bairro', 'tel']
    });
};

const findByNome = (nome) => {
    return Empresa.findAll({
        where : {nome}
    }, {
        attributes : ['id', 'nome', 'cep', 'cidade', 'rua', 'numero', 'bairro', 'tel']
    });
};

const findByCep = (cep) => {
    return Empresa.findAll({
        where : {cep}
    }, {
        attributes : ['id', 'nome', 'cep', 'cidade', 'rua', 'numero', 'bairro', 'tel']
    });
};

const findByCidade = (cidade) => {
    return Empresa.findAll({
        where : {cidade}
    }, {
        attributes : ['id', 'nome', 'cep', 'cidade', 'rua', 'numero', 'bairro', 'tel']
    });
};

const findByEndereco = (rua, numero, bairro) => {
    return Empresa.findAll({
        where : {rua, numero, bairro}
    }, {
        attributes : ['id', 'nome', 'cep', 'cidade', 'rua', 'numero', 'bairro', 'tel']
    });
};

const findByTelefone = (tel) => {
    return Empresa.findOne({
        where : {tel}
    }, {
        attributes : ['id', 'nome', 'cep', 'cidade', 'rua', 'numero', 'bairro', 'tel']
    });
};

const createEmpresa = (nome, cnpj, email, senha, cep, cidade, rua, numero, bairro, tel) => {
    return Empresa.create({
        nome: nome,
        cnpj: cnpj,
        email: email,
        senha: senha,
        cep: cep,
        cidade: cidade,
        rua: rua,
        numero: numero,
        bairro: bairro,
        tel: tel
    });
};

const loginEmpresaCnpj = (cnpj) => {
    return Empresa.findOne({
        where : {cnpj}
    }, {
        attributes : ['senha']
    });
};

const loginEmpresaEmail = (email) => {
    return Empresa.findOne({
        where : {email}
    }, {
        attributes : ['senha']
    });
};

const updateNome = (nome, id) => {
    return Empresa.update(
        { nome: nome },
        { where: { id: id } }
    );
};

const updateSenha = (id, senha) => {
    return Empresa.update(
        { senha: senha },
        { where: { id: id } }
    );
};

const updateCep = (id, cep) => {
    return Empresa.update(
        {cep : cep},
        {where : {id : id}}
    );
};

const updateCidade = (id, cidade) => {
    return Empresa.update(
        {cidade : cidade},
        {where : {id : id}}
    );
};

const updateEndereco = (id, rua, numero, bairro) => {
    return Empresa.update(
        { rua: rua, numero: numero, bairro: bairro },
        { where: { id: id } }
    );
};

const updateTelefone = (id, tel) => {
    return Empresa.update(
        { tel: tel },
        { where: { id: id } }
    );
};

const deleteEmpresa = (cnpj, email, senha) => {
    return Empresa.destroy({
        where: {
            cnpj : cnpj,
            email : email,
            senha : senha
        }
    });
};


module.exports = {
    Empresa,
    findAll,
    findById,
    findByNome,
    findByCep,
    findByCidade,
    findByEndereco,
    findByTelefone,
    createEmpresa,
    loginEmpresaCnpj,
    loginEmpresaEmail,
    updateNome,
    updateSenha,
    updateCep,
    updateCidade,
    updateEndereco,
    updateTelefone,
    deleteEmpresa
};