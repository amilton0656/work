const express = require('express')

const controller = require('../controllers/co_usuarioEmpresa')

const md_auth = require('../util/autenticacao')

const router = express.Router()

router.get('/usuarioempresas/:id_usuario', controller.getEmpresasByUsuario)
router.post('/usuarioempresas', controller.addUsuarioEmpresa)
router.put('/usuarioempresas/:id', controller.updUsuarioEmpresa)
router.delete('/usuarioempresas/:id', controller.delUsuarioEmpresa)

module.exports = router
