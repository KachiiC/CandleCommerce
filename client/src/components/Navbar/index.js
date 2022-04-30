import { Menu } from 'antd';
import './Navbar.css'
import { Link } from 'react-router-dom'
import AccountButton, { HomeButton } from './AccountButtons';
import NavLinks from './NavLinks';
import { useAuth0 } from '@auth0/auth0-react';


const Navbar = () => {

    const { isAuthenticated } = useAuth0()

    const { Item } = Menu

    const navBarStyle = {
        backgroundColor: "#ffd5d1",
        border: "none",
        opacity: 0.8,
    }

    const unauthedLinks = NavLinks.filter((link) => !link.authentication_required)

    const linksLogic = isAuthenticated ? NavLinks : unauthedLinks

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
        <>
        <Menu mode="horizontal" style={navBarStyle}>
            <HomeButton />
            {DisplayLinks}
            <AccountButton />
        </Menu>
        </>
    )
};

export default Navbar;