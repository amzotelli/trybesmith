import { Router } from 'express';
import productController from '../controllers/productController';

import verificationsUser from '../middlewares/verificationsUser';
import verificationsProduct from '../middlewares/verificationsProduct';

const router = Router();

router
  .post(
    '/',
    verificationsUser.verifyLogin,
    verificationsProduct.verifyName,
    verificationsProduct.verifyAmount,
    productController.create,
  );

export default router;
