import db from '../config/database';

const models = {
  users: db.import('./users'),
  pool: db.import('./pool'),
  game: db.import('./game'),
  team: db.import('./team'),
  detailpool: db.import('./detailpool'),
  deposits: db.import('./deposits'),
  account: db.import('./account'),
  statistics: db.import('./statistics')
}

Object.keys(models).forEach(key => {
  if ( 'associate' in models[key]) {
    models[key].associate(models);
  }
});

export default models;
