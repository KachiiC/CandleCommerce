import { Link, useHistory } from 'react-router-dom'
import { logoutUser } from '../services/userService';

import instagram_icon from '../media/instagram.png';
import facebook_icon from '../media/facebook.png';
import favicon from '../media/favicon.ico'

export default function Navbar(props) {

  const history = useHistory();
  
  const instagram = 'https://www.instagram.com/glowzocandles/?hl=en'
  const facebook = 'https://www.facebook.com/glowzocandles'
  
  const linkStyle = {
    color: "black",
    textDecoration: 'none',
    textEmphasis: '500'
  };

  function logout(event) {
    event.preventDefault();
  
    logoutUser(props.user)
    .then(response => {
      if (response) {
      console.log('logged out')
      props.setUser({})
      return history.push('/'); 
      }
      return console.log('Cannot logout')
    })
  }



  return (
    <div className="navbar">
      <div className='home_nav_left'>
        <h1 className="nav_left_title"><img className="social_icons" src={favicon} alt="candle icon"></img></h1>
        <div className="social_icons_wrapper">
          <a href={instagram} ><img className="social_icons" src={instagram_icon} alt="instagram_icon"></img></a>
          <a href={facebook} ><img className="social_icons" src={facebook_icon} alt="instagram_icon"></img></a>
        </div>
      </div>
      <h3 className='nav_title'>Welcome {props.user.firstName ? 'back, ' + props.user.firstName + '!': 'to Candl eCommerce!'}</h3>
      <div className='login_basket_wrapper'>
        { !props.user.firstName ? 
      <Link style={linkStyle} to={'/login'} >
        <button className='login_basket'>Login</button>
      </Link>
      :
      <Link style={linkStyle} to={'/logout'} >
      <button onClick={logout} className='login_basket'>Logout</button>
    </Link>
      }
        <Link style={linkStyle} to={'/basket'}>
        <button className='login_basket'>Basket</button>
      </Link>
      { props.user.firstName &&
      <Link style={linkStyle} to={'/orders'}>
        <button className='login_basket'>Orders</button>
      </Link>
      }
      </div>
    </div>
  )
}
