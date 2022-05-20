const express = require('express')

const controller = require('../controllers/co_usuarioRecurso')

const md_auth = require('../util/autenticacao')

const router = express.Router()

router.get('/usuariorecursos/:id_usuario', controller.getRecursosByUsuario)
router.get('/usuariorecursosall/:id_usuario', controller.getRecursosByUsuarioAll)
router.post('/usuariorecursos', controller.addUsuarioRecurso)
router.delete('/usuariorecursos/:usuario/:recurso', controller.delUsuarioRecurso)

module.exports = router
