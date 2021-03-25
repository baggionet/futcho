'use strict';
module.exports = (sequelize, DataTypes) => {
  const cuenta = sequelize.define('cuenta', {
    saldoAnterior: DataTypes.INTEGER,
    saldo: DataTypes.INTEGER
  }, {});
  cuenta.associate = function(models) {
    cuenta.hasOne(models.usuario);
    cuenta.hasMany(models.depositos);
  };
  return cuenta;
};