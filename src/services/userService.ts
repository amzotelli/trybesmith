import { UserInput } from '../interfaces/User';
import userModel from '../models/UserModel';
import authMiddleware from '../middlewares/authMiddleware';

const createService = async (user: UserInput): Promise<string> => {
  const { id, username } = await userModel.createUser(user);
  return authMiddleware.createToken({ id, username });
};

export default {
  createService,
};
