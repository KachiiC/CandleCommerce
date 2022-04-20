import { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route, Switch} from 'react-router-dom';

import './App.css';
import Navbar from './components/Navbar';
import Products from './components/Products';
import { getProducts } from './services/productService';
import ProductDetails from './components/ProductDetails';

//https://scontent.flhr10-2.fna.fbcdn.net/v/t39.30808-6/275675848_326814872806643_5935923096652623576_n.jpg?_nc_cat=110&ccb=1-5&_nc_sid=8bfeb9&_nc_ohc=TF-kqGP4QSkAX8WaZcJ&_nc_ht=scontent.flhr10-2.fna&oh=00_AT8Tyy6zsw_jdNrKG-hbzkVa2oI-5Cc6kQ4c3sQlLF_z-g&oe=6265866F

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
