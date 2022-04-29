import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import PagesData from './pages'
import "antd/dist/antd.css";
import './App.css';
// SERVICES
// PAGES
// import Products from './pages/Products';
// import { ProductsData } from './data/products';
// import Basket from './pages/Basket';
// import Orders from './pages/Orders';
// import ProductDetails from './pages/Products/ProductDetails';
// import ProfilePage from './pages/ProfilePage';

const App = () => {

  const displayPages = PagesData.map((page) => {

    const { path, component } = page

    return (
      <Route path={path} element={component} key={path} />
    )
  })

  return (
    <BrowserRouter>
      <Navbar />
      <main>
        <Routes>
          {displayPages}
        </Routes>
      </main>
    </BrowserRouter >
  );
}

export default App;