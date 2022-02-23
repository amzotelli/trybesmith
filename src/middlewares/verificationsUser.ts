import { Request, Response, Next } from 'express';

const verifyUsername = (req: Request, res: Response, next: Next) => {
  const { username } = req.body;
  if (!username) return res.status(400).send({ error: 'Username is required' });
  if (typeof (username) !== 'string') {
    return res.status(400).send({ error: 'Username must be a string' });
  }
  if (username.length <= 2) {
    return res.status(400).json(
      { message: '"displayName" length must be longer than 2 characters' },
    );
  }
  next();
};
