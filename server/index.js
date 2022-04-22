const Express = require('express');
const morgan = require('morgan');
const cors = require('cors');
const session = require('express-session');

const productRouter = require('./routers/product_router');
const userRouter = require('./routers/user_router');
const reviewsRouter = require('./routers/reviews_router');
const ordersRouter = require('./routers/orders_router');
const { singleProduct } = require('./controllers/products_controller');

const app = Express();

app.use(cors())
  .use(session({
    name: 'sid',
    saveUninitialized: false,
    resave: false,
    cookie: {
      maxAge: 1000 * 60 * 60, // 1hr
      sameSite: true,
      httpOnly: false,
      // change this when sending to production
      secure: false,
    },
  }))
  .use(morgan('short'))
  .use(Express.json())
  .use(productRouter)
  .use(userRouter);

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