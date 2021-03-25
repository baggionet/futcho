'use strict';
module.exports = (sequelize, DataTypes) => {
  const estadistica = sequelize.define('estadistica', {
    equipoId: DataTypes.INTEGER,
    temporada: DataTypes.STRING,
    torneo: DataTypes.STRING,
    jornada: DataTypes.INTEGER,
    jj: DataTypes.INTEGER,
    jg: DataTypes.INTEGER,
    je: DataTypes.INTEGER,
    jp: DataTypes.INTEGER,
    gc: DataTypes.INTEGER,
    gf: DataTypes.INTEGER,
    gdif: DataTypes.INTEGER,
    puntos: DataTypes.INTEGER,
    posicion: DataTypes.INTEGER
  }, {});
  estadistica.associate = function(models) {
    estadistica.belongsTo(models.equipo, {foreignKey: "equipoId"});
  };
  return estadistica;
};