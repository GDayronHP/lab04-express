import ProductosModel from "../models/productosModel.js";

class ProductosController {
    static async getAllProductos(req, res) {
        try {
            const productos = await ProductosModel.getAllProductos();
            res.status(200).json(productos);
        } catch (error) {
            console.error("Error fetching all productos:", error);
            res.status(500).json({ error: "Internal server error" });
        }
    }

    static async insertProducto(req, res) {
        try {
            const producto = req.body;
            const result = await ProductosModel.insertProducto(producto);
            res.status(201).json(result);
        } catch (error) {
            console.error("Error inserting producto:", error);
            res.status(500).json({ error: "Internal server error" });
        }
    }

    static async updateProducto(req, res) {
        try {
            const id = req.params.id;
            const producto = req.body;
            const result = await ProductosModel.updateProducto(id, producto);
            res.status(200).json(result);
        } catch (error) {
            console.error("Error updating producto:", error);
            res.status(500).json({ error: "Internal server error" });
        }
    }

    static async deleteProducto(req, res) {
        try {
            const id = req.params.id;
            const result = await ProductosModel.deleteProducto(id);
            res.status(200).json(result);
        } catch (error) {
            console.error("Error deleting producto:", error);
            res.status(500).json({ error: "Internal server error" });
        }
    }
}

export default ProductosController;