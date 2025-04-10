import { Router } from "express";
import ProductosController from "./controllers/productosController.js";

const router = Router();

router.get('/', ProductosController.getAllProductos);

router.get('/:id', ProductosController.getProductoById);

router.post('/', ProductosController.insertProducto);

router.patch('/:id', ProductosController.updateProducto);

router.delete('/:id', ProductosController.deleteProducto);

export default router;