import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import Navbar from './components/Navbar';
// SERVICES
// PAGES
// import Products from './pages/Products';
// import { ProductsData } from './data/products';
// import Basket from './pages/Basket';
// import Orders from './pages/Orders';
// import ProductDetails from './pages/Products/ProductDetails';
// import ProfilePage from './pages/ProfilePage';

const App = () => {

  const pagesData = [
    {
      path: "/basket",
      component: <h1>Basket Page</h1>
    },
    {
      path: "/product/:id",
      component: <h1>product detail</h1>
    },
    {
      path: "/profile",
      component: <h1>Profile Page</h1>
    },
    {
      path: '/products',
      component: <h1>Products Page</h1>
    },
    {
      path: "/",
      component: <h1>Home</h1>
    }
  ]

  const displayPages = pagesData.map((page) => {

    const { path, component } = page

    return (
      <Route path={path} element={component} key={path} />
    )
  })

  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        {displayPages}
      </Routes>
    </BrowserRouter >
  );
}

export default App;