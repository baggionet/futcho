import Sequelize from 'sequelize';
import keys from './keys';

export default new Sequelize('quinieladb', 'quiniela', 'quiniela123', {
  host: keys.pgHost,
  dialect: 'postgres'
});
