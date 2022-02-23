import jwt from 'jsonwebtoken';

const JWT_SECRET = 'secret';

const createToken = (payload: object) =>
  jwt.sign(payload, JWT_SECRET, { algorithm: 'HS256', expiresIn: '1h' });

const authentication = (token: string) => jwt.verify(token, JWT_SECRET);

export default {
  createToken,
  authentication,
};
