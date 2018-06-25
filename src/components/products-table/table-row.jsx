import React from 'react';
import Button from '../shared/button';
import { Tr, Td } from './styled';

const TableRow = ({
  name,
  price,
  quantity,
  totalPrice,
  removeFromCart,
  increaseQuantity,
  decreaseQuantity
}) => (
  <Tr>
    <Td>{name}</Td>
    <Td>{price} USD</Td>
    <Td>
      <Button text="-" onClick={decreaseQuantity} />
      <span>{quantity}</span>
      <Button text="+" onClick={increaseQuantity} />
    </Td>
    <Td>{totalPrice}</Td>
    <Td>
      <Button text="Remove from cart" onClick={removeFromCart} />
    </Td>
  </Tr>
);

export default TableRow;
