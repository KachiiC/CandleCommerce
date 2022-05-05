import { ShoppingOutlined } from '@ant-design/icons';
import Cart from '../../data/cart';

interface BasketProps {
  click: () => void;
}

const BasketIcon = ({ click }: BasketProps) => {
  const iconStyles = {
    color: 'grey',
    fontSize: '25px',
    cursor: 'pointer'
  };

  const basketNumber = Cart.length > 0 && (
    <span className="badge">{Cart.length}</span>
  );

  return (
    <div className="shopping-cart-menu" onClick={click}>
      {basketNumber}
      <ShoppingOutlined style={iconStyles} />
    </div>
  );
};

export default BasketIcon;
