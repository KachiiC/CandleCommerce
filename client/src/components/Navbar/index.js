import { useState } from 'react';
import './Navbar.css';
import SmallMenu from './SmallMenu';
import { MenuOutlined } from '@ant-design/icons';
import AuthenticationButton from './AuthenticationButton';
import NavLinks from './NavLinks';
// BASKET
import '../Basket/Basket.css';
import BasketIcon from '../Basket/BasketIcon';
import BasketMenu from 'components/Basket/BasketMenu';

const Navbar = () => {
  const [smallMenu, setSmallMenu] = useState(false);
  const [basketView, setBasketView] = useState(false);

  const iconStyles = {
    color: 'grey',
    fontSize: '25px',
    cursor: 'pointer'
  };

  const smallMenuClick = () => setSmallMenu(!smallMenu);
  const basketClick = () => setBasketView(!basketView);

  return (
    <header>
      <div className="topnav">
        <NavLinks />
        <div className="nav-list-icon" onClick={smallMenuClick}>
          <MenuOutlined style={iconStyles} />
        </div>
        <AuthenticationButton type="menu" />
        <BasketIcon click={basketClick} />
      </div>
      {smallMenu && <SmallMenu click={smallMenuClick} />}
      {basketView && <BasketMenu />}
    </header>
  );
};

export default Navbar;
