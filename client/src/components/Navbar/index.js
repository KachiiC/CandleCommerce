// TOOLS
import { useAuth0 } from '@auth0/auth0-react';
// CSS
import './Navbar.css'
// COMPONENTS
import { Menu } from 'antd';
import { Link } from 'react-router-dom'
import AccountButton, { HomeButton } from './AccountButtons';
import NavLinks from './NavLinks';

const Navbar = () => {
    // Auth0 Logic
    const { isAuthenticated } = useAuth0()

    const { Item } = Menu

    // Button Style
    const navBarStyle = {
        backgroundColor: "#ffd5d1",
        border: "none",
        opacity: 0.8,
    }

    // filter out pages which do not require authentication
    const unauthedLinks = NavLinks.filter((link) => !link.authentication_required)

    // If unautheticated no access to authentication required pages.
    const linksLogic = isAuthenticated ? NavLinks : unauthedLinks

    // display links according to logic
    const DisplayLinks = linksLogic.map((nav_link) => {

        const { path, icon } = nav_link

        return (
            <Item key={path} icon={icon}>
                <Link to={`/${path}`}>
                    {path.toUpperCase()}
                </Link>
            </Item>
        )
    })

    return (
        <Menu mode="horizontal" style={navBarStyle}>
            <HomeButton />
            {DisplayLinks}
            <AccountButton />
        </Menu>
    )
};

export default Navbar;