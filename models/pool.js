module.exports = (sequelize, DataTypes) => {
  const pool = sequelize.define('pool', {
    number: DataTypes.INTEGER,
    date: DataTypes.DATE,
    season: DataTypes.STRING,
    tournament: DataTypes.STRING,
    journey: DataTypes.INTEGER,
    userId: DataTypes.INTEGER,
    paid: DataTypes.BOOLEAN
  }, {});
  pool.associate = function(models) {
    // associations can be defined here
    pool.belongsTo(models.users,{  foreignKey:'userId'  });
    pool.hasMany(models.detailpool);
  };
  return pool;
};