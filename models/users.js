'use strict';
module.exports = (sequelize, DataTypes) => {
  const users = sequelize.define('users', {
    name: DataTypes.STRING,
    nickName: DataTypes.STRING,
    email: DataTypes.STRING,
    password: DataTypes.STRING,
    photo: DataTypes.STRING,
    accountId: DataTypes.INTEGER,
    rollId: DataTypes.INTEGER
  }, {});
  users.associate = function(models) {
    // associations can be defined here
    users.belongsTo(models.account,{
      foreignKey:"accountId",
    });
    users.hasMany(models.pool);
  };
  return users;
};