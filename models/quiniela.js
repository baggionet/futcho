'use strict';
module.exports = (sequelize, DataTypes) => {
  const quiniela = sequelize.define('quiniela', {
    numero: DataTypes.INTEGER,
    fecha: DataTypes.DATE,
    temporada: DataTypes.STRING,
    torneo: DataTypes.STRING,
    jornada: DataTypes.INTEGER,
    usuarioId: DataTypes.INTEGER,
    pagado: DataTypes.BOOLEAN
  }, {});
  quiniela.associate = function(models) {
    quiniela.belongsTo(models.usuario,{
      foreignKey:'usuarioId'
    });
    quiniela.hasMany(models.detallesQuiniela);
  };
  return quiniela;
};