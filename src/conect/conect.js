import mysql from 'mysql';

const pool = mysql.createPool({
    host:'localhost',
    user:'root',
    database: 'MrStock'
});
export {pool};