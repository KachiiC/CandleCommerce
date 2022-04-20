import React from 'react'

export default function Navbar() {
  const instagram = 'https://www.instagram.com/glowzocandles/?hl=en'
  const facebook = 'https://www.facebook.com/glowzocandles'

  const user = '';

  return (
    <div className="navbar">
      <div className='home_nav_left'>
        <h1>CandleCommerce</h1>
        <a href={instagram} >Instagram logo</a>
        <a href={facebook} >Facebook logo</a>
      </div>
      <h3 className='nav_title'>Welcome {user ? user.name + '!': 'to CandleCommerce!'}</h3>
      <button className='login_basket'>Login/Basket</button>
    </div>
  )
}
