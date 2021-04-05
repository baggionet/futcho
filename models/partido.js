'use strict';
module.exports = (sequelize, DataTypes) => {
  const partido = sequelize.define('partido', {
    temporada: DataTypes.STRING,
    torneo: DataTypes.STRING,
    jornada: DataTypes.INTEGER,
    fecha: DataTypes.STRING,
    hora: DataTypes.STRING,
    localId: DataTypes.INTEGER,
    localGol: DataTypes.INTEGER,
    visitaId: DataTypes.INTEGER,
    visitaGol: DataTypes.INTEGER,
    estadio: DataTypes.STRING,
    resultado: DataTypes.STRING
  }, {});
  partido.associate = function(models) {
    // associations can be defined here
  };
  return partido;
};