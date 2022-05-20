const Sequelize = require('sequelize');

const sequelize = require('../util/DBconnection');

const UsuarioRecurso = sequelize.define('usuario_recurso', {
  id_usuario: {
    type: Sequelize.INTEGER,
    autoIncrement: false,
    allowNull: false,
    primaryKey: true
  },
  id_recurso: {
    type: Sequelize.INTEGER,
    autoIncrement: false,
    allowNull: false,
    primaryKey: true
  }
}, {
  tableName: 'usuario_recurso',
  timestamp: false,
  createdAt: false,
  updatedAt: false
})

module.exports = UsuarioRecurso


