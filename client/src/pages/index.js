import Home from './Home'
import ProductsList from './NewProducts'
import NewProductDetails from './NewProductDetails'
import Orders from './NewOrders'

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
        component: <NewProductDetails />
    },
    {
        path: "/profile",
        component: <h1>Profile Page</h1>
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

export default pagesData