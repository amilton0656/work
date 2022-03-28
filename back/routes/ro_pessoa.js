const express = require('express');

const controller = require('../controllers/co_pessoa')

const md_auth = require('../util/autenticacao')

const router = express.Router();

router.get('/pessoas', md_auth.auth, controller.getPessoas)
router.get('/grupopessoas', md_auth.auth, controller.getGrupoPessoas)
router.get('/pessoa/:id', md_auth.auth, controller.getPessoaById)
router.get('/pessoacompleta/:id', md_auth.auth, controller.getPessoaCompletaById)
// router.get('/pessoacompleta/:id', md_auth.auth, controller.getPessoaCompletaById)
router.get('/pessoa/nome/:nome', md_auth.auth, controller.getPessoaByNome)
router.get('/pessoa/cpf/:cpf', md_auth.auth, controller.getPessoaByCpf)
router.get('/pessoa/cnpj/:cnpj', md_auth.auth, controller.getPessoaByCnpj)
router.post('/pessoa/add', md_auth.auth, controller.addPessoa)
router.put('/pessoa/upd', md_auth.auth, controller.updPessoa)
router.delete('/pessoa/del/:id', md_auth.auth, controller.delPessoa)

module.exports = router
