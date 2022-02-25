import { Router } from 'express';
import userController from '../controllers/userController';

import verificationsUser from '../middlewares/verificationsUser';

const router = Router();

router
  .post(
    '/',
    verificationsUser.verifyUsername,
    verificationsUser.verifyClasse,
    verificationsUser.verifyLevel,
    verificationsUser.verifyPassword,
    userController.createController,
  )
  .get('/', userController.getAll);

export default router;
