import { Link, useHistory } from 'react-router-dom'
import { logoutUser } from '../../services/userService';
import './Navbar.css'
import NavHeader from './NavHeader';

const Navbar = (props) => {

    const history = useHistory();

    const { user, setUser } = props

    const logout = event  =>{
        event.preventDefault();

        logoutUser(user)
            .then(response => {
                if (response) {
                    setUser({})
                    return history.push('/');
                }
                return console.log('Cannot logout')
            })
    }

    const linkStyle = {
        color: "black",
        textDecoration: 'none',
        textEmphasis: '500'
    };

    const loggedInLogic = !user.firstName ?
        <Link style={linkStyle} to={'/login'} >
            <button className='login_basket'>Login</button>
        </Link>
        :
        <Link style={linkStyle} to='/logout' >
            <button onClick={logout} className='login_basket'>Logout</button>
        </Link>

    const ordersLogic = user._id &&
        <Link style={linkStyle} to='/orders'>
            <button className='login_basket'>Orders</button>
        </Link>

    const profileLogic = user._id &&
        <Link style={linkStyle} to='/profile'>
            <button className='login_basket'>Your Profile</button>
        </Link>
    const TitleLogic = () => {
        const title = user.firstName ? `back ${user.firstName}!` : "to Candle Commerce!" 
        return (
            <h3 className='nav_title'>
                Welcome {title}
            </h3>

        )
    }

    return (
        <div className="navbar">
            <NavHeader />
            <TitleLogic />
            <div className='login_basket_wrapper'>
                <Link style={linkStyle} to='/basket'>
                    <button className='login_basket'>Basket</button>
                </Link>
                {loggedInLogic}
                {profileLogic}
                {ordersLogic}
            </div>
        </div>
    )
}


export default Navbar