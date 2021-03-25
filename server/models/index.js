import db from '../config/database';

const models = {
  //Indigenous: db.import('./indigenous'),
  db: db
};

Object.keys(models).forEach(key => {
  if ('associate' in models[key]) {
    models[key].associate(models);
  }
});

export default models;
