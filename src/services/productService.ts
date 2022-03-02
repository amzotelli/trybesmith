import { ProductInput, Product } from '../interfaces/Product';
import productsModel from '../models/ProductModel';

const create = async (product: ProductInput): Promise<Product> => {
  const newProduct = await productsModel.createProduct(product);
  return newProduct;
};

export default {
  create,
};
