import { UserInput } from '../interfaces/User';
import userModel from '../models/UserModel';
import authMiddleware from '../middlewares/authMiddleware';
import LoginInput from '../interfaces/Login';

const createService = async (user: UserInput): Promise<string> => {
  const { id, username } = await userModel.createUser(user);
  return authMiddleware.createToken({ id, username });
};

const getAll = async (login: LoginInput) => {
  const { password } = login;
  const user = await userModel.getAll(login);
  if (!user || user.password !== password) {
    return { code: 401, message: 'Username or password invalid' };
  }
  const token = authMiddleware.createToken({ id: user.id, username: user.username });
  return token;
};

export default {
  createService,
  getAll,
};
