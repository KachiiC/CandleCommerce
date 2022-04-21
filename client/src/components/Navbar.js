import React from 'react'
import instagram_icon from '../media/instagram.png';
import facebook_icon from '../media/facebook.png';

export default function Navbar() {
  const instagram = 'https://www.instagram.com/glowzocandles/?hl=en'
  const facebook = 'https://www.facebook.com/glowzocandles'

  const user = '';

  return (
    <div className="navbar">
      <div className='home_nav_left'>
        <h1 className="nav_left_title">Candl eCommerce</h1>
        <div className="social_icons_wrapper">
          <a href={instagram} ><img className="social_icons" src={instagram_icon} alt="instagram_icon"></img></a>
          <a href={facebook} ><img className="social_icons" src={facebook_icon} alt="instagram_icon"></img></a>
        </div>
      </div>
      <h3 className='nav_title'>Welcome {user ? user.name + '!': 'to CandleCommerce!'}</h3>
      <button className='login_basket'>Login/Basket</button>
    </div>
  )
}
