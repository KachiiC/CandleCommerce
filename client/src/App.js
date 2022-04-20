import { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route, Switch} from 'react-router-dom';

import './App.css';
import Navbar from './components/Navbar';
import Products from './components/Products';
import { getProducts } from './services/productService';
import ProductDetails from './components/ProductDetails';



function App() {
//load in the products using state and effect 

const [products, setProducts] = useState([]);

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
          <ProductDetails />
        </Route>
      </Switch>
    </div>
    </Router>
  );
}

export default App;
