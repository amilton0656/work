const bcrypt = require('bcryptjs')

const PessoaComplemento = require('../models/mo_pessoaComplemento')

exports.addPessoaComplemento = (req, res, next) => {
  const pessoaComplemento = req.body
  PessoaComplemento.create(pessoa)
    .then(pessoaComplemento => {
      res.status(200).json(pessoaComplemento)
    })
    .catch(err => {
      console.log(err)
      res.status(500).json('Complemento não encontrado.')
    })
}

exports.updPessoaComplemento = (req, res, next) => {
  const body = req.body
  const id_dados = body.id_dados

  console.log('body', body, 'id id ', id_dados)

  PessoaComplemento.findByPk(id_dados)
    .then(pessoaComplemento => {
      pessoaComplemento.update(body)
    })
    .then(pessoaComplemento => {
      res.status(200).json(body)
    })
    .catch(err => {
      console.log(err)
      res.status(500).json('Complemento não encontrado.')
    })
}

exports.delPessoaComplemento = (req, res, next) => {
  const id = req.params.id

  PessoaComplemento.findByPk(id)
    .then(pessoaComplemento => {
      pessoaComplemento.destroy(pessoaComplemento)
    })
    .then(id => {
      res.status(200).json(id)
    })
    .catch(err => {
      console.log(err)
      res.status(500).json('Complemento não encontrado.')
    })
}


exports.getPessoaComplementoByIdPessoa = (req, res, next) => {

  console.log('chegu no get ' )

  const id_pessoa = req.params.id_pessoa
  console.log('chegu no get ', id_pessoa )

  PessoaComplemento.sequelize.query(`
  select *
  from pessoas_complemento
  where id_pessoa = :id_pessoa`,
  { replacements: { id_pessoa } })
    .then(pessoas => {
      res.status(200).json(pessoas[0])
    })
    .catch(err => {
      console.log(err)
      res.status(500).json('Ocorreu um erro ao buscar os registros.')
    })
}





