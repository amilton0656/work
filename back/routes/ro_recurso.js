const express = require('express');

const Controller = require('../controllers/co_recurso')

const md_auth = require('../util/autenticacao')

const router = express.Router()

router.get('/recursos', md_auth.auth, Controller.getAllRecursos)
router.get('/recursos/not', md_auth.auth, Controller.getRecursosNotShow)
router.get('/recurso/:id', md_auth.auth, Controller.getRecursoById)
router.post('/recurso/add', md_auth.auth, Controller.addRecurso)
router.put('/recurso/upd', md_auth.auth, Controller.updRecurso)
router.delete('/recurso/del/:id', md_auth.auth, Controller.delRecurso)


module.exports = router
