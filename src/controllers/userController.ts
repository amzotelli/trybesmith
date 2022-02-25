import { Request, Response } from 'express';
import authMiddleware from '../middlewares/authMiddleware';
import userService from '../services/userService';

const createController = async (req: Request, res: Response) => {
  const { username, classe, level, password } = req.body;
  const token = await userService.createService({ username, classe, level, password });
  res.status(201).json({ token });
};

const login = async (req: Request, res: Response) => {
  const { username, password } = req.body;
  const response = await userService.login(username);
  if (!response || response.password !== password) {
    return res.status(401).json({ error: 'Username or password invalid' });
  }
  const token = authMiddleware.createToken({ id: response.id, username: response.username });
  return res.status(200).json({ token });
};

const getAll = async (req: Request, res: Response) => {
  const { username } = req.body;
  const user = await userService.getAll(username);
  if (!user) return res.status(404).json({ error: 'User not found' });
  return res.status(200).json(user);
};

export default {
  createController,
  login,
  getAll,
};
