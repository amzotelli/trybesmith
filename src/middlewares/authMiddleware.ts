import jwt from 'jsonwebtoken';
import Payload from '../interfaces/Token';

const JWT_SECRET = 'secret';

const createToken = (payload: Payload) =>
  jwt.sign(payload, JWT_SECRET, { algorithm: 'HS256', expiresIn: '1h' });

const authentication = (token: string) => jwt.verify(token, JWT_SECRET);

export default {
  createToken,
  authentication,
};
