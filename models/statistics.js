'use strict';
module.exports = (sequelize, DataTypes) => {
  const statistics = sequelize.define('statistics', {
    teamId: DataTypes.INTEGER,
    season: DataTypes.STRING,
    tournament: DataTypes.STRING,
    journey: DataTypes.INTEGER,
    jj: DataTypes.INTEGER,
    jg: DataTypes.INTEGER,
    je: DataTypes.INTEGER,
    jp: DataTypes.INTEGER,
    gc: DataTypes.INTEGER,
    gf: DataTypes.INTEGER,
    gdif: DataTypes.INTEGER,
    score: DataTypes.INTEGER,
    position: DataTypes.INTEGER
  }, {});
  statistics.associate = function(models) {
    // associations can be defined here
    statistics.belongsTo(models.team, {foreignKey: "teamId"});
  };
  return statistics;
};