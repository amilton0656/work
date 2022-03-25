const express = require('express');

const indiceController = require('../controllers/co_recurso')

const md_auth = require('../util/autenticacao')

const router = express.Router()

router.get('/recursos', indiceController.getRecursos)
// router.get('/indice/:id', indiceController.getIndiceById)
// router.get('/indice/nome/:nome', indiceController.getIndiceByNome)
// router.post('/indice', md_auth.auth, indiceController.addIndice)
// router.put('/indice/:id', md_auth.auth, indiceController.updIndice)
// router.delete('/indice/:id', md_auth.auth, indiceController.delIndice)


module.exports = router
