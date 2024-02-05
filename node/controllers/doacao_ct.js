const doacaoModel = require('../models/doacao_model');
const usuarioModel = require('../models/usuario_model');

const findAll = async(req, res) => {
   
    await doacaoModel.findAll()
        .then(doacao => {
            res.json(doacao);
            res.status(200);
        }).catch(erro => {
            res.sendStatus(400);
            console.error(erro);
        });
};

const findById = async(req, res) => {
    
    let {id} = req.body;

    await doacaoModel.findById(id)
    .then(doacao => {
        res.json(doacao);
        res.status(200);
    }).catch(erro => {
        res.sendStatus(400);
        console.error(erro);
    })
};

const findByDescricao = async(req, res) => {
    
    let {descricao} = req.body;
    
    await doacaoModel.findByDescricao(descricao)
    .then(doacao => {
        res.json(doacao);
        res.status(200);
    }).catch(erro => {
        res.sendStatus(400);
        console.error(erro);
    })
};

const findByData = async(req, res) => {
    
    let {data_doacoes} = req.body;
    
    await doacaoModel.findByData(data_doacoes)
    .then(doacao => {
        res.json(doacao);
        res.status(200);
    }).catch(erro => {
        res.sendStatus(400);
        console.error(erro);
    })
};

const findByEmpresaId = async(req, res) => {
    
    let {empresas_id} = req.body;

    await doacaoModel.findByEmpresaId(empresas_id)
    .then(doacao => {
        res.json(doacao);
        res.status(200);
    }).catch(erro => {
        res.sendStatus(400);
        console.error(erro);
    })
};

const findByUsuarioId = async(req, res) => {

    let {usuarios_id} = req.body;

    await doacaoModel.findByUsuarioId(usuarios_id)
    .then(doacao => {
        res.json(doacao);
        res.status(200);
    }).catch(erro => {
        res.sendStatus(400);
        console.error(erro);
    })
};

const findByTipoDoacaoId = async(req, res) => {
    
    let {tp_doacoes_id} = req.body;

    await doacaoModel.findByTipoDoacaoId(tp_doacoes_id)
    .then(doacao => {
        res.json(doacao);
        res.status(200);
    }).catch(erro => {
        res.sendStatus(400);
        console.error(erro);
    })
};

const findByTopFour = async(req, res) => {

    await doacaoModel.findByTopFour()
    .then(doacao => {
        res.json(doacao);
        res.status(200);
    }).catch(erro => {
        res.sendStatus(400);
        console.error(erro);
    })
};

const createDoacao = async (req, res) => {

    let { quantidade, descricao, data_doacoes, empresas_id, email, tp_doacoes_id } = req.body; 

    let user = await usuarioModel.findByEmail(email);

   await doacaoModel.createDoacao(
        quantidade,
        descricao,
        data_doacoes,
        empresas_id,
        user.id,
        tp_doacoes_id
    ).then((doacao) => {
        console.log("Id da doação gerado automaticamente:", doacao.id);
        res.status(200)
        res.json({ mensagem: "doação realizada com sucesso" });
    }).catch(erro => {
        res.sendStatus(204);
        console.error(erro)
    })
};

const updateQuantidade = async (req, res) => {
    
    let {id, quantidade} = req.body;

    await doacaoModel.updateQuantidade(id, quantidade)
    .then(doacao => {
        res.json(doacao);
        res.status(200);
        console.log("Doação alterada com sucesso!");
    }).catch(erro => {
        res.sendStatus(400);
        console.error(erro)
    })
};
const updateDescricao = async (req, res) => {
    
    let {id, descricao} = req.body;

    await doacaoModel.updateDescricao(id, descricao)
    .then(doacao => {
        res.json(doacao);
        res.status(200);
        console.log("Descrição alterada com sucesso!");
    }).catch(erro => {
        res.sendStatus(400);
        console.error(erro)
    })
};
const updateUsuarioId = async (req, res) => {
    
    let {id, usuarios_id} = req.body;

    await doacaoModel.updateUsuarioId(id, usuarios_id)
    .then(doacao => {
        res.json(doacao);
        res.status(200);
        console.log("Usuario alterado com sucesso!");
    }).catch(erro => {
        res.sendStatus(400);
        console.error(erro)
    })
};
const updateTipoDoacaoId = async (req, res) => {
    
    let {id, tp_doacoes_id} = req.body;

    await doacaoModel.updateTipoDoacaoId(id, tp_doacoes_id)
    .then(doacao => {
        res.json(doacao);
        res.status(200);
        console.log("Tipo da doação alterado com sucesso!");
    }).catch(erro => {
        res.sendStatus(400);
        console.error(erro)
    })
};

const deleteDoacao = async(req, res) => {

    let {id} = req.body;

    await doacaoModel.deleteDoacao(id)
    .then(doacao => {
        res.json(doacao);
        res.status(200);
        console.log("Doação excluída com sucesso!");
    }).catch(erro => {
        res.sendStatus(400);
        console.error(erro)
    })
};

module.exports = {
    findAll,
    findById,
    findByDescricao,
    findByData,
    findByEmpresaId,
    findByUsuarioId,
    findByTipoDoacaoId,
    findByTopFour,
    createDoacao,
    updateQuantidade,
    updateDescricao,
    updateUsuarioId,
    updateTipoDoacaoId,
    deleteDoacao
};