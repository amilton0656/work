const express = require('express');

const controller = require('../controllers/co_empreendimento')

const md_auth = require('../util/autenticacao')

const router = express.Router();

router.get('/empreendimentos', controller.getEmpreendimentos)
router.get('/empreendimento/:id', controller.getEmpreendimentoById)
router.get('/empreendimento/nome/:nome', controller.getEmpreendimentoByNome)
router.post('/empreendimento', md_auth.auth, controller.addEmpreendimento)
router.put('/empreendimento/:id', md_auth.auth, controller.updEmpreendimento)
router.delete('/empreendimento/:id', md_auth.auth, controller.delEmpreendimento)

module.exports = router
