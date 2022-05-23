const express = require('express')

const controller = require('../controllers/co_usuarioRecurso')

const md_auth = require('../util/autenticacao')

const router = express.Router()

router.get('/usuariorecursos/:id_usuario', controller.getRecursosByUsuario)
router.get('/usuariorecursosall/:id_usuario', controller.getRecursosByUsuarioAll)
router.post('/usuariorecurso', controller.updUsuarioRecurso)

module.exports = router
