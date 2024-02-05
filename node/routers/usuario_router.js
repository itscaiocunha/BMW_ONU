const express = require('express');
const router = express.Router();
const usuarioController = require('../controllers/usuario_ct');
const login = require('../controllers/login_ct');


router.get('/usuarios',login.verifyJWTEmpresa, usuarioController.findAll);
router.get('/usuario',login.verifyJWTUsuario, usuarioController.findById);
router.get('/usuario-nome',login.verifyJWTUsuario, usuarioController.findByNome);
router.get('/usuario-sobrenome',login.verifyJWTUsuario, usuarioController.findBySobrenome);
router.get('/usuario-nick',login.verifyJWTUsuario, usuarioController.findByNick);
router.get('/usuario-telefone',login.verifyJWTUsuario, usuarioController.findByTelefone);
router.get('/usuarios-cep',login.verifyJWTUsuario, usuarioController.findByCep);
router.post('/usuario', usuarioController.createUsuario);
router.post('/login-usuario-email', login.loginUsuarioEmail);
router.post('/login-usuario-cpf', login.loginUsuarioCpf);
router.put('/usuario-telefone',login.verifyJWTUsuario, usuarioController.updateTelefone);
router.put('/usuario-cep',login.verifyJWTUsuario, usuarioController.updateCep);
router.put('/usuario-nick',login.verifyJWTUsuario, usuarioController.updateNick);
router.put('/usuario-senha', login.verifyJWTUsuario, usuarioController.updateSenha);
router.delete('/usuario', login.verifyJWTUsuario,usuarioController.deleteUsuario);

module.exports = router;