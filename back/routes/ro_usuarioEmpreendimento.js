const express = require('express')

const controller = require('../controllers/co_usuarioEmpreendimento')

const md_auth = require('../util/autenticacao')

const router = express.Router()

router.get('/usuarioempreendimentos/:id_usuario', controller.getEmpreendimentosByUsuario)
router.post('/usuarioempreendimentos', controller.addUsuarioEmpreendimento)
router.delete('/usuarioempreendimentos/:usuario/:empreendimento', controller.delUsuarioEmpreendimento)

module.exports = router
