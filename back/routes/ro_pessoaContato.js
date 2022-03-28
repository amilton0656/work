const express = require('express');

const Controller = require('../controllers/co_pessoaContato')

const md_auth = require('../util/autenticacao')

const router = express.Router();

router.get('/pessoacontatos/id/:id', md_auth.auth, Controller.getPessoaContatoById)
router.get('/pessoacontatos/:id', md_auth.auth, Controller.getPessoaContatos)

router.post('/pessoacontato/add', md_auth.auth, Controller.addPessoaContato)
router.put('/pessoacontato/upd/', md_auth.auth, Controller.updPessoaContato)
router.delete('/pessoacontato/del/:id', md_auth.auth, Controller.delPessoaContato)


module.exports = router
