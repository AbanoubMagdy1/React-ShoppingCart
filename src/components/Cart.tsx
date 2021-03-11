//Components
import CartItem from './CartItem';
//Types
import { CartItemType } from '../App';
//Styles
import { Wrapper } from './Cart.styles';

interface Props {
  items: CartItemType[];
  handleAddToCart(item: CartItemType): void;
  handleRemoveFromCart(id: number): void;
}

const Cart: React.FC<Props> = ({
  items,
  handleAddToCart,
  handleRemoveFromCart,
}) => {
  const totalValue = (): string =>
    items.reduce((acc, cur) => acc + cur.price * cur.amount, 0).toFixed(2);

  return (
    <Wrapper>
      <h2>Your shopping cart</h2>
      {items.length === 0 && <h3>Your cart is empty</h3>}
      {items.map(item => (
        <CartItem
          item={item}
          handleAddToCart={handleAddToCart}
          handleRemoveFromCart={handleRemoveFromCart}
        />
      ))}
      <h3>Total : ${totalValue()}</h3>
    </Wrapper>
  );
};

export default Cart;
