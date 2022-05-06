const Sequelize = require('sequelize');

const sequelize = require('../util/DBconnection');

const UsuarioEmpreendimento = sequelize.define('empreendimento_usuario', {
  id_usuario: {
    type: Sequelize.INTEGER,
    autoIncrement: false,
    allowNull: false,
    primaryKey: true
  },
  id_empreendimento: {
    type: Sequelize.INTEGER,
    autoIncrement: false,
    allowNull: false,
    primaryKey: true
  }
}, {
  tableName: 'empreendimento_usuario',
  timestamp: false,
  createdAt: false,
  updatedAt: false
})

module.exports = UsuarioEmpreendimento


