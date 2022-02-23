import { ResultSetHeader } from 'mysql2';
import connection from './connection';
import { UserInterface, User } from './UserInterface';

const createUser = async (user: UserInterface): Promise<UserInterface> => {
  const { username, classe, level, password } = user;
  const [data] = await connection.execute<ResultSetHeader>(
    'INSERT INTO users (username, classe, level, password) VALUES (?, ?, ?, ?, ?)',
    [username, classe, level, password],
  );
  const { insertId: id } = data;

  const newUser: User = { id, username, classe, level, password };

  return newUser;
};

export default {
  createUser,
};
