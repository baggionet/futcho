'use strict';
module.exports = (sequelize, DataTypes) => {
  const team = sequelize.define('team', {
    name: DataTypes.STRING,
    nickName: DataTypes.STRING,
    logo: DataTypes.STRING,
    stadium: DataTypes.STRING
  }, {});
  team.associate = function(models) {
    // associations can be defined here
    team.hasOne(models.statistics);
  };
  return team;
};