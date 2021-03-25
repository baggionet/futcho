import db from '../config/database';

const seed = async () => {
  await db.sync({ force: true });
};

seed();
