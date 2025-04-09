import { Client } from 'pg';  // Importa el cliente de PostgreSQL
import dotenv from 'dotenv';

// Cargar variables de entorno desde el archivo .env
dotenv.config();

const config = {
  host: process.env.DB_HOST,  // Dirección del servidor PostgreSQL
  port: process.env.DB_PORT || 5432,  // Puerto de la base de datos (default 5432)
  user: process.env.DB_USER,  // Nombre de usuario de PostgreSQL
  password: process.env.DB_PASSWORD,  // Contraseña de PostgreSQL
  database: process.env.DB_NAME,  // Nombre de la base de datos
};

const client = new Client(config);  // Crea una instancia del cliente PostgreSQL

// Establece la conexión con la base de datos
await client.connect()
  .then(() => console.log('Conectado a la base de datos PostgreSQL'))
  .catch((err) => console.error('Error al conectar a PostgreSQL:', err));

export default client;
