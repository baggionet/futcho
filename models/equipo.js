'use strict';
module.exports = (sequelize, DataTypes) => {
  const equipo = sequelize.define('equipo', {
    nombre: DataTypes.STRING,
    apodo: DataTypes.STRING,
    logo: DataTypes.STRING,
    estadio: DataTypes.STRING
    
  }, {});
  equipo.associate = function(models) {
    equipo.hasOne(models.estadistica);
  };
  return equipo;
};