import connection from "./connection/mysql/mysqlConnection";

// Ejecutar el script SQL
connection.query(
  "CREATE TABLE IF NOT EXISTS productos (id BINARY(16) PRIMARY KEY DEFAULT (UUID_TO_BIN(UUID())),nombre VARCHAR(100) NOT NULL UNIQUE, precio INT NOT NULL, stock INT NOT NULL, estado VARCHAR(100) NOT NULL);",
  (err, results) => {
    if (err) {
      console.error("Error ejecutando el script de creación:", err);
      return;
    }
    console.log("Base de datos y tablas creadas exitosamente");
    connection.end();
  }
);
