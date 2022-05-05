import {
  addProductController,
  findAllProductsController,
  findProductWithComboController,
  findProductWithDetailsController,
  updateProductController
} from '../controllers/product.controller';
import { Router } from 'express';

const router = Router();

router.get('/products', findAllProductsController);
router.get('/product/:id', findProductWithDetailsController);
router.get('/product-combo/:id', findProductWithComboController);
router.post('/product', addProductController);
router.put('/product/:id', updateProductController);

export default router;
