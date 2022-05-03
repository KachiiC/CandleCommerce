import express from 'express';
import morgan from 'morgan';
import cors from 'cors';
import userRouter from './routers/user.router';
import productRouter from './routers/product.router';
import orderRouter from './routers/order.router';
import colourRouter from './routers/order.router';

const app = express();
const Route = 3001

app.use(cors())
  .use(morgan('short'))
  .use(express.json())
  .use(userRouter)
  .use(productRouter)
  .use(orderRouter)
  .use(colourRouter);

app.listen(Route, () => {
  console.log(`Server up and running on http://localhost:${Route}`);
});
