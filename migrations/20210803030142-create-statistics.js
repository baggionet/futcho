'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('statistics', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      teamId: {
        type: Sequelize.INTEGER
      },
      season: {
        type: Sequelize.STRING
      },
      tournament: {
        type: Sequelize.STRING
      },
      journey: {
        type: Sequelize.INTEGER
      },
      jj: {
        type: Sequelize.INTEGER
      },
      jg: {
        type: Sequelize.INTEGER
      },
      je: {
        type: Sequelize.INTEGER
      },
      jp: {
        type: Sequelize.INTEGER
      },
      gc: {
        type: Sequelize.INTEGER
      },
      gf: {
        type: Sequelize.INTEGER
      },
      gdif: {
        type: Sequelize.INTEGER
      },
      score: {
        type: Sequelize.INTEGER
      },
      position: {
        type: Sequelize.INTEGER
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
    return queryInterface.dropTable('statistics');
  }
};