import { useState } from 'react'
import { useAuth0 } from '@auth0/auth0-react'
import { Link } from 'react-router-dom'
import './Navbar.css'
import SmallMenu from './SmallMenu';
import NavLinksData from './NavLinksData';
import { ShoppingOutlined, MenuOutlined } from '@ant-design/icons';


const Navbar = () => {

    const [smallMenu, setSmallMenu] = useState(false);
    const [basketItems, setBasketItems] = useState(0)

    const { isAuthenticated, loginWithRedirect, logout } = useAuth0();

    // Login in and out logic
    const authLogin = () => loginWithRedirect()
    const authLogout = () => logout({ returnTo: "http://127.0.0.1:3000" })

    const authenticationLogic = isAuthenticated ? "LOGOUT" : "LOGIN"

    // filter out pages which do not require authentication
    const unauthedLinks = NavLinksData.filter((link) => !link.authentication_required)

    // If unautheticated no access to authentication required pages.
    const linksLogic = isAuthenticated ? NavLinksData : unauthedLinks

    // If autheticated return logout, if not return login,
    const actionLogic = isAuthenticated ? authLogout : authLogin

    const clickLogic = () => setSmallMenu(!smallMenu)

    const iconStyles = {
        color: "grey",
        fontSize: "25px",
        cursor: "pointer"
    }

    const displayLink = linksLogic.map((nav) => {

        return (
            <div className="nav-link" key={nav.path}>
                <Link to={`/${nav.path}`}>
                    {nav.path.toUpperCase()}
                </Link>
            </div>
        )
    })

    return (
        <header>
            <div className="topnav">
                {displayLink}
                <div className="nav-list-icon" onClick={clickLogic}>
                    <MenuOutlined style={iconStyles} />
                </div>
                <div className="account-button" onClick={() => actionLogic()}>
                    {authenticationLogic}
                </div>
                <div className="shopping-cart-menu" onClick={() => setBasketItems(prev => prev + 1)}>
                    {basketItems > 0 && <span className="badge">{basketItems}</span>}
                    <ShoppingOutlined style={iconStyles} />
                </div>
            </div>
            {smallMenu && <SmallMenu />}
        </header>
    )
}

export default Navbar