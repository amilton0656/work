const UsuarioEmpreendimento = require('../models/mo_usuarioEmpreendimento')

exports.addUsuarioEmpreendimento = (req, res, next) => {
  const registro = req.body
  const id_usuario = registro.id_usuario
  const id_empreendimento = registro.id_empreendimento

  UsuarioEmpreendimento.sequelize.query(`
  select * 
  from empreendimento_usuario

  where id_usuario = :id_usuario
  and id_empreendimento = :id_empreendimento`,
  { replacements: { id_usuario, id_empreendimento } })
  .then(indiceData => {
    if (indiceData[0].length > 0) {
    } else {
      UsuarioEmpreendimento.create(registro)
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

exports.delUsuarioEmpreendimento = (req, res, next) => {
  const id_usuario = req.params.usuario
  const id_empreendimento = req.params.empreendimento

  UsuarioEmpreendimento.sequelize.query(`
  delete 
  from empreendimento_usuario

  where id_usuario = :id_usuario
  and id_empreendimento = :id_empreendimento`,
  { replacements: { id_usuario, id_empreendimento } })
  .then(item => {
    console.log('deletou')
    res.status(200).json('Exclusão efetuada.')
  })
  .catch(err => {
    console.log(err)
    res.status(500).json('Erro ao inserir.')
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