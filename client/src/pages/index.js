import Home from './Home'
import ProductsList from './NewProducts'
import ProductDetails from './ProductDetails'
import Orders from './NewOrders'
import Profile from './Profile'
import { Route } from 'react-router-dom';


const pagesData = [
    {
        path: "/orders",
        component: <Orders />
    },
    {
        path: "/basket",
        component: <h1>Basket Page</h1>
    },
    {
        path: "/product/:id",
        component: <ProductDetails />
    },
    {
        path: "/profile",
        component: <Profile />
    },
    {
        path: '/products',
        component: <ProductsList />
    },
    {
        path: "/",
        component: <Home />
    }
]

const PageRoutes = pagesData.map((page) => {

    const { path, component } = page

    return <Route path={path} element={component} key={path} />
})

export default PageRoutes