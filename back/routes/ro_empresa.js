const express = require('express');

const Controller = require('../controllers/co_empresa')

const md_auth = require('../util/autenticacao')

const router = express.Router()

router.get('/empresas', Controller.getAllEmpresas)
router.get('/empresa/:id', md_auth.auth, Controller.getEmpresaById)
router.post('/empresa/add', md_auth.auth, Controller.addEmpresa)
router.put('/empresa/upd', md_auth.auth, Controller.updEmpresa)
router.delete('/empresa/del/:id', md_auth.auth, Controller.delEmpresa)


module.exports = router
