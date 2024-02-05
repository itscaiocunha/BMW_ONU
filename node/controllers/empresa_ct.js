const empresaModel = require('../models/empresa_model');
const bcrypt = require('bcrypt');
const saltRounds = 10;

const findAll = async (req, res) => {
    await empresaModel.findAll()
        .then(empresas => {
            res.json(empresas);
            res.status(200);
        }).catch(erro => {
            res.sendStatus(204);
            console.error(erro)
        });
};

const findById = async (req, res) => {

    let { id } = req.body;

    await empresaModel.findById(id)
        .then(empresa => {
            res.json(empresa);
            res.status(200);
        }).catch(erro => {
            res.sendStatus(400);
            console.error(erro);
        })
};

const findByNome = async (req, res) => {
    let { nome } = req.body;

    await empresaModel.findByNome(nome)
        .then(empresa => {
            res.json(empresa);
            res.status(200);
        }).catch(erro => {
            res.sendStatus(400);
            console.error(erro);
        })
};

const findByCep = async (req, res) => {
    let { cep } = req.body;

    await empresaModel.findByCep(cep)
        .then(empresa => {
            res.json(empresa);
            res.status(200);
        }).catch(erro => {
            res.sendStatus(400);
            console.error(erro);
        })
};

const findByCidade = async (req, res) => {
    let { cidade } = req.body;

    await empresaModel.findByCidade(cidade)
        .then(empresa => {
            res.json(empresa);
            res.status(200);
        }).catch(erro => {
            res.sendStatus(400);
            console.error(erro);
        })
};

const findByEndereco = async (req, res) => {
    let { rua, numero, bairro } = req.body;

    await empresaModel.findByEndereco(rua, numero, bairro)
        .then(empresa => {
            res.json(empresa);
            res.status(200);
        }).catch(erro => {
            res.sendStatus(400);
            console.error(erro);
        })
};

const findByTelefone = async (req, res) => {
    let { tel } = req.body;

    await empresaModel.findByTelefone(tel)
        .then(empresa => {
            res.json(empresa);
            res.status(200);
        }).catch(erro => {
            res.sendStatus(400);
            console.error(erro);
        })
};

const createEmpresa = async (req, res) => {

    let { nome, cnpj, email, senha, cep, cidade, rua, numero, bairro, tel } = req.body;

    const hash = bcrypt.hashSync(senha, saltRounds);

    await empresaModel.createEmpresa(
        nome,
        cnpj,
        email,
        hash,
        cep,
        cidade,
        rua,
        numero,
        bairro,
        tel
    ).then((empresa) => {
        console.log("Id da empresa gerado automaticamente:", empresa.id);
        res.status(200)
        res.json({ mensagem: "cadastro realizado com sucesso" });
    }).catch(erro => {
        res.sendStatus(404);
        console.error(erro);
    });
};

const updateNome = async (req, res) => {
    try {
        const { id, nome } = req.body;
        const empresa = await empresaModel.updateNome(nome, id); // Corrigido para chamar a função do modelo corretamente

        if (empresa[0] === 1) {
            console.log("Nome atualizado com sucesso!", nome);
            res.status(200).json({ mensagem: "Nome atualizado com sucesso!" });
        } else {
            console.log("Empresa não encontrada ou nome já atualizado.", id);
            res.status(404).json({ erro: "Empresa não encontrada ou nome já atualizado." });
        }
    } catch (erro) {
        console.error(erro);
        res.status(400).json({ erro: "Erro ao atualizar nome da empresa." });
    }
};


const updateSenha = async (req, res) => {
    try {
        const { id, senha } = req.body;
        const empresa = await empresaModel.updateSenha(id, senha);

        if (empresa[0] === 1) {
            console.log("Senha atualizada com sucesso!");
            res.status(200).json({ mensagem: "Senha atualizada com sucesso!" });
        } else {
            console.log("Empresa não encontrada ou Senha já atualizada.", id);
            res.status(404).json({ erro: "Empresa não encontrada ou Senha já atualizada." });
        }
    } catch (erro) {
        console.error(erro);
        res.status(400).json({ erro: "Erro ao atualizar Senha da empresa." });
    }
};

const updateCep = async (req, res) => {

    let { id, cep} = req.body;

    await empresaModel.updateCep(id, cep)
        .then(empresa => {
            res.json({mensagem : "CEP atualizado com sucesso!"});
            res.status(200);
            console.log("CEP alterado com sucesso!");
        }).catch(erro => {
            res.sendStatus(400);
            console.error(erro);
        })
};

const updateCidade = async (req, res) => {

    let { id, cidade } = req.body;

    await empresaModel.updateCidade(id, cidade)
        .then(empresa => {
            res.json({mensagem : "Cidade atualizada com sucesso!"});
            res.status(200);
            console.log("Cidade alterada com sucesso!");
        }).catch(erro => {
            res.sendStatus(400);
            console.error(erro);
        })
};

const updateEndereco = async (req, res) => {

    let { id, rua, numero, bairro } = req.body;

    await empresaModel.updateEndereco(id, rua, numero, bairro)
        .then(empresa => {
            res.json({mensagem : "Endereço alterado com sucesso!"});
            res.status(200);
            console.log("Endereço alterado com sucesso!");
        }).catch(erro => {
            res.sendStatus(400);
            console.error(erro);
        })
};

const updateTelefone = async (req, res) => {

    let { id, tel } = req.body;

    await empresaModel.updateTelefone(id, tel)
        .then(empresa => {
            res.json({mensagem : "Telefone alterado com sucesso" });
            res.status(200);
            console.log("Endereço alterado com sucesso!");
        }).catch(erro => {
            res.sendStatus(400);
            console.error(erro)
        })
};

const deleteEmpresa = async (req, res) => {

    let { cnpj, email, senha } = req.body;

    await empresaModel.deleteEmpresa(cnpj, email, senha)
        .then(empresa => {
            res.json({mensagem : "Conta excluída com sucesso"});
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
    findByEndereco,
    findByTelefone,
    findByCep,
    findByCidade,
    createEmpresa,
    updateNome,
    updateSenha,
    updateCep,
    updateCidade,
    updateEndereco,
    updateTelefone,
    deleteEmpresa
};