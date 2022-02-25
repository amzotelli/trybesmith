import Express, { json } from 'express';
import userRouter from './routers/usersRouter';

const app = Express();

app.use(json());

app.get('/', (req, res) => res.send('hello world'));

app.use('/users', userRouter);

export default app;
