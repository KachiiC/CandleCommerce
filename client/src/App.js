import { useState, useEffect } from 'react';
import { BrowserRouter, Route, Switch, useLocation } from 'react-router-dom';
import './App.css';
// SERVICES
import { getProducts } from './services/productService';
// PAGES
import Navbar from './pages/Navbar';
import Products from './pages/Products';
import ProductDetails from './pages/ProductDetails';
import Basket from './pages/Basket';
import LoginPage from './pages/LoginPage';
import RegisterPage from './pages/RegisterPage';
import Orders from './pages/Orders';
import ProfilePage from './pages/ProfilePage';
import Reviews from './pages/Reviews';


function App() {

  const [products, setProducts] = useState([]);
  const [basket, setBasket] = useState([]);
  const [total, setTotal] = useState([]);
  const [user, setUser] = useState({});

  //create custom hook useScroll --> neaten this up
  const location = useLocation();
  
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [location]);

  useEffect(() => {
    getProducts().then(data => {
      return setProducts(data)
    })
  }, [])

  return (
    <BrowserRouter>
      <Switch>
        <Navbar user={user} setUser={setUser} />
        <Route exact path="/">
          <Products products={products} />
        </Route>
        <Route path="/product/:id" >
          <ProductDetails setBasket={setBasket} total={total} setTotal={setTotal} />
        </Route>
        <Route path="/basket">
          <Basket user={user} setTotal={setTotal} total={total} setBasket={setBasket} basket={basket} />
        </Route>
        <Route path="/login">
          <LoginPage setUser={setUser} />
        </Route>
        <Route path="/register">
          <RegisterPage />
        </Route>
        <Route path="/profile">
          <ProfilePage setUser={setUser} user={user} />
        </Route>
        <Route path="/orders">
          <Orders user={user} />
        </Route>
        <Route path="/reviews">
          <Reviews user={user} />
        </Route>
      </Switch>
    </BrowserRouter >
  );
}

export default App;
