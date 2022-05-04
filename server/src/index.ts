import Express from 'express';
import morgan from 'morgan';
import cors from 'cors';
import userRouter from './routers/user.router';
import productRouter from './routers/product.router';
import orderRouter from './routers/order.router';
import colourRouter from './routers/colour.router';

const app = Express();
const PORT = 8000;

app
  .use(cors())
  .use(morgan('short'))
  .use(Express.json())
  .use(userRouter)
  .use(productRouter)
  .use(orderRouter)
  .use(colourRouter);

app.listen(PORT, () => {
  console.log(`Server up and running on http://localhost:${PORT}`);
});
