import Cart from '../../data/cart';

type BasketItemProps = {
  item: {
    id: number;
    pictures: string[];
    title: string;
    price: number;
  };
};

const BasketItem = (props: BasketItemProps) => {
  const { id, pictures, title, price } = props.item;

  const quantity = Cart.filter(cart_item => cart_item.id === id).length;

  return (
    <div className="basket-item">
      <img src={pictures[0]} alt="basket-item-pic" />
      <h3>
        {title}: £{price}
      </h3>
      <h3>x {quantity}</h3>
    </div>
  );
};

export default BasketItem;
