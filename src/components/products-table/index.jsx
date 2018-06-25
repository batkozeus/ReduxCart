import React from 'react';
import TableHead from './table-head';
import TableRow from './table-row';
import { Table } from './styled';

const theadCells = ['item', 'price', 'quantity', 'total price', ''];

const ProductsTable = ({
  products,
  removeFromCart,
  increaseQuantity,
  decreaseQuantity
}) => (
  <Table>
    <TableHead cells={theadCells} />
    <tbody>
      {products.map(product => (
        <TableRow
          removeFromCart={() => removeFromCart(product.id)}
          increaseQuantity={() => increaseQuantity(product.id)}
          decreaseQuantity={() => decreaseQuantity(product.id)}
          key={product.id}
          totalPrice={product.quantity * product.price}
          {...product}
        />
      ))}
    </tbody>
  </Table>
);

export default ProductsTable;
