//Components
import { Button } from '@material-ui/core';
//Types
import { CartItemType } from '../App';
//Styles
import { Wrapper } from './Item.styles';

interface Props {
  item: CartItemType;
  handleAddToCart(item: CartItemType): void;
}

const Item: React.FC<Props> = ({ item, handleAddToCart }) => (
  <Wrapper>
    <img src={item.image} alt={item.title} />
    <div>
      <h2>{item.title}</h2>
      <p>{item.description}</p>
      <h4>Price : ${item.price}</h4>
    </div>
    <Button onClick={() => handleAddToCart(item)}>Add To Cart</Button>
  </Wrapper>
);

export default Item;
