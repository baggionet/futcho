'use strict';
module.exports = (sequelize, DataTypes) => {
  const game = sequelize.define('game', {
    season: DataTypes.STRING,
    tournament: DataTypes.STRING,
    journey: DataTypes.INTEGER,
    date: DataTypes.STRING,
    time: DataTypes.STRING,
    localId: DataTypes.INTEGER,
    localGol: DataTypes.INTEGER,
    visitorId: DataTypes.INTEGER,
    visitorGol: DataTypes.INTEGER,
    stadium: DataTypes.STRING,
    result: DataTypes.STRING
  }, {});
  game.associate = function(models) {
    // associations can be defined here
  };
  return game;
};