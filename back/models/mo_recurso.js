const Sequelize = require('sequelize')

const sequelize = require('../util/DBconnection')

const Recurso = sequelize.define('recurso', {
  id_recurso: {
    type: Sequelize.INTEGER,
    allowNull: false,
    primaryKey: true
  },
  nm_recurso: Sequelize.STRING(100),
  tx_uri: Sequelize.STRING(255),
  tx_nomeform: Sequelize.STRING(150),
  tx_nomeacao: Sequelize.STRING(100),
  ordem: Sequelize.INTEGER,
  menu: Sequelize.INTEGER,
  link: Sequelize.STRING(255),
  nav: Sequelize.STRING(255),
  notshow: Sequelize.INTEGER
}, {
  tableName: 'recurso',
  timestamp: false,
  createdAt: false,
  updatedAt: false
});

module.exports = Recurso
