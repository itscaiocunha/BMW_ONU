const tipoDoacaoModel = require('../models/tp_doacao_model');

const findAll = async (req, res) =>{
    await tipoDoacaoModel.findAll()
        .then(tipoDoacao => {
            res.json(tipoDoacao);
            res.status(200);
        }).catch(erro => {
            res.sendStatus(400);
            console.error(erro);
        });
};

const findById = async (req, res) => {
    
    let {id} = req.body;
    
    await tipoDoacaoModel.findById(id)
    .then(tipoDoacao => {
        res.json(tipoDoacao);
        res.status(200);
    }).catch(erro => {
        res.sendStatus(400);
        console.error(erro);
    });
};

const findByMaterial = async (req, res) => {

    let {material} = req.body;

    await tipoDoacaoModel.findByMaterial(material)
    .then(tipoDoacao => {
        res.json(tipoDoacao);
        res.status(200);
    }).catch(erro => {
        res.sendStatus(400);
        console.error(erro);
    });
};

const findByPtsDoacao = async (req, res) => {

    let {pontos_doacoes} = req.body;

    await tipoDoacaoModel.findByPtsDoacao(pontos_doacoes)
    .then(tipoDoacao => {
        res.json(tipoDoacao);
        res.status(200);
    }).catch(erro => {
        res.sendStatus(400);
        console.error(erro);
    });
};

const findByUnMedida = async (req, res) => {

    let {unidade_medida} = req.body;

    await tipoDoacaoModel.findByUnMedida(unidade_medida)
    .then(tipoDoacao => {
        res.json(tipoDoacao);
        res.status(200);
    }).catch(erro => {
        res.sendStatus(400);
        console.error(erro);
    });
};

module.exports = {
    findAll,
    findById,
    findByMaterial,
    findByPtsDoacao,
    findByUnMedida
};