'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('estadisticas', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      equipoId: {
        type: Sequelize.INTEGER
      },
      temporada: {
        type: Sequelize.STRING
      },
      torneo: {
        type: Sequelize.STRING
      },
      jornada: {
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
      puntos: {
        type: Sequelize.INTEGER
      },
      posicion: {
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
    return queryInterface.dropTable('estadisticas');
  }
};