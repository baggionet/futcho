import db from '../config/database';

const models = {
  usuario: db.import('./usuario'),
  quiniela: db.import('./quiniela'),
  partido: db.import('./partido'),
  equipo: db.import('./equipo'),
  detallesQuiniela: db.import('./detallesquiniela'),
  depositos: db.import('./depositos'),
  cuenta: db.import('./cuenta'),
  estadistica: db.import('./estadistica')
}

Object.keys(models).forEach(key => {
  if ( 'associate' in models[key]) {
    models[key].associate(models);
  }
});

export default models;
