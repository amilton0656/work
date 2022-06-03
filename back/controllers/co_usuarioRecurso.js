const UsuarioRecurso = require('../models/mo_usuarioRecurso')

exports.updUsuarioRecurso = (req, res, next) => {
  const registro = req.body
  const id_usuario = registro.id_usuario
  const id_recurso = registro.id_recurso

  UsuarioRecurso.sequelize.query(`
  select * 
  from usuario_recurso

  where id_usuario = :id_usuario
  and id_recurso = :id_recurso`,
  { replacements: { id_usuario, id_recurso } })
  .then(indiceData => {
    if (indiceData[0].length > 0) {
      UsuarioRecurso.sequelize.query(`
      delete 
      from usuario_recurso
    
      where id_usuario = :id_usuario
      and id_recurso = :id_recurso`,
      { replacements: { id_usuario, id_recurso } })
      .then(resp => {
        console.log('deletou')
      })
    } else {
      UsuarioRecurso.create(registro)
      console.log('inseriu')
    }
  })
  .then(resp => {
    res.status(200).json(resp)
  })
  .catch(err => {
    console.log(err)
    res.status(500).json('Erro ao inserir.')
  })
}

exports.getRecursosByUsuario = (req, res, next) => {
  const id_usuario = req.params.id_usuario
  UsuarioRecurso.sequelize.query(`
    select rec.* 
    from usuario_recurso urec

    left join recurso rec
    on rec.id_recurso = urec.id_recurso

    where urec.id_usuario = :id_usuario
    and rec.notshow <> 1`,
    { replacements: { id_usuario } })
    .then(indiceDatas => {
      res.status(200).json(indiceDatas[0])
    })
    .catch(err => {
      console.log(err)
      res.status(500).json('Recurso não encontrado.')
    })
}

exports.getRecursosByUsuarioAll = (req, res, next) => {
  const id_usuario = req.params.id_usuario
  UsuarioRecurso.sequelize.query(`
  select urec.id_recurso as id, rec.*
  from recurso rec
  
  left join usuario_recurso urec
  on urec.id_recurso = rec.id_recurso
  and urec.id_usuario = :id_usuario
  and rec.notshow <> 1`,
    { replacements: { id_usuario } })
    .then(indiceDatas => {
      res.status(200).json(indiceDatas[0])
    })
    .catch(err => {
      console.log(err)
      res.status(500).json('Recursos não encontrados.')
    })
}