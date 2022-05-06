const UsuarioEmpreendimento = require('../models/mo_usuarioEmpreendimento')

exports.addUsuarioEmpreendimento = (req, res, next) => {
  const usuarioEmpreendimento = req.body
  UsuarioEmpreendimento.create(usuarioEmpreendimento)
    .then(usuarioEmpreendimento => {
      res.status(200).json(usuarioEmpreendimento)
    })
    .catch(err => {
      console.log(err)
      res.status(500).json('Erro ao salvar.')
    })
}

exports.updUsuarioEmpreendimento = (req, res, next) => {
  const id = req.params.id
  const body = req.body

  UsuarioEmpreendimento.findByPk(id)
    .then(indiceData => {
      indiceData.update(body)
    })
    .then(indiceData => {
      res.status(200).json(body)
    })
    .catch(err => {
      console.log(err)
      res.status(500).json('Erro ao aualizar.')
    })
}

exports.delUsuarioEmpreendimento = (req, res, next) => {
  const id = req.params.id

  UsuarioEmpreendimento.findByPk(id)
    .then(indiceData => {
      indiceData.destroy(indiceData)
    })
    .then(id => {
      res.status(200).json(id)
    })
    .catch(err => {
      console.log(err)
      res.status(500).json('Erro ao excluir.')
    })
}

exports.getEmpreendimentosByUsuario = (req, res, next) => {
  const id_usuario = req.params.id_usuario
  console.log(id_usuario)
  UsuarioEmpreendimento.sequelize.query(`
    select usu.*, 
    pes.nome as nomeusuario,
    emp.nome as nomeempreendimento
    from empreendimento_usuario usu

    left join pessoas pes
    on pes.id_pessoa = usu.id_usuario

    left join empreendimentos emp
    on emp.id_empreendimento = usu.id_empreendimento

    where id_usuario = :id_usuario
    order by emp.nome`,
    { replacements: { id_usuario } })
    .then(indiceDatas => {
      res.status(200).json(indiceDatas[0])
    })
    .catch(err => {
      console.log(err)
      res.status(500).json('Empreendimento não encontrada.')
    })
}