'use strict';
module.exports = (sequelize, DataTypes) => {
  const detallesQuiniela = sequelize.define('detallesQuiniela', {
    quinielaId: DataTypes.INTEGER,
    nombreLocal: DataTypes.STRING,
    estadoLocal: DataTypes.BOOLEAN,
    estadoEmpate: DataTypes.BOOLEAN,
    nombreVisita: DataTypes.STRING,
    estadoVisita: DataTypes.BOOLEAN
  }, {});
  detallesQuiniela.associate = function(models) {
    detallesQuiniela.belongsTo(models.quiniela, {
      foreingnKey:"quinielaId"
    });
  };
  return detallesQuiniela;
};