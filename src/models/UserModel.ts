import { ResultSetHeader } from 'mysql2';
import { UserInput, User } from '../interfaces/User';
import connection from './connection';

const createUser = async (user: UserInput): Promise<User> => {
  const { username, classe, level, password } = user;
  const query = `INSERT INTO Trybesmith.Users (username, classe, level, password) 
  VALUES (?, ?, ?, ?)`;
  const [{ insertId: id }] = await connection.execute<ResultSetHeader>(
    query,
    [username, classe, level, password],
  );
  const newUser: User = { id, username, classe, level, password };
  return newUser;
};

const getAll = async (username: string): Promise<User> => {
  const query = 'SELECT * FROM Trybesmith.Users WHERE username = ?';
  const [rows] = await connection.execute(query, [username]);
  const [user] = rows as User[];
  return user;
};

const getByEmail = async (email: string): Promise<User> => {
  const query = 'SELECT * FROM Trybesmith.Users WHERE email = ?';
  const [rows] = await connection.execute(query, [email]);
  const [user] = rows as User[];
  return user;
};

export default {
  createUser,
  getAll,
  getByEmail,
};
