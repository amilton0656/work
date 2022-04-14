const Sequelize = require('sequelize');

const sequelize = require('../util/DBconnection');

const UsuarioEmpresa = sequelize.define('usuario_empresa', {
  id_usuario: {
    type: Sequelize.INTEGER,
    autoIncrement: false,
    allowNull: false,
    primaryKey: true
  },
  id_empresa: {
    type: Sequelize.INTEGER,
    autoIncrement: false,
    allowNull: false,
    primaryKey: true
  }
}, {
  tableName: 'usuario_empresa',
  timestamp: false,
  createdAt: false,
  updatedAt: false
})

module.exports = UsuarioEmpresa


