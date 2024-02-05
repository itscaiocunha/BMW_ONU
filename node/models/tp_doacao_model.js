const sequelize = require('sequelize');
const conn = require('../database/connection');

const tipoDoacao = conn.define('tp_doacoes',
    {
        material : {
            type : sequelize.STRING,
            allowNull : false
        },
        pontos_doacoes : {
            type : sequelize.INTEGER,
            allowNull : false
        },
        unidade_medida : {
            type : sequelize.STRING,
            allowNull : false
        }
    }
);

const findAll = () => {
    return tipoDoacao.findAll()
};

const findById = (id) => {
    return tipoDoacao.findByPk(id)
};

const findByMaterial = (material) => {
    return tipoDoacao.findOne({
        where : {material}
    });
};

const findByPtsDoacao = (pontos_doacoes) => {
    return tipoDoacao.findAll ({
        where : {pontos_doacoes}
    });
};

const findByUnMedida = (unidade_medida) => {
    return tipoDoacao.findAll ({
        where : {unidade_medida}
    });
};

module.exports = {
    tipoDoacao,
    findAll,
    findById,
    findByMaterial,
    findByPtsDoacao,
    findByUnMedida
};