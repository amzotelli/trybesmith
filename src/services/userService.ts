import { UserInput } from '../interfaces/User';
import userModel from '../models/UserModel';
import authMiddleware from '../middlewares/authMiddleware';

const create = async (user: UserInput): Promise<string> => {
  const { id, username } = await userModel.create(user);
  return authMiddleware.createToken({ id, username });
};

const login = async (username: string) => {
  const user = await userModel.getAll(username);
  return user;
}; 

const getAll = async (username: string): Promise<UserInput> => {
  const user = await userModel.getAll(username);
  return user;
};

const getByEmail = async (email: string): Promise<UserInput> => {
  const user = await userModel.getByEmail(email);
  return user;
};

export default {
  create,
  login,
  getAll,
  getByEmail,
};
