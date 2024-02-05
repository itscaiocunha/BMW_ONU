const usuarioModel = require('../models/usuario_model');
const empresaModel = require('../models/empresa_model');
const SECRET = 'RozBife';
const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');


function verifyJWTUsuario(req, res, next){
    const token = req.headers['x-access-token'];

    jwt.verify(token, SECRET, (err, decoded) => {
        if(err){
            return res.status(401).end();
        }
        req.usuarioId = decoded.usuarioId;
        next()
    });
};

function verifyJWTEmpresa(req, res, next){
    const token = req.headers['x-access-token'];

    jwt.verify(token, SECRET, (err, decoded) => {
        if(err){
            return res.status(401).end();
        }
        req.empresaId = decoded.empresaId;
        next()
    });
}

const loginUsuarioEmail = async (req, res) => {

   let { email, senha } = req.body;

   const usuario = await usuarioModel.loginUsuarioEmail(email);
   const usuarioId = usuario.id;
   const compara = bcrypt.compareSync(senha, usuario.senha);
   
    if(compara){
        const token = jwt.sign({usuarioId : usuarioId}, SECRET, { expiresIn : 900 });
        return res.json({mensagem : "Login concluido com sucesso!", auth : true, token});
    }else{
        return res.json({mensagem : "Email ou senha invalidos :("})
    }
};

const loginUsuarioCpf = async (req, res) => {

    let { cpf, senha } = req.body;

    const usuario = await usuarioModel.loginUsuarioCpf(cpf);
    const usuarioId = usuario.id;
    const compara = bcrypt.compareSync(senha, usuario.senha);
   
    if(compara){
        const token = jwt.sign({usuarioId : usuarioId}, SECRET, { expiresIn : 900 });
        return res.json({mensagem : "Login concluido com sucesso!", auth : true, token});
    }else{
        return res.json({mensagem : "CPF ou senha invalidos :("})
    }
};

 const loginEmpresaCnpj = async (req, res) => {

    let { cnpj, senha } = req.body;
 
    const empresa = await empresaModel.loginEmpresaCnpj(cnpj)
    const empresaId = empresa.id;
    const compara = bcrypt.compareSync(senha, empresa.senha);
 
     if(compara){
        const token = jwt.sign({empresaId : empresaId}, SECRET, {expiresIn : 900});
         return res.json({mensagem : "Login concluido com sucesso!", auth : true, token});
     }else{
         return res.json({mensagem : "CNPJ ou senha invalidos :("})
     }
 };

 const loginEmpresaEmail = async (req, res) => {

    let { email, senha } = req.body;
 
    const empresa = await empresaModel.loginEmpresaEmail(email)
    const emoresaId = empresa.id;
    const compara = bcrypt.compareSync(senha, empresa.senha);
 
     if(compara){
        const token = jwt.sign({empresaId : emoresaId}, SECRET, {expiresIn : 900});
        return res.json({mensagem : "Login concluido com sucesso!", auth : true, token});
     }else{
        return res.json({mensagem : "Email ou senha invalidos :("})
     }
 };

// const logoutUsuario = async(req, res) => {
//     blacklist.push(req.headers['x-access-token']);
//     res.end()
// };

// const logoutEmpresa = async(req, res) => {
//     res.end()
// };

module.exports = {
    verifyJWTUsuario,
    verifyJWTEmpresa,
    loginUsuarioEmail,
    loginUsuarioCpf,
    loginEmpresaCnpj,
    loginEmpresaEmail,
    // logoutUsuario,
    // logoutEmpresa
}