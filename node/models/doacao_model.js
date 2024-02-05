const sequelize = require('sequelize');
const conn = require('../database/connection');

const Doacao = conn.define('doacoes',
    {
        quantidade : {
            type : sequelize.FLOAT,
            allowNull : false
        },
        descricao : {
            type : sequelize.STRING,
            allowNull : false
        },
        data_doacoes : {
            type : sequelize.DATE,
            allowNull : false
        },
        empresas_id : {
            type : sequelize.INTEGER,  
            allowNull : false
        },
        usuarios_id : {
            type : sequelize.INTEGER,
            allowNull : false
        },
        tp_doacoes_id : {
            type : sequelize.INTEGER,
            allowNull : false
        }
    }
);

const findAll = () => {
    return Doacao.findAll()
};

const findById = (id) => {
    return Doacao.findByPk(id, {
        attributes : ['id', 'quantidade', 'descricao', 'data_doacoes', 'empresas_id', 'usuarios_id', 'tp_doacoes_id']
    })
};

const findByDescricao = (descricao) => {
    return Doacao.findAll({
        where : {descricao} 
    });
};

const findByData = (data_doacoes) => {
    return Doacao.findAll({
        where : {data_doacoes}
    });
};

const findByUsuarioId = (usuarios_id) => {
    return Doacao.findAll({
        where : {usuarios_id}
    });
};

const findByEmpresaId = (empresas_id) => {
    return Doacao.findAll({
        where : {empresas_id}
    });
};

const findByTipoDoacaoId = (tp_doacoes_id) => {
    return Doacao.findAll({
        where : {tp_doacoes_id}
    });
};

const createDoacao = (quantidade, descricao, data_doacoes, empresas_id, usuarios_id, tp_doacoes_id) => {
    return Doacao.create({
        quantidade : quantidade,
        descricao : descricao,
        data_doacoes : data_doacoes,
        empresas_id : empresas_id,
        usuarios_id : usuarios_id,
        tp_doacoes_id : tp_doacoes_id
    })
};

const updateQuantidade = (id, quantidade) =>{
    return Doacao.update(
        {quantidade : quantidade},
        {where : {id : id}}
    )
};

const updateDescricao = (id, descricao) => {
    return Doacao.update(
        {descricao : descricao},
        {where : {id : id}}
    )
};

const updateUsuarioId = (id, usuarios_id) => {
    return Doacao.update(
        {usuarios_id : usuarios_id},
        {where : {id : id}})
};

const updateTipoDoacaoId = (id, tp_doacoes_id) => {
    return Doacao.update(
        {tp_doacoes_id : tp_doacoes_id},
        {where : {id : id}}
    )
};

const deleteDoacao = (id) => {
    return Doacao.destroy({
        where : {id : id}
    })
};

module.exports = {
    Doacao,
    findAll,
    findById,
    findByDescricao,
    findByData,
    findByUsuarioId,
    findByEmpresaId,
    findByTipoDoacaoId,
    createDoacao,
    updateQuantidade,
    updateDescricao,
    updateUsuarioId,
    updateTipoDoacaoId,
    deleteDoacao
};