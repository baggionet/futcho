'use strict';
module.exports = (sequelize, DataTypes) => {
  const partido = sequelize.define('partido', {
    temporada: DataTypes.STRING,
    torneo: DataTypes.STRING,
    jornada: DataTypes.INTEGER,
    fecha: DataTypes.STRING,
    hora: DataTypes.STRING,
    localId: DataTypes.INTEGER,
    visitaId: DataTypes.INTEGER,
    localGol: DataTypes.INTEGER,
    visitaGol: DataTypes.INTEGER,
    resultado: DataTypes.STRING
  }, {});
  partido.associate = function(models) {
    // associations can be defined here
  };
  return partido;
};