import { Link } from 'react-router-dom'

import instagram_icon from '../media/instagram.png';
import facebook_icon from '../media/facebook.png';
import favicon from '../media/favicon.ico'

export default function Navbar() {
  
  const instagram = 'https://www.instagram.com/glowzocandles/?hl=en'
  const facebook = 'https://www.facebook.com/glowzocandles'
  
  const linkStyle = {
    color: "black",
    textDecoration: 'none',
    textEmphasis: '500'
  };
  const user = '';

  return (
    <div className="navbar">
      <div className='home_nav_left'>
        <h1 className="nav_left_title"><img className="social_icons" src={favicon} alt="candle icon"></img></h1>
        <div className="social_icons_wrapper">
          <a href={instagram} ><img className="social_icons" src={instagram_icon} alt="instagram_icon"></img></a>
          <a href={facebook} ><img className="social_icons" src={facebook_icon} alt="instagram_icon"></img></a>
        </div>
      </div>
      <h3 className='nav_title'>Welcome {user ? user.firstName + '!': 'to Candl eCommerce!'}</h3>
      <div className='login_basket_wrapper'>
      <Link style={linkStyle} to={'/login'} >
        <button className='login_basket'>Login</button>
      </Link>
        <Link style={linkStyle} to={'/basket'}>
        <button className='login_basket'>Basket</button>
      </Link>
      </div>
    </div>
  )
}
