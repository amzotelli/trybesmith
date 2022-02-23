import { UserInterface, TokenInterface } from '../models/UserInterface';
import User from '../models/UserModel';
import { createToken } from '../middlewares/authMiddleware';

const createService = async (user: UserInterface): Promise<createToken> => {
  const { username, classe, level, password } = await User.createUser(user);
  const payload = { id, username };
  const token = jwt.sign(payload, JWT_SECRET, {
    algorithm: 'HS256',
    expiresIn: '1h',
  });
  return { token };
};

export default {
  createService,
};
