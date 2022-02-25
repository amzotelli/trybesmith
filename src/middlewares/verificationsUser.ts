import { Request, Response } from 'express';

const verifyUsername = (req: Request, res: Response) => {
  const { username } = req.body;
  if (!username) return res.status(400).send({ error: 'Username is required' });
  if (typeof (username) !== 'string') {
    return res.status(422).send({ error: 'Username must be a string' });
  }
  if (username.length <= 2) {
    return res.status(422).send({ error: 'Username must be longer than 2 characters' });
  }
};

const verifyClasse = (req: Request, res: Response) => {
  const { classe } = req.body;
  if (!classe) return res.status(400).send({ error: 'Classe is required' });
  if (typeof (classe) !== 'string') {
    return res.status(422).send({ error: 'Classe must be a string' });
  }
  if (classe.length <= 2) {
    return res.status(422).send({ error: 'Classe must be longer than 2 characters' });
  }
};

const verifyLevel = (req: Request, res: Response) => {
  const { level } = req.body;
  if (!level) return res.status(400).send({ error: 'Level is required' });
  if (typeof (level) !== 'number') return res.status(422).send({ error: 'Level must be a number' });
  if (level < 1) return res.status(422).send({ error: 'Level must be greater than 0' });
};

const verifyPassword = (req: Request, res: Response) => {
  const { password } = req.body;
  if (!password) return res.status(400).send({ error: 'Password is required' });
  if (typeof (password) !== 'string') {
    return res.status(422).send({ error: 'Password must be a string' });
  }
  if (password.length <= 7) {
    return res.status(422).send({ error: 'Password must be longer than 7 characters' });
  }
};

export default {
  verifyUsername,
  verifyClasse,
  verifyLevel,
  verifyPassword,
};
