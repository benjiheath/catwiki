const Pool = require('pg').Pool;

const e = process.env;

console.log('ne:', e.NODE_ENV);

export const pool = new Pool({
  user: e.NODE_ENV === 'dev' ? e.DEV_USER : e.DB_USER,
  password: e.NODE_ENV === 'dev' ? e.DEV_PASSWORD : e.DB_PASSWORD,
  host: e.NODE_ENV === 'dev' ? e.DEV_HOST : e.DB_HOST,
  port: e.NODE_ENV === 'dev' ? e.DEV_PORT : e.DB_PORT,
  database: e.NODE_ENV === 'dev' ? e.DEV_DB : e.DB_DATABASE,
  ssl: e.NODE_ENV !== 'dev' && {
    rejectUnauthorized: false,
  },
});
