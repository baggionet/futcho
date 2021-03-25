module.exports = {
    pgUser: process.env.PGUSER,
    pgHost: process.env.PGHOST,
    pgDatabase: process.env.PGDATABASE,
    pgPassword: process.env.PGPASSWORD,
    pgPort: process.env.PGPORT,
    dialect: 'postgres',
   /* logging: false,
    EMAILUSER: process.env.EMAILUSER,
    PASSWORDEMAILUSER: process.env.PASSWORDEMAILUSER,
    EMAILHOST: process.env.EMAILHOST,
    EMAILPORT: process.env.EMAILPORT,
    EMAILSECURE: process.env.EMAILSECURE === 'true' ? true : false,
    SEED: process.env.SEED,
    HOSTBACK: process.env.HOSTBACK,
    HOSTFRONT: process.env.HOSTFRONT*/
  };
  