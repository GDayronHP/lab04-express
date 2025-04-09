import connection from "../connection/mysql/mysqlConnection.js";

class ProductosModel {
    static async getAllProductos() {
        try {
            const [rows] = await connection.query("SELECT BIN_TO_UUID(id) id, nombre, precio, stock, estado FROM productos;");
            return rows;
        } catch (error) {
            console.error("Error fetching all productos:", error);
            throw error;
        }
    }

    static async insertProducto(body) {

        // Generar query

        const keys = Object.keys(body).join(", ");
        const values = Object.values(body).map(value => "?").join(", ");

        const query = `INSERT INTO productos (${keys}) VALUES (${values})`;
        const params = [...Object.values(body)];

        try {
            await connection.query(query, params);
            return { message: "Producto inserted successfully" };
        } catch (error) {
            console.error("Error inserting producto:", error);
            throw error;
        }
    }

    static async updateProducto(id, body) {
        try {
            const [rows] = await connection.query("UPDATE productos SET ? WHERE BIN_TO_UUID(id) = ?", [body, id]);
            return rows;
        } catch (error) {
            console.error("Error updating producto:", error);
            throw error;
        }
    }

    static async deleteProducto(id) {
        try {
            const [rows] = await connection.query("DELETE FROM productos WHERE BIN_TO_UUID(id) = ?", [id]);
            return rows;
        } catch (error) {
            console.error("Error deleting producto:", error);
            throw error;
        }
    }
}

export default ProductosModel;