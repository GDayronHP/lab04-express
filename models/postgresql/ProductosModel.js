import client from "../../connection/postgresql/postgresqlConnection.js"; // Importa el cliente de PostgreSQL
class ProductosModel {
    static async getAllProductos() {
        try {
            const res = await client.query("SELECT id, nombre, precio, stock, estado FROM productos;");
            return res.rows;
        } catch (error) {
            console.error("Error fetching all productos:", error);
            throw error;
        }
    }

    static async insertProducto(body) {
        const keys = Object.keys(body);
        const values = Object.values(body);

        const columns = keys.join(", ");
        const placeholders = keys.map((_, i) => `$${i + 1}`).join(", ");

        const query = `INSERT INTO productos (${columns}) VALUES (${placeholders})`;

        try {
            await client.query(query, values);
            return { message: "Producto inserted successfully" };
        } catch (error) {
            console.error("Error inserting producto:", error);
            throw error;
        }
    }

    static async updateProducto(id, body) {
        const keys = Object.keys(body);
        const values = Object.values(body);

        const setClause = keys.map((key, i) => `${key} = $${i + 1}`).join(", ");
        const query = `UPDATE productos SET ${setClause} WHERE id = $${keys.length + 1}`;

        try {
            await client.query(query, [...values, id]);
            return { message: "Producto updated successfully" };
        } catch (error) {
            console.error("Error updating producto:", error);
            throw error;
        }
    }

    static async deleteProducto(id) {
        try {
            await client.query("DELETE FROM productos WHERE id = $1", [id]);
            return { message: "Producto deleted successfully" };
        } catch (error) {
            console.error("Error deleting producto:", error);
            throw error;
        }
    }
}

export default ProductosModel;
