const bcrypt = require('bcryptjs')
var jwto = require('jsonwebtoken');
var jwt = require('../util/jwt')

const Usuario = require('../models/mo_usuario')

exports.addUsuario = (req, res, next) => {
  const usuario = req.body
  Usuario.create(usuario)
    .then(usuario => {
      res.status(200).json(usuario)
    })
    .catch(err => console.log(err))
}

exports.updUsuario = (req, res, next) => {
  const id = req.body.id_usuario
  const body = req.body

  console.log('id', id)
  console.log('body', req.body)

  Usuario.findByPk(id)
    .then(usuario => {
      usuario.update(body)
    })
    .then(usuario => {
      res.status(200).json(body)
    })
    .catch(err => console.log(err))
}

exports.delUsuario = (req, res, next) => {
  const id = req.params.id

  Usuario.findByPk(id)
    .then(usuario => {
      usuario.destroy(usuario)
    })
    .then(id => {
      res.status(200).json(id)
    })
    .catch(err => console.log(err))
}

// exports.getUsuario = (req, res, next) => {
//   const id_usuario = req.params.id_usuario
//   console.log('chegou usuario ', id_usuario)
//   Usuario.findByPk(id_usuario)
//     .then(usuario => {
//       res.status(200).json(usuario)
//     })
// }

exports.getUsuario = (req, res, next) => {
  const id_usuario = req.params.id_usuario
  console.log('chegou usuario ', id_usuario)
  Usuario.sequelize.query(`
    select usu.*,
    pes.id_pessoa, pes.nome as nomeusuario,
    setor.descricao as nomesetor

    from usuario usu

    left join pessoas pes
    on pes.id_pessoa = usu.id_pessoa

    left join gq_setores setor
    on setor.id = usu.id_setor

    where id_usuario = :id_usuario`,
  { replacements: { id_usuario } })
    .then(usuario => {
      res.status(200).json(usuario[0])
    })
}

exports.getUsuarios = (req, res, next) => {
  Usuario.findAll()
    .then(usuarios => {
      res.status(200).json(usuarios)
    })
    .catch(err => console.log)
}

exports.getAuth = (req, res, next) => {

  const { nome, senha } = req.body
  
  Usuario.sequelize.query(`
    select usu.id_usuario, usu.nm_nick, usu.pw_usuario,
    pes.id_pessoa, pes.nome
    from usuario usu

    left join pessoas pes
    on pes.id_pessoa = usu.id_pessoa

    where nm_nick = :nome`,
  { replacements: { nome } })
    .then(usuarios => {
      const usu = usuarios[0]
      const usuario = usu[0]
      console.log('usuario ', usuario)
      const auth = bcrypt.compareSync(usuario.pw_usuario, senha)
      if (auth) {
        const resultado = {
          id_usuario : usuario.id_usuario,
          nm_nick : usuario.nm_nick,
          id_pessoa : usuario.id_pessoa,
          nome : usuario.nome,
          cpf: '',
          auth,
          token: jwt.createToken(usuario)
        }
        res.status(200).json(resultado)

        } else {
          res.status(500).json('Senha Inválida.')
      }
    })
    .catch(err => {
      res.status(500).json('Usuário não encontrado.')
    })
}

exports.getAuthByCpf = (req, res, next) => {

  const { usuario, senha } = req.body
  console.log('senha : ', senha)
  
  Usuario.sequelize.query(`
  select id_pessoa, nome, cpf_cnpj, senha
  from pessoas
  where cpf_cnpj = :usuario`,
  { replacements: { usuario } })
    .then(usuarios => {
      const usu = usuarios[0]
      const usua = usu[0]
      const auth = bcrypt.compareSync(usua.senha, senha)
      const usuario = {
        nome: usua.nome,
        senha: usua.senha
      }
      if (auth) {
        const resultado = {
          id_usuario : '',
          nm_nick : '',
          id_pessoa : usua.id_pessoa,
          nome : usua.nome,
          cpf: usua.cpf_cnpj,
          auth,
          token: jwt.createToken(usuario)
        }
        res.status(200).json(resultado)

        } else {
          res.status(500).json('Senha Inválida.')
      }
    })
    .catch(err => {
      res.status(501).json('Usuário não encontrado.')
    })
}


exports.servidorON = (req, res, next) => {
  res.send('Servidor ON')

}

exports.getAllUsuarios = (req, res, next) => {
  Usuario.sequelize.query(`
  select 
  pes.nome as nomeusuario,
  usu.*
  from usuario usu

  left join pessoas pes
  on usu.id_pessoa = pes.id_pessoa

  order by usu.nm_nick`)
    .then(recursos => {
      res.status(200).json(recursos[0])
    })
    .catch(err => {
      console.log(err)
      res.status(500).json('Usuários não encontrados.')
    })
}
