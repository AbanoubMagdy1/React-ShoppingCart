//Components
import { Button } from '@material-ui/core';
//Types
import { CartItemType } from '../App';
//Styles
import { Wrapper } from './CartItem.styles';

interface Props {
  item: CartItemType;
  handleAddToCart(item: CartItemType): void;
  handleRemoveFromCart(id: number): void;
}

const CartItem: React.FC<Props> = ({
  item,
  handleAddToCart,
  handleRemoveFromCart,
}) => (
  <Wrapper>
    <div className="container">
      <h4>{item.title}</h4>
      <div className="info">
        <p>Price : ${item.price}</p>
        <p>Amount : {item.amount}</p>
      </div>
      <div className="buttons">
        <Button
          onClick={() => handleRemoveFromCart(item.id)}
          variant="contained"
          size="small"
          disableElevation
        >
          -
        </Button>
        <p>Total : {(item.price * item.amount).toFixed(2)}</p>
        <Button
          onClick={() => handleAddToCart(item)}
          variant="contained"
          size="small"
          disableElevation
        >
          +
        </Button>
      </div>
    </div>
    <img src={item.image} alt={item.title} />
  </Wrapper>
);
export default CartItem;
