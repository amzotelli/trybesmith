import { ResultSetHeader } from 'mysql2';
import { UserInput, User } from '../interfaces/User';
import { LoginInput } from '../interfaces/Login';
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

const getAll = async (login: LoginInput): Promise<User> => {
  const { username } = login;
  const query = 'SELECT * FROM Trybesmith.Users WHERE username = ?';
  const [rows] = await connection.execute(query, [username]);
  const [user] = rows as User[];
  return user;
};

export default {
  createUser,
  getAll,
};
