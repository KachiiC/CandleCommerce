import { useState } from 'react'
import { useAuth0 } from '@auth0/auth0-react'
import { Link } from 'react-router-dom'
import './Navbar.css'
import SmallMenu from './SmallMenu';
import NavLinksData, { unauthedLinks } from './NavLinksData';
import { MenuOutlined } from '@ant-design/icons';
import BasketMenu from './BasketMenu';
import AuthenticationButton from './AuthenticationButton';


const Navbar = () => {

    const [smallMenu, setSmallMenu] = useState(false);

    const { isAuthenticated } = useAuth0();

    // If unautheticated no access to authentication required pages.
    const linksLogic = isAuthenticated ? NavLinksData : unauthedLinks

    // tool small menu
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
                <AuthenticationButton />
                <BasketMenu />
            </div>
            {smallMenu && <SmallMenu setMenu={setSmallMenu} />}
        </header>
    )
}

export default Navbar