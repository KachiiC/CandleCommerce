const Express = require('express');
const morgan = require('morgan');
const cors = require('cors');

const userRouter = require('./routers/user_router');
const productRouter = require('./routers/product_router');
const orderRouter = require('./routers/order_router');
const colourRouter = require('./routers/order_router');
//const reviewsRouter = require('./routers/reviews_router');

const app = Express();

app
  .use(cors())
  .use(morgan('short'))
  .use(Express.json())
  .use(userRouter)
  .use(productRouter)
  .use(orderRouter)
  .use(colourRouter)
  .listen(3001, () => {
    console.log('Server up and running on http://localhost:3001');
  });
