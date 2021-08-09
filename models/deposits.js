'use strict';
module.exports = (sequelize, DataTypes) => {
  const deposits = sequelize.define('deposits', {
    accountId: DataTypes.INTEGER,
    number: DataTypes.INTEGER,
    date: DataTypes.DATE,
    time: DataTypes.DATE,
    reference: DataTypes.STRING,
    amount: DataTypes.INTEGER
  }, {});
  deposits.associate = function(models) {
    // associations can be defined here
    deposits.belongsTo(models.account,{
      foreignKey:'accountId'
    })
  };
  return deposits;
};