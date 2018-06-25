import React from 'react';
import ProductsTable from './products-table';
import TotalAmount from './total-amount';

const Cart = ({
  products,
  totalAmount,
  removeFromCart,
  increaseQuantity,
  decreaseQuantity
}) => (
  <div>
    <ProductsTable
      removeFromCart={id => removeFromCart(id)}
      increaseQuantity={id => increaseQuantity(id)}
      decreaseQuantity={id => decreaseQuantity(id)}
      products={products}
    />
    <TotalAmount value={totalAmount} />
  </div>
);

export default Cart;
