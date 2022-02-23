import jwt from 'jsonwebtoken';

const JWT_SECRET = 'secret';

const authentication = (token: string) => jwt.verify(token, JWT_SECRET);

export default {
  authentication,
};
