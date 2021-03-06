import { Router } from 'express';
import productController from '../controllers/productController';

import verificationsProduct from '../middlewares/verificationsProduct';

const router = Router();

router
  .post(
    '/',
    verificationsProduct.verifyToken,
    verificationsProduct.verifyAmount,
    verificationsProduct.verifyName,
    productController.create,
  )
  .get('/', verificationsProduct.verifyToken, productController.getAll);

export default router;
