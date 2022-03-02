import Express, { json } from 'express';
import userRouter from './routers/userRouter';
import loginRouter from './routers/loginRouter';
import productsRouter from './routers/productRouter';

const app = Express();

app.use(json());

app.get('/', (req, res) => res.send('hello world'));

app.use('/users', userRouter);
app.use('/login', loginRouter);
app.use('/products', productsRouter);

export default app;
