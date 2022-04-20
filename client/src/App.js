import { useState, useEffect } from 'react';
import './App.css';
import Navbar from './components/Navbar';
import Products from './components/Products';
import { getProducts } from './services/productService';


function App() {
//load in the products using state and effect 

const [products, setProducts] = useState([]);

useEffect(() => {
  getProducts().then(data => {
    return setProducts(data)
  })
}, [])

  return (
    <>
    <Navbar />
    <Products products={products}/>
    </>
  );
}

export default App;
