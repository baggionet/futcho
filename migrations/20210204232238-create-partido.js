'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('partidos', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
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
      fecha: {
        type: Sequelize.STRING
      },
      hora: {
        type: Sequelize.STRING
      },
      localId: {
        type: Sequelize.INTEGER
      },
      localGol: {
        type: Sequelize.INTEGER
      },
      visitaId: {
        type: Sequelize.INTEGER
      },
      visitaGol: {
        type: Sequelize.INTEGER
      },
      estadio: {
        type: Sequelize.STRING
      },
      resultado: {
        type: Sequelize.STRING
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
    return queryInterface.dropTable('partidos');
  }
};