'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('detallesQuinielas', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      quinielaId: {
        type: Sequelize.INTEGER
      },
      nombreLocal: {
        type: Sequelize.STRING
      },
      estadoLocal: {
        type: Sequelize.BOOLEAN
      },
      estadoEmpate: {
        type: Sequelize.BOOLEAN
      },
      nombreVisita: {
        type: Sequelize.STRING
      },
      estadoVisita: {
        type: Sequelize.BOOLEAN
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('detallesQuinielas');
  }
};