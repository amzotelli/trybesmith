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

const getAll = async (): Promise<Product[]> => {
  const orderId = 0;
  const [rows] = await connection.execute('SELECT * FROM Trybesmith.Products');
  const products = rows as Product[];
  return products.map(({ id, name, amount }) => ({ id, name, amount, orderId }));
};
  
export default {
  createProduct,
  getAll,
};
