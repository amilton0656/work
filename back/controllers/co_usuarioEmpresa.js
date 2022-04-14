const UsuarioEmpresa = require('../models/mo_usuarioEmpresa')

exports.addUsuarioEmpresa = (req, res, next) => {
  const indiceData = req.body
  UsuarioEmpresa.create(indiceData)
    .then(indiceData => {
      res.status(200).json(indiceData)
    })
    .catch(err => {
      console.log(err)
      res.status(500).json('Data não encontrada.')
    })
}

exports.updUsuarioEmpresa = (req, res, next) => {
  const id = req.params.id
  const body = req.body

  UsuarioEmpresa.findByPk(id)
    .then(indiceData => {
      indiceData.update(body)
    })
    .then(indiceData => {
      res.status(200).json(body)
    })
    .catch(err => {
      console.log(err)
      res.status(500).json('Data não encontrada.')
    })
}

exports.delUsuarioEmpresa = (req, res, next) => {
  const id = req.params.id

  UsuarioEmpresa.findByPk(id)
    .then(indiceData => {
      indiceData.destroy(indiceData)
    })
    .then(id => {
      res.status(200).json(id)
    })
    .catch(err => {
      console.log(err)
      res.status(500).json('Data não encontrada.')
    })
}

exports.getEmpresasByUsuario = (req, res, next) => {
  const id_usuario = req.params.id_usuario
  console.log('id_usuario..', id_usuario)
  UsuarioEmpresa.sequelize.query(`
    select usu.*, 
    pes.nome as nomeusuario,
    emp.nm_empresa as nomeempresa
    from usuario_empresa usu

    left join pessoas pes
    on pes.id_pessoa = usu.id_usuario

    left join empresa emp
    on emp.id_empresa = usu.id_empresa

    where id_usuario = :id_usuario
    order by emp.nm_empresa`,
    { replacements: { id_usuario } })
    .then(indiceDatas => {
      res.status(200).json(indiceDatas[0])
    })
    .catch(err => {
      console.log(err)
      res.status(500).json('Data não encontrada.')
    })
}