import { useState, useEffect } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import './App.css';
// SERVICES
import { getProducts } from './services/productService';
// PAGES
import Navbar from './components/Navbar';
import Basket from './pages/Basket';
import LoginPage from './pages/LoginPage';
import Orders from './pages/Orders';
import Products from './pages/Products';
import ProductDetails from './pages/Products/ProductDetails';
import ProfilePage from './pages/ProfilePage';
import RegisterPage from './pages/RegisterPage';
import Reviews from './pages/Reviews';

const App = () => {

  const [products, setProducts] = useState([]);
  const [basket, setBasket] = useState([]);
  const [total, setTotal] = useState([]);
  const [user, setUser] = useState({});

  useEffect(() => {
    getProducts()
    .then(data => {
      return setProducts(data)
    })
  }, [])

  const pagesData = [
    {
      path: "/product/:id",
      component: <ProductDetails setBasket={setBasket} total={total} setTotal={setTotal} />
    },
    {
      path: "/basket",
      component: <Basket user={user} setTotal={setTotal} total={total} setBasket={setBasket} basket={basket} />
    },
    {
      path: "/login",
      component: <LoginPage setUser={setUser} />
    },
    {
      path: "/register",
      component: <RegisterPage />
    },
    {
      path: "/profile",
      component: <ProfilePage setUser={setUser} user={user} />
    },
    {
      path: "/orders",
      component: <Orders user={user} />
    },
    {
      path: "/reviews",
      component: <Reviews user={user} />
    },
  ]

  const displayPages = pagesData.map((page) => (
    <Route path={page.path} children={page.component} />
  ))

  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/">
          <Navbar user={user} setUser={setUser} />
          <Products products={products} />
        </Route>
        {displayPages}
      </Switch>
    </BrowserRouter >
  );
}

export default App;