import { Router } from 'express';
import productController from '../controllers/productController';

import verificationsProduct from '../middlewares/verificationsProduct';

const router = Router();

router
  .post(
    '/',
    verificationsProduct.verifyToken,
    verificationsProduct.verifyName,
    verificationsProduct.verifyAmount,
    productController.create,
  );

export default router;
