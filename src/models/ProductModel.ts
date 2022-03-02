import { ResultSetHeader } from 'mysql2';
import { ProductInput, Product } from '../interfaces/Product';
import connection from './connection';

const createProduct = async (product: ProductInput): Promise<Product> => {
  const { name, amount } = product;
  const query = `INSERT INTO Trybesmith.Products (name, amount) 
  VALUES (?, ?)`;
  const [{ insertId: id }] = await connection.execute<ResultSetHeader>(
    query,
    [name, amount],
  );
  const newProduct: Product = { id, name, amount };
  return newProduct;
};

export default {
  createProduct,
};
