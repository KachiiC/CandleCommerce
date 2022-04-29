import { Link } from 'react-router-dom'
import './Navbar.css'
// import NavHeader from './NavHeader';
import { useAuth0 } from "@auth0/auth0-react"

const Navbar = () => {

    const { user, isAuthenticated, loginWithRedirect, logout } = useAuth0();

    const linkStyle = {
        color: "black",
        textDecoration: 'none',
        textEmphasis: '500'
    };

    const LoginButton = () => {

        return <button onClick={() => loginWithRedirect()} className='login_basket' >Log In</button>;
    };

    const LogoutButton = () => {

        return (
            <button onClick={() => logout({ returnTo: "http://127.0.0.1:3000" }) }>
                Log Out
            </button>
        );
    };

    const loggedInLogic = isAuthenticated ?
        <LogoutButton />
        :
        <LoginButton />


    const ordersLogic = isAuthenticated &&
        <Link style={linkStyle} to='/orders'>
            <button className='login_basket'>Orders</button>
        </Link>

    const profileLogic = isAuthenticated &&
        <Link style={linkStyle} to='/profile'>
            <button className='login_basket'>Your Profile</button>
        </Link>

    const TitleLogic = () => {
        const title = isAuthenticated ? `back ${user.name}!` : "to Candle Commerce!"
        return (
            <h3 className='nav_title'>
                Welcome {title}
            </h3>
        )
    }

    return (
        <div className="navbar">
            <div className='login_basket_wrapper'>
                <Link style={linkStyle} to='/basket'>
                    <button className='login_basket'>Basket</button>
                </Link>
                {loggedInLogic}
                {ordersLogic}
                {profileLogic}
            </div>
            <TitleLogic />
        </div>
    )
}


export default Navbar