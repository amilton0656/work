const Recurso = require('../models/mo_recurso')

exports.addRecurso = (req, res, next) => {
  const recurso = req.body

  console.log('recurso', recurso)

  Recurso.create(recurso)
    .then(recurso => {
      res.status(200).json(recurso)
    })
    .catch(err => {
      console.log(err)
      res.status(500).json('Problemas ao cadastrar.')
    })
}

exports.updRecurso = (req, res, next) => {
  const body = req.body
  const id_recurso = body.id_recurso

  Recurso.findByPk(id_recurso)
    .then(recurso => {
      recurso.update(body)
    })
    .then(recurso => {
      res.status(200).json(body)
    })
    .catch(err => {
      console.log(err)
      res.status(500).json('Problemas ao atualizar.')
    })
}

exports.delRecurso = (req, res, next) => {
  const id = req.params.id

  Recurso.findByPk(id)
    .then(recurso => {
      recurso.destroy(recurso)
    })
    .then(id => {
      res.status(200).json(id)
    })
    .catch(err => {
      console.log(err)
      res.status(500).json('Problemas ao excluir.')
    })
}

exports.getRecursoById = (req, res, next) => {
  const id = req.params.id
  console.log('id ', id)
  Recurso.findByPk(id)
    .then(recurso => {
      res.status(200).json(recurso)
    })
    .catch(err => {
      console.log(err)
      res.status(500).json('Recurso não encontrado.')
    })
}

exports.getRecursosNotShow = (req, res, next) => {
  Recurso.sequelize.query(`
  select *
  from recurso
  where notshow is null or
  notshow = 0
  order by id_recurso`)
    .then(recursos => {
      res.status(200).json(recursos[0])
    })
    .catch(err => {
      console.log(err)
      res.status(500).json('Recursos não encontrados.')
    })
}

exports.getAllRecursos = (req, res, next) => {
  Recurso.sequelize.query(`
  select *
  from recurso
  order by id_recurso`)
    .then(recursos => {
      res.status(200).json(recursos[0])
    })
    .catch(err => {
      console.log(err)
      res.status(500).json('Recursos não encontrados.')
    })
}




