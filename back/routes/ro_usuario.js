const express = require('express')

const controller = require('../controllers/co_usuario')

const md_auth = require('../util/autenticacao')

const router = express.Router()

router.get('/usuarios', controller.getAllUsuarios)
router.get('/usuario/:id_usuario', controller.getUsuario)
router.post('/usuario', controller.addUsuario)
router.put('/usuario/:id', controller.updUsuario)
router.delete('/usuario/:id', controller.delUsuario)
router.post('/auth', controller.getAuth)
router.post('/login', controller.getAuthByCpf)
// router.post('/jwt', controller.getJwt)
router.get('/', controller.servidorON)

module.exports = router
