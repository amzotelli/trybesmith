import { ProductInput } from '../interfaces/Product';
import productsModel from '../models/productModel';
import authMiddleware from '../middlewares/authMiddleware';

const create = async (product: ProductInput): Promise<void> => {
  const newProduct = await productsModel.createProduct(product);
  return ({ id, username });
};

export default {
  create,
};
