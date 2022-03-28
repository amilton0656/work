const PessoaContato = require('../models/mo_pessoaContato')

exports.addPessoaContato = (req, res, next) => {
  const pessoaContato = req.body
  PessoaContato.create(pessoaContato)
    .then(pessoaContato => {
      res.status(200).json(pessoaContato)
    })
    .catch(err => {
      console.log(err)
      res.status(500).json('Contato não encontrado.')
    })
}

exports.updPessoaContato = (req, res, next) => {
  const id = req.body.id_contato
  const body = req.body


  PessoaContato.findByPk(id)
    .then(pessoaContato => {
      pessoaContato.update(body)
    })
    .then(pessoaContato => {
      res.status(200).json(body)
    })
    .catch(err => {
      console.log(err)
      res.status(500).json('Contato não encontrado.')
    })
}

exports.delPessoaContato = (req, res, next) => {
  const id = req.params.id

  PessoaContato.findByPk(id)
    .then(pessoaContato => {
      pessoaContato.destroy(pessoaContato)
    })
    .then(id => {
      res.status(200).json(id)
    })
    .catch(err => {
      console.log(err)
      res.status(500).json('Contato não encontrado.')
    })
}

exports.getPessoaContatoById = (req, res, next) => {
  const id = req.params.id
  PessoaContato.findByPk(id)
    .then(pessoaContato => {
      res.status(200).json(pessoaContato)
    })
    .catch(err => {
      console.log(err)
      res.status(500).json('Contato não encontrado.')
    })
}

exports.getPessoaContatos = (req, res, next) => {

  const id = req.params.id

  console.log('params ',req.params)

  PessoaContato.sequelize.query(`
  select *
  from pessoas_contatos
  where id_pessoa = :id`,
  { replacements: { id } })
    .then(contatos => {
      res.status(200).json(contatos[0])
    })
    .catch(err => {
      console.log(err)
      res.status(500).json('Contatos não encontrados.')
    })
}



