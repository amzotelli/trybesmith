import { Request, Response } from 'express';
import { User } from '../models/UserInterface';
import { createUser } from '../models/UserModel';
import authentication from '../middlewares/authMiddleware';

const createController = async (req: Request, res: Response) => {
  const { username, classe, level, password } = req.body as User;
  try {
    const user = await createUser(username, classe, level, password);
    return res.status(201).json(user);
  } catch (error) {
    res.status(400).send({ token });
  }
};

export default {
  createController,
};
