import { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route, Switch} from 'react-router-dom';

import './App.css';
import Navbar from './components/Navbar';
import Products from './components/Products';
import { getProducts } from './services/productService';
import ProductDetails from './components/ProductDetails';
import Basket from './components/Basket';
import LoginPage from './components/LoginPage';


function App() {

const [products, setProducts] = useState([]);
const [basket, setBasket] = useState([]);
const [total, setTotal] = useState([])

useEffect(() => {
  getProducts().then(data => {
    return setProducts(data)
  })
}, [])

  return (
    <Router>
    <div>
      <Switch>
        <Route exact path="/">
          <Navbar />
          <Products products={products}/>
        </Route>
        <Route path="/product/:id" >
          <ProductDetails setBasket={setBasket} total={total} setTotal={setTotal} />
        </Route>
        <Route path="/basket">
          <Basket setTotal={setTotal} total={total} setBasket={setBasket} basket={basket} />
        </Route>
        <Route path="/login">
          <LoginPage />
        </Route>
      </Switch>
    </div>
    </Router>
  );
}

export default App;
