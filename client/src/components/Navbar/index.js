import { Menu } from 'antd';
import './Navbar.css'
import { Link } from 'react-router-dom'
import AccountButton, { HomeButton } from './AccountButtons';
import NavLinks from './NavLinks';

const Navbar = () => {

    const navBarStyle = {
        backgroundColor: "#ffd5d1",
        border: "none",
        opacity: 0.8,
    }

    const { Item } = Menu

    const displayLinks = NavLinks.map((nav_link) => {
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
            {displayLinks}
            <AccountButton />
        </Menu>
    )
};

export default Navbar;