import express from 'express'
import { createProduct, getProducts, getProductById, updateProduct, deleteProduct } from '../controllers/product.controllers.js'


const router = express.Router();

router.post('/', createProduct);           // Create
router.get('/', getProducts);              // Read All
router.get('/:id', getProductById);        // Read One
router.put('/:id', updateProduct);         // Update [PUT]
router.delete('/:id', deleteProduct);      // Delete

export default router;
