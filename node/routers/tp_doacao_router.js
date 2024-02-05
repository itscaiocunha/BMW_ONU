const express = require('express');
const router = express.Router();
const tpDoacaoController = require('../controllers/tp_doacao_ct');


router.get('/tipos-doacao', tpDoacaoController.findAll);
router.get('/tipo-doacao', tpDoacaoController.findById);
router.get('/tipo-doacao-material', tpDoacaoController.findByMaterial);
router.get('/tipo-doacao-pontos', tpDoacaoController.findByPtsDoacao);
router.get('/tipo-doacao-unidade-medida', tpDoacaoController.findByUnMedida);

module.exports = router;