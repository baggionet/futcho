'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('detail-pools', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      poolId: {
        type: Sequelize.INTEGER
      },
      nameLocal: {
        type: Sequelize.STRING
      },
      stateLocal: {
        type: Sequelize.BOOLEAN
      },
      stateTie: {
        type: Sequelize.BOOLEAN
      },
      nameVisitor: {
        type: Sequelize.STRING
      },
      stateVisitor: {
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
    return queryInterface.dropTable('detail-pools');
  }
};