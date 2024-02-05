const express = require('express');
const router = express.Router();
const empresaController = require('../controllers/empresa_ct');
const login = require('../controllers/login_ct');


router.get('/empresas', empresaController.findAll);  //ok
router.get('/empresa',login.verifyJWTEmpresa ,empresaController.findById); //ok
router.get('/empresa-nome',login.verifyJWTEmpresa ,empresaController.findByNome);  //ok
router.get('/empresa-cep',login.verifyJWTEmpresa ,empresaController.findByCep);  //ok
router.get('/empresa-cidade',login.verifyJWTEmpresa ,empresaController.findByCidade);  //ok
router.get('/empresa-endereco',login.verifyJWTEmpresa ,empresaController.findByEndereco);  //ok
router.get('/empresa-telefone',login.verifyJWTEmpresa ,empresaController.findByTelefone);  //ok
router.post('/empresa', empresaController.createEmpresa);  // ok
router.post('/login-empresa-cnpj', login.loginEmpresaCnpj); //ok
router.post('/login-empresa-email', login.loginEmpresaEmail); //ok
router.put('/empresa-nome',login.verifyJWTEmpresa ,empresaController.updateNome);  //ok
router.put('/empresa-senha',login.verifyJWTEmpresa ,empresaController.updateSenha);  //ok
router.put('/empresa-cep',login.verifyJWTEmpresa ,empresaController.updateCep); //ok
router.put('/empresa-cidade',login.verifyJWTEmpresa ,empresaController.updateCidade); //ok
router.put('/empresa-endereco',login.verifyJWTEmpresa ,empresaController.updateEndereco); //ok
router.put('/empresa-telefone',login.verifyJWTEmpresa ,empresaController.updateTelefone); //ok
router.delete('/empresa-delete',login.verifyJWTEmpresa ,empresaController.deleteEmpresa); //ok

module.exports = router;