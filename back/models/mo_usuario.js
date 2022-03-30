const Sequelize = require('sequelize');

const sequelize = require('../util/DBconnection');

const pessoa = require('./mo_pessoa')

const Usuario = sequelize.define('usuario', {
  id_usuario: {
    type: Sequelize.INTEGER,
    autoIncrement: true,
    allowNull: false,
    primaryKey: true
  },
  pw_usuario: Sequelize.STRING(10),
  id_perfil: Sequelize.INTEGER,
  id_pessoa: Sequelize.INTEGER,
  nm_nick: Sequelize.STRING(30),
  nu_recurso_automatico: Sequelize.INTEGER,
  bloquear_registros: Sequelize.INTEGER,
  fg_somente_seus: Sequelize.INTEGER,
  id_setor: Sequelize.INTEGER,
  bloqueado: Sequelize.INTEGER,
  email_notificacao: Sequelize.STRING(100),
  cotacm: Sequelize.INTEGER,
  fg_receber_notificacao_projeto: Sequelize.INTEGER,
  ck_entregaunidade: Sequelize.INTEGER,
  app_id: Sequelize.STRING(100),
  suprimentos: Sequelize.INTEGER,
  ck_webtab_max: Sequelize.INTEGER,
  ck_webtab_outros: Sequelize.INTEGER,
  ck_webtab_pbmail: Sequelize.INTEGER,
}, {
  tableName: 'usuario',
  timestamp: false,
  createdAt: false,
  updatedAt: false
})

// Usuario.belongsTo(pessoa.Pessoa, { foreignKey: 'id_pessoa' })

module.exports = Usuario


