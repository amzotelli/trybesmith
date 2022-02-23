import jwt from 'jsonwebtoken';
import { UserInterface, User } from '../models/UserInterface';

const createService = async (user: UserInterface): Promise<UserInterface> => {
  const { id, username, classe, level, password } = await User.create(user);
  const payload = { id, username };
  const token = jwt.sign(payload, process.env.JWT_SECRET, {
    algorithm: 'HS256',
    expiresIn: '1h',
  });
  return { token };
};

export default {
  createService,
};
