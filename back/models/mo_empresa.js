const Sequelize = require('sequelize');

const sequelize = require('../util/DBconnection');

const Usuario = sequelize.define('empresa', {
  id_empresa: {
    type: Sequelize.INTEGER,
    autoIncrement: true,
    allowNull: false,
    primaryKey: true
  },
  nm_empresa: Sequelize.STRING(100),
  tx_logo: Sequelize.BLOB,
  tx_local_imagem: Sequelize.STRING(255),
  tx_nome_imagem: Sequelize.STRING(255),
  id_empreendimento_empresa: Sequelize.INTEGER,
  apelido: Sequelize.STRING(15),
  fg_somente_seus: Sequelize.INTEGER,
}, {
  tableName: 'empresa',
  timestamp: false,
  createdAt: false,
  updatedAt: false
})

// Usuario.belongsTo(pessoa.Pessoa, { foreignKey: 'id_pessoa' })

module.exports = Usuario


