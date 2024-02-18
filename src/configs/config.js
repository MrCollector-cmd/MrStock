const PORT = process.env.PORT || 3000;

const DB_PASSWORD = process.env.DB_PASSWORD || '';
const DB_HOST = process.env.DB_HOST || 'localhost';
const DB_USER = process.env.DB_USER || 'root';
const DB_NAME = process.env.DB_NAME || 'MrStock';

export {DB_HOST,DB_NAME,DB_PASSWORD,DB_USER,PORT};