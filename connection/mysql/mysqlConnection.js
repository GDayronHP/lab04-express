import mysql from 'mysql2/promise';
import dotenv from 'dotenv';

// Load environment variables from .env file
dotenv.config();

const config = {
    host: process.env.DB_HOST,
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_NAME,
}

const connection = await mysql.createConnection(config);

export default connection;
