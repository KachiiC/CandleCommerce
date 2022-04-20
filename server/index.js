const Express = require('express');
const morgan = require('morgan');
const cors = require('cors');

const productRouter = require('./routers/product_router');
const userRouter = require('./routers/user_router');
const reviewsRouter = require('./routers/reviews_router');
const ordersRouter = require('./routers/orders_router');

const app = Express();

app.use(cors())
  .use(morgan('short'))
  .use(Express.json())
  .use(productRouter);

async function bootstrap () {
  try {
    app.listen(3000, () => {
      console.log('Server up and running on http://localhost:3000');
    });
  } catch (err) {
    console.error(err);
  }
}
bootstrap();