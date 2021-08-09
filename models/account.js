'use strict';
module.exports = (sequelize, DataTypes) => {
  const account = sequelize.define('account', {
    previousBalance: DataTypes.INTEGER,
    balance: DataTypes.INTEGER
  }, {});
  account.associate = function(models) {
    // associations can be defined here
    account.hasOne(models.users);
    account.hasMany(models.deposits);
  };
  return account;
};