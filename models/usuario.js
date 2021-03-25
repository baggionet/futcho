'use strict';
module.exports = (sequelize, DataTypes) => {
  const usuario = sequelize.define('usuario', {
    nombre: DataTypes.STRING,
    correo: DataTypes.STRING,
    usuario: DataTypes.STRING,
    contraseña: DataTypes.STRING,
    foto: DataTypes.STRING,
    cuentaId: DataTypes.INTEGER,
    rollId: DataTypes.INTEGER
  }, {});
  usuario.associate = function(models) {
  usuario.belongsTo(models.cuenta,{
    foreignKey:'cuentaId',
    //as: "cuenta"
  });
  usuario.hasMany(models.quiniela);
  };
  return usuario;
};