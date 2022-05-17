const UsuarioEmpresa = require('../models/mo_usuarioEmpresa')

exports.addUsuarioEmpresa = (req, res, next) => {
  const registro = req.body
  const id_usuario = registro.id_usuario
  const id_empresa = registro.id_empresa

  UsuarioEmpresa.sequelize.query(`
  select * 
  from usuario_empresa

  where id_usuario = :id_usuario
  and id_empresa = :id_empresa`,
  { replacements: { id_usuario, id_empresa } })
  .then(indiceData => {
    if (indiceData[0].length > 0) {
    } else {
      UsuarioEmpresa.create(registro)
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

exports.delUsuarioEmpresa = (req, res, next) => {
  const id_usuario = req.params.usuario
  const id_empresa = req.params.empresa

  UsuarioEmpresa.sequelize.query(`
  delete 
  from usuario_empresa

  where id_usuario = :id_usuario
  and id_empresa = :id_empresa`,
  { replacements: { id_usuario, id_empresa } })
  .then(item => {
    console.log('deletou')
    res.status(200).json('Exclusão efetuada.')
  })
  .catch(err => {
    console.log(err)
    res.status(500).json('Erro ao inserir.')
  })
}

exports.getEmpresasByUsuario = (req, res, next) => {
  const id_usuario = req.params.id_usuario
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
      res.status(500).json('Empresa não encontrada.')
    })
}