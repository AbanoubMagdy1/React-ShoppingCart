//Components
import Cart from './components/Cart';
import Item from './components/Item';
import { Drawer, Badge, Grid } from '@material-ui/core';
import { ShoppingCart } from '@material-ui/icons';
//Hooks
import { useState } from 'react';
import { useQuery } from 'react-query';
//Styles
import {
  Wrapper,
  CircularProgressCustom,
  IconButtonStyled,
} from './App.styles';

export type CartItemType = {
  id: number;
  price: number;
  title: string;
  category: string;
  description: string;
  image: string;
  amount: number;
};

const getProducts = async (): Promise<CartItemType[]> => {
  return await (await fetch('https://fakestoreapi.com/products')).json();
};

function App() {
  const [open, setOpen] = useState(false);
  const [cartItems, setCartItems] = useState([] as CartItemType[]);
  const { data, error, isLoading } = useQuery<CartItemType[]>(
    'products',
    getProducts
  );

  const totalCartItems = (): number => {
    return cartItems.reduce(
      (acc, cur) => acc + (cur.amount ? cur.amount : 0),
      0
    );
  };

  const handleAddToCart = (newItem: CartItemType): void => {
    let found = false;
    const newCartItems: CartItemType[] = cartItems.map(item => {
      if (item.id !== newItem.id) return item;
      else {
        found = true;
        return { ...item, amount: item.amount + 1 };
      }
    });
    if (found) setCartItems(newCartItems);
    else setCartItems([...newCartItems, { ...newItem, amount: 1 }]);
  };

  const handleRemoveFromCart = (id: number) => {
    setCartItems(prev =>
      prev.reduce((acc, cur) => {
        if (cur.id === id) {
          if (cur.amount > 1) {
            cur.amount = cur.amount - 1;
            acc.push(cur);
          }
          return acc;
        } else {
          acc.push(cur);
          return acc;
        }
      }, [] as CartItemType[])
    );
  };

  if (isLoading) return <CircularProgressCustom />;
  if (error) return <div>Somewhing went wrong</div>;

  return (
    <Wrapper>
      <Drawer anchor="right" open={open} onClose={() => setOpen(false)}>
        <Cart
          items={cartItems}
          handleAddToCart={handleAddToCart}
          handleRemoveFromCart={handleRemoveFromCart}
        />
      </Drawer>
      <IconButtonStyled onClick={() => setOpen(!open)}>
        <Badge badgeContent={totalCartItems()} color="error">
          <ShoppingCart />
        </Badge>
      </IconButtonStyled>
      <Grid container spacing={4}>
        {data?.map(item => (
          <Grid key={item.id} item xs={12} sm={6} md={4} lg={3}>
            <Item item={item} handleAddToCart={handleAddToCart} />
          </Grid>
        ))}
      </Grid>
    </Wrapper>
  );
}

export default App;
