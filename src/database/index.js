import pg from 'pg';
import { config } from 'dotenv';

config();

const pool = new pg.Pool({
  user: process.env.USERNAME,
  database: process.env.DATABASE,
  port: 5432,
});

/* eslint-disable no-unused-vars */
pool.on('error', (err, client) => {
  console.error('Unexpected error on idle client', err);
  process.exit(-1);
});
/* eslint-enable no-unused-vars */

pool.query('SELECT NOW()', (err, res) => {
  if (err) {
    console.log('DATABASE CONNECTION ERROR ', err);
  } else {
    console.log('DATABASE CONNECTED ', res.rows[0].now);
  }
});

const query = async (q) => {
  const client = await pool.connect();
  let res;
  try {
    await client.query('BEGIN');
    try {
      res = await client.query(q);
      await client.query('COMMIT');
    } catch (err) {
      await client.query('ROLLBACK');
      throw err;
    }
  } finally {
    client.release();
  }
  return res;
};
const dbConnection = async (sql) => {
  let res;
  try {
    res = await query(sql);
  } catch (err) {
    console.error(`${err} DATABASE CONNECTION`);
  }
  return res.rows[0];
};

// module.exports = {
//   dbConnection,
// };
export default dbConnection;
