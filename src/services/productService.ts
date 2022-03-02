import { ProductInput, Product } from '../interfaces/Product';
import productsModel from '../models/ProductModel';

const create = async (product: ProductInput): Promise<Product> => {
  const { id, name, amount } = await productsModel.createProduct(product);
  return { id, name, amount };
};

const getAll = async (): Promise<Product[]> => productsModel.getAll(); 

export default {
  create,
  getAll,
};
