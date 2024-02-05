const express = require('express');
const router = express.Router();
const doacaoController = require('../controllers/doacao_ct');


router.get('/doacoes', doacaoController.findAll);  //OK
router.get('/doacao', doacaoController.findById);  //OK
router.get('/doacao-descricao', doacaoController.findByDescricao);  //OK
router.get('/doacao-data', doacaoController.findByData);  // ERRO PUXA TODAS AS DATAS
router.get('/doacao-empresa', doacaoController.findByEmpresaId);  //OK
router.get('/doacao-usuario', doacaoController.findByUsuarioId);  //OK
router.get('/doacao-tipo-doacao', doacaoController.findByTipoDoacaoId);  //OK
router.get('/doacao-top-4', doacaoController.findByTopFour);  // Error: read ECONNRESET
router.post('/doacao', doacaoController.createDoacao);  //OK
router.put('/doacao-quantidade', doacaoController.updateQuantidade); //OK (ALTERA MAS NÃO TRÁS RETORNO)
router.put('/doacao-descricao', doacaoController.updateDescricao); //OK (ALTERA MAS NÃO TRÁS RETORNO)
router.put('/doacao-usuario', doacaoController.updateUsuarioId); //OK (ALTERA MAS NÃO TRÁS RETORNO)
router.put('/doacao-tipo-doacao', doacaoController.updateTipoDoacaoId); //OK (ALTERA MAS NÃO TRÁS RETORNO)
router.delete('/doacao-delete', doacaoController.deleteDoacao); //OK (ALTERA MAS NÃO TRÁS RETORNO)

module.exports = router;