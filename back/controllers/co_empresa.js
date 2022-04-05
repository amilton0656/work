const Empresa = require('../models/mo_empresa')

exports.addEmpresa = (req, res, next) => {
  const empresa = req.body

  Empresa.create(empresa)
    .then(empresa => {
      res.status(200).json(empresa)
    })
    .catch(err => {
      console.log(err)
      res.status(500).json('Problemas ao cadastrar.')
    })
}

exports.updEmpresa = (req, res, next) => {
  const body = req.body
  const id_empresa = body.id_empresa

  Empresa.findByPk(id_empresa)
    .then(empresa => {
      empresa.update(body)
    })
    .then(empresa => {
      res.status(200).json(body)
    })
    .catch(err => {
      console.log(err)
      res.status(500).json('Problemas ao atualizar.')
    })
}

exports.delEmpresa = (req, res, next) => {
  const id = req.params.id

  Empresa.findByPk(id)
    .then(empresa => {
      empresa.destroy(empresa)
    })
    .then(id => {
      res.status(200).json(id)
    })
    .catch(err => {
      console.log(err)
      res.status(500).json('Problemas ao excluir.')
    })
}

exports.getEmpresaById = (req, res, next) => {
  const id = req.params.id
  console.log('id ', id)
  Empresa.findByPk(id)
    .then(empresa => {
      res.status(200).json(empresa)
    })
    .catch(err => {
      console.log(err)
      res.status(500).json('Empresa não encontrada.')
    })
}

exports.getAllEmpresas = (req, res, next) => {
  Empresa.sequelize.query(`
  select *
  from empresa
  order by id_empresa`)
    .then(empresas => {
      res.status(200).json(empresas[0])
    })
    .catch(err => {
      console.log(err)
      res.status(500).json('Empresas não encontradas.')
    })
}




