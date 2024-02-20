// import mysql from 'mysql';
import mysql from 'mysql2';
import { DB_HOST,DB_NAME,DB_PASSWORD,DB_USER,DB_PORT } from '../configs/config.js';

const pool = mysql.createPool({
    host:DB_HOST,
    user:DB_USER,
    database: DB_NAME,
    password: DB_PASSWORD,
    port: DB_PORT
});
export {pool};