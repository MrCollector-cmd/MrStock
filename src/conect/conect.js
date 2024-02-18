import mysql from 'mysql';
import { DB_HOST,DB_NAME,DB_PASSWORD,DB_USER } from '../configs/config.js';

const pool = mysql.createPool({
    host:DB_HOST,
    user:DB_USER,
    database: DB_NAME,
    password: DB_PASSWORD
});
export {pool};