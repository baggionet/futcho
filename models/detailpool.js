'use strict';
module.exports = (sequelize, DataTypes) => {
  const detailpool = sequelize.define('detailpool', {
    poolId: DataTypes.INTEGER,
    nameLocal: DataTypes.STRING,
    stateLocal: DataTypes.BOOLEAN,
    stateTie: DataTypes.BOOLEAN,
    nameVisitor: DataTypes.STRING,
    stateVisitor: DataTypes.BOOLEAN
  }, {});
  detailpool.associate = function(models) {
    // associations can be defined here
    detailpool.belongsTo(models.pool, {
      foreingnKey:"poolId"
    });
  };
  return detailpool;
};