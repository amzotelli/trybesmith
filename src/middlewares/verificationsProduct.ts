import { Request, Response, NextFunction } from 'express';
import authMiddleware from './authMiddleware';

const verifyName = (req: Request, res: Response, next: NextFunction) => {
  const { name } = req.body;
  if (!name) return res.status(400).json({ error: 'Name is required' });
  if (typeof (name) !== 'string') {
    return res.status(422).json({ error: 'Name must be a string' });
  }
  if (name.length <= 2) {
    return res.status(422).json({ error: 'Name must be longer than 2 characters' });
  }
  next();
};

const verifyAmount = (req: Request, res: Response, next: NextFunction) => {
  const { amount } = req.body;
  if (!amount) return res.status(400).json({ error: 'Amount is required' });
  if (typeof (amount) !== 'string') {
    return res.status(422).json({ error: 'Amount must be a string' });
  }
  if (amount.length <= 2) {
    return res.status(422).json({ error: 'Amount must be longer than 2 characters' });
  }
  next();
};

const verifyToken = (req: Request, res: Response, next: NextFunction) => {
  const token = req.headers.authorization;
  if (!token) return res.status(401).json({ error: 'Token not found' });
  try {
    authMiddleware.authentication(token);
  } catch (e) {
    return res.status(401).json({ error: 'Invalid token' });
  }
  next();
};
export default {
  verifyName,
  verifyAmount,
  verifyToken,
};
