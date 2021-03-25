'use strict';
module.exports = (sequelize, DataTypes) => {
  const depositos = sequelize.define('depositos', {
    cuentaId: DataTypes.INTEGER,
    numero: DataTypes.INTEGER,
    fecha: DataTypes.DATE,
    hora: DataTypes.DATE,
    referencia: DataTypes.STRING,
    monto: DataTypes.INTEGER
  }, {});
  depositos.associate = function(models) {
    depositos.belongsTo(models.cuenta,{
      foreignKey:'cuentaId'
    })
  };
  return depositos;
};