import { Request, Response } from 'express';
import productService from '../services/productService';

const create = async (req: Request, res: Response) => {
  const { name, amount } = req.body;
  const newProduct = await productService.create({ name, amount });
  res.status(201).json({ ...newProduct });
};

export default {
  create,
};
