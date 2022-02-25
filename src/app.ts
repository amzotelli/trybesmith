import Express, { json } from 'express';
import userRouter from './routers/usersRouter';
import loginRouter from './routers/loginRouter';

const app = Express();

app.use(json());

app.get('/', (req, res) => res.send('hello world'));

app.use('/users', userRouter);
app.use('/login', loginRouter);

export default app;
