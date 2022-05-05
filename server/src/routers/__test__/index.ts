import supertest from 'supertest'; //require supertest
import Express from 'express';
import userRouter from '../../routers/user.router';
import productRouter from '../../routers/product.router';
import orderRouter from '../../routers/order.router';
import colourRouter from '../../routers/colour.router';

const app = Express();

app
  .use(Express.json())
  .use(userRouter)
  .use(productRouter)
  .use(orderRouter)
  .use(colourRouter);

const request = supertest(app); //supertest hits the HTTP server (your app)

export default request;
