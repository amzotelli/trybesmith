import { Router } from 'express';
import userController from '../controllers/userController';

import verificationsUser from '../middlewares/verificationsUser';

const router = Router();

router
  .post(
    '/',
    verificationsUser.verifyLogin,
    userController.login,
  );

export default router;
