const express = require('express');

const controller = require('../controllers/co_pessoaComplemento')

const md_auth = require('../util/autenticacao')

const router = express.Router();

router.post('/pessoacomplemento/add', md_auth.auth, controller.addPessoaComplemento)
router.put('/pessoacomplemento/upd', md_auth.auth, controller.updPessoaComplemento)
router.delete('/pessoacomplemento/del/:id', md_auth.auth, controller.delPessoaComplemento)
router.get('/pessoacomplemento/id/:id_pessoa', md_auth.auth, controller.getPessoaComplementoByIdPessoa)

module.exports = router
