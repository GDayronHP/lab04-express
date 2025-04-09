import mysql from "mysql2";
import fs from "fs";
import path from "path";

// Configuración de la conexión a la base de datos
const connection = mysql.createConnection({
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_NAME,
});

// Leer el archivo SQL con el comando para crear la base de datos
const sqlPath = path.join(__dirname, "create_db.sql");
const sql = fs.readFileSync(sqlPath, "utf-8");

// Ejecutar la creación de la base de datos
connection.connect((err) => {
  if (err) {
    console.error("Error de conexión a la base de datos:", err.stack);
    return;
  }

  console.log("Conexión establecida con la base de datos.");

  // Ejecutar el script SQL
  connection.query(sql, (err, results) => {
    if (err) {
      console.error("Error ejecutando el script de creación:", err);
      return;
    }
    console.log("Base de datos y tablas creadas exitosamente");
    connection.end();
  });
});
