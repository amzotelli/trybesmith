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

export default {
  createUser,
};
