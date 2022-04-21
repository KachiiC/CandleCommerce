import { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route, Switch} from 'react-router-dom';

import './App.css';
import Navbar from './components/Navbar';
import Products from './components/Products';
import { getProducts } from './services/productService';
import ProductDetails from './components/ProductDetails';
import Basket from './components/Basket';


function App() {

const [products, setProducts] = useState([]);
const [basket, setBasket] = useState([]);
const [total, setTotal] = useState()

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
          <ProductDetails setBasket={setBasket} setTotal={setTotal} />
        </Route>
        <Route>
          <Basket setTotal={setTotal} total={total} basket={basket} path="/basket"/>
        </Route>
      </Switch>
    </div>
    </Router>
  );
}

export default App;
