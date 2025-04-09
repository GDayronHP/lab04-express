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

const createTableQuery = `
  CREATE TABLE IF NOT EXISTS productos (
    id binary(16) PRIMARY KEY DEFAULT (UUID_TO_BIN(UUID())),
    nombre VARCHAR(100) NOT NULL UNIQUE,
    precio INT NOT NULL,
    stock INT NOT NULL,
    estado VARCHAR(100) NOT NULL
  );
`;


const connection = await mysql.createConnection(config);

await connection.query(createTableQuery);
console.log("Tabla 'productos' asegurada en la base de datos.");

export default connection;
