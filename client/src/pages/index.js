import Home from './Home'
import Products from './Products'
import ProductDetails from './ProductDetails'
import Orders from './Orders'
import Profile from './Profile'
import { Routes, Route } from 'react-router-dom';
import { useAuth0 } from '@auth0/auth0-react'


const pagesData = [
    {
        path: "/orders",
        component: <Orders />,
        authentication_required: true
    },
    {
        path: "/basket",
        component: <h1>Basket Page</h1>,
        authentication_required: true
    },
    {
        path: "/product/:id",
        component: <ProductDetails />,
        authentication_required: false
    },
    {
        path: "/profile",
        component: <Profile />,
        authentication_required: true
    },
    {
        path: '/products',
        component: <Products />,
        authentication_required: false
    },
    {
        path: "/",
        component: <Home />,
        authentication_required: false
    }
]

const PageRoutes = () => {

    const { isAuthenticated } = useAuth0()

    const noAuthRequired = pagesData.filter(page => !page.authentication_required)

    const authRoutesLogic = isAuthenticated ? pagesData : noAuthRequired

    const displayedRoutes = authRoutesLogic.map((page) => {
        
        const { path, component } = page

        return <Route path={path} element={component} key={path} />
    })

    return (
        <Routes>
            {displayedRoutes}
        </Routes>
    )
}

export default PageRoutes