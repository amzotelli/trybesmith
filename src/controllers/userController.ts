import { Request, Response } from 'express';
import userService from '../services/userService';

const createController = async (req: Request, res: Response) => {
  const { username, classe, level, password } = req.body;
  const tokenNewUser = await userService.createService({ username, classe, level, password });
  res.status(201).json({ tokenNewUser });
};

export default {
  createController,
};
