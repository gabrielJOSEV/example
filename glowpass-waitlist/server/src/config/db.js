import pg from 'pg';
import dotenv from 'dotenv';

dotenv.config();

const { Pool } = pg;

const pool = new Pool({
    connectionString: process.env.DATABASE_URL,
});

pool.query('SELECT NOW()', (err, res) => {
    if (err) {
        console.error('Connection Failed: ', err.message);
    } else if (res && res.rows) {
        console.log('PostgreSQL connected successfully at: ', res.rows[0].now);
    } else {
        console.error('Unexpected response structure.');
    }
});

export default pool;