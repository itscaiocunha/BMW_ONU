const usuarioModel = require('../models/usuario_model');
const bcrypt = require('bcrypt');
const saltRounds = 10;

const findAll = async(req, res) => {
    await usuarioModel.findAll()
        .then(usuarios => {
            res.json(usuarios);
            res.status(200);
        }).catch(erro => {
            res.sendStatus(204);
            console.error(erro);
        });
};

const findById = async(req, res) => {

    let {id} = req.body;
    
    await usuarioModel.findById(id)
    .then(usuario => {
        res.json(usuario);
        res.status(200);
    }).catch(erro => {
        res.sendStatus(400);
        console.error(erro);
    })
};

const findByNome = async(req, res) => {
   
    let {nome} = req.body;

    await usuarioModel.findByNome(nome)
    .then(usuario => {
        res.json(usuario);
        res.status(200);
    }).catch(erro => {
        res.sendStatus(400);
        console.error(erro);
    })
};

const findBySobrenome = async(req, res) => {
    
    let {sobrenome} = req.body;

    await usuarioModel.findBySobrenome(sobrenome)
    .then(usuario => {
        res.json(usuario);
        res.status(200);
    }).catch(erro => {
        res.sendStatus(400);
        console.error(erro);
    })
};

const findByNick = async(req, res) => {
    
    let {nick} = req.body;

    await usuarioModel.findByNick(nick)
    .then(usuario => {
        res.json(usuario);
        res.status(200);
    }).catch(erro => {
        res.sendStatus(400);
        console.error(erro);
    })
};

const findByTelefone = async(req, res) => {
    
    let {tel} = req.body;

    await usuarioModel.findByTelefone(tel)
    .then(usuario => {
        res.json(usuario);
        res.status(200);
    }).catch(erro => {
        res.sendStatus(400);
        console.error(erro);
    })
};

const findByCep = async(req, res) => {
    
    let {cep} = req.body;

    await usuarioModel.findByCep(cep)
    .then(usuarios => {
        res.json(usuarios);
        res.status(200);
    }).catch(erro => {
        res.sendStatus(400);
        console.error(erro);
    })
};

const createUsuario = async(req, res) => {

    let { nome, sobrenome, dt_nascimento, cpf, tel, cep, nick, email, senha } = req.body;
    
    const hash = bcrypt.hashSync(senha, saltRounds);

    await usuarioModel.createUsuario(
        nome,
        sobrenome,
        dt_nascimento,
        cpf,
        tel,
        cep,
        nick,
        email,
        hash
    ).then((usuario) => {
        console.log("Id do usuário gerado automaticamente:", usuario.id);
        res.status(200)
        res.json({ mensagem : "cadastro realizado com sucesso" });
    }).catch(erro => {
        res.sendStatus(204);
        console.error(erro)
    });
};

const updateTelefone = async (req, res) => {

    let { id, tel } = req.body;

    await usuarioModel.updateTelefone(id, tel)
        .then(usuario => {
            res.json({mensagem : "Telefone alterado com sucesso."});
            res.status(200);
            console.log("Telefone alterado com sucesso!");
        }).catch(erro => {
            res.sendStatus(400);
            console.error(erro)
        })
};

const updateCep = async (req, res) => {

    let { id, cep } = req.body;

    await usuarioModel.updateCep(id, cep)
        .then(usuario => {
            res.json({mensagem : "Cep alterado com sucesso."});
            res.status(200);
            console.log("Cep alterado com sucesso!");
        }).catch(erro => {
            res.sendStatus(400);
            console.error(erro)
        })
};


const updateNick = async(req , res) => {

    let { id, nick } = req.body;

    await usuarioModel.updateNick(id, nick)
    .then((usuario) => {
        res.status(200);
        res.json({ mensagem : "Nick atualizado com sucesso!" })
    }).catch((erro) => {
        res.sendStatus(400);
        res.json(erro);
    })
};

const updateSenha = async (req, res) => {
    try {
        const { id, senha } = req.body;
        const usuario = await usuarioModel.updateSenha(id, senha);

        if (usuario[0] === 1) {
            console.log("Senha atualizada com sucesso!", senha);
            res.status(200).json({ mensagem: "Senha atualizada com sucesso!" });
        } else {
            console.log("Usuário não encontrada ou Senha já atualizada.", id);
            res.status(404).json({ erro: "Usuário não encontrada ou Senha já atualizada"});
        }
    } catch (erro) {
        console.error(erro);
        res.status(400).json({ erro: "Erro ao atualizar Senha da usuário." });
    }
};

const deleteUsuario = async (req, res) => {

    let { cpf, email, senha } = req.body;

    await usuarioModel.deleteUsuario(cpf, email, senha)
        .then(usuario => {
            res.json({ mensagem : "Conta excluída com sucesso "});
            res.status(200);
            console.log("Sua conta foi excluída com sucesso!");
        }).catch(erro => {
            res.sendStatus(400);
            console.error(erro)
        })
};

module.exports = {
    findAll,
    findById,
    findByNome,
    findBySobrenome,
    findByNick,
    findByTelefone,
    findByCep,
    createUsuario,
    updateTelefone,
    updateCep,
    updateNick,
    updateSenha,
    deleteUsuario
};